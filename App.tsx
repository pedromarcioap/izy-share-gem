import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SocialGrid from './components/SocialGrid';
import PrivacyPolicy from './components/PrivacyPolicy';
import SelectionPopup from './components/SelectionPopup';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [selection, setSelection] = useState<{ text: string; x: number; y: number } | null>(null);
  
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);

    const handleMouseUp = (event: MouseEvent) => {
      // Don't show popup if selecting text inside an input/textarea
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        setSelection(null);
        return;
      }

      const selectedText = window.getSelection()?.toString().trim();
      if (selectedText) {
        setSelection({
          text: selectedText,
          x: event.clientX,
          y: event.clientY,
        });
      } else {
        setSelection(null);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      {selection && (
        <SelectionPopup
          selection={selection}
          url={url}
          title={title}
          onClose={() => setSelection(null)}
        />
      )}

      <div className="w-full max-w-4xl mx-auto">
        <Header />

        <main className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8">
          <p className="text-center text-cyan-300 bg-cyan-900/50 rounded-md p-3 mb-6">
            ✨ <strong className="font-semibold">Nova Funcionalidade:</strong> Selecione qualquer texto nesta página para compartilhar!
          </p>
          <div className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
                URL para Compartilhar
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
             <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Título (para Reddit, etc.)
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título da Página"
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
                Texto / Citação (Opcional)
              </label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder="Escreva uma citação ou comentário..."
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4 text-gray-300">Ou compartilhe a página inteira:</h3>
            <SocialGrid url={url} title={title} text={text} />
          </div>
        </main>
        
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ShareHub Rápido Web. Todos os direitos reservados.</p>
          <button onClick={() => setShowPrivacy(true)} className="underline hover:text-gray-300 transition-colors">
            Política de Privacidade
          </button>
        </footer>
      </div>
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </div>
  );
};

export default App;