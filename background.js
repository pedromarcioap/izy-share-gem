/**
 * Izy Share - Service Worker
 *
 * Este script lida com a lógica de fundo da extensão, primariamente a criação
 * e o gerenciamento dos menus de contexto (clique com o botão direito).
 */

// Definição centralizada das plataformas de compartilhamento para o service worker.
// Esta lista deve ser mantida em sincronia com a do popup, se necessário.
const platforms = [
  {
    name: 'Twitter',
    createUrl: ({ url, text }) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
  },
  {
    name: 'Facebook',
    createUrl: ({ url, text }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`
  },
  {
    name: 'LinkedIn',
    createUrl: ({ url, title }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  },
  {
    name: 'Reddit',
    // Para o Reddit, a lógica é diferente para link vs. texto
    createUrl: ({ url, title, text, isSelection }) => {
      if (isSelection) {
        // Cria um "self-post" (post de texto) quando há uma citação, que é mais apropriado.
        const selfText = `${text}\n\n[Fonte](${url})`;
        return `https://www.reddit.com/submit?title=${encodeURIComponent(title)}&text=${encodeURIComponent(selfText)}`;
      }
      // Cria um post de link para compartilhamento de página inteira.
      return `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    }
  },
  {
    name: 'WhatsApp',
    createUrl: ({ url, text }) => `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
  },
  {
    name: 'Telegram',
    createUrl: ({ url, text }) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
  }
];

/**
 * Função executada quando a extensão é instalada ou atualizada.
 * Limpa menus antigos e cria os novos.
 */
chrome.runtime.onInstalled.addListener(() => {
  // Garante que não haja menus duplicados em caso de recarregamento
  chrome.contextMenus.removeAll(() => {
    // 1. Cria o menu pai para COMPARTILHAMENTO DE SELEÇÃO
    chrome.contextMenus.create({
      id: 'izy-share-selection-parent',
      title: 'Compartilhar seleção via Izy Share...',
      contexts: ['selection'] // Só aparece quando um texto é selecionado
    });

    // 2. Cria o menu pai para COMPARTILHAMENTO DE PÁGINA
    chrome.contextMenus.create({
        id: 'izy-share-page-parent',
        title: 'Compartilhar página via Izy Share...',
        contexts: ['page'] // Aparece em qualquer lugar da página
    });

    // Cria os submenus (filhos) para cada plataforma dentro de cada menu pai
    platforms.forEach(platform => {
      // Adiciona ao menu de seleção
      chrome.contextMenus.create({
        id: `selection-${platform.name.toLowerCase()}`,
        parentId: 'izy-share-selection-parent',
        title: platform.name,
        contexts: ['selection']
      });
      
      // Adiciona ao menu de página
      chrome.contextMenus.create({
        id: `page-${platform.name.toLowerCase()}`,
        parentId: 'izy-share-page-parent',
        title: platform.name,
        contexts: ['page']
      });
    });
  });
});

/**
 * Listener para os cliques nos itens do menu de contexto.
 * @param {object} info - Informações sobre o item clicado e o contexto.
 * @param {object} tab - A aba onde o clique ocorreu.
 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const { menuItemId, pageUrl, selectionText } = info;
  const pageTitle = tab.title || 'Sem Título';

  // Extrai o tipo de ação (selection ou page) e o nome da plataforma do ID do menu
  const [actionType, platformName] = menuItemId.split('-');

  const platform = platforms.find(p => p.name.toLowerCase() === platformName);
  if (!platform) {
    console.error(`Izy Share: Plataforma não encontrada para o ID ${menuItemId}`);
    return;
  }
  
  const isSelection = actionType === 'selection' && selectionText;
  
  // Define o texto a ser compartilhado. Se for seleção, usa o texto selecionado, senão, usa o título da página.
  const textToShare = isSelection ? `"${selectionText.trim()}"` : pageTitle;

  const shareUrl = platform.createUrl({
    url: pageUrl,
    text: textToShare,
    title: pageTitle,
    isSelection: isSelection
  });

  // Abre a URL de compartilhamento em uma nova aba
  if (shareUrl) {
    chrome.tabs.create({ url: shareUrl, index: tab.index + 1 });
  }
});
