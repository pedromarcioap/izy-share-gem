
import React from 'react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 text-gray-300 rounded-xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Política de Privacidade</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 text-gray-400">
          <p><strong>Última atualização:</strong> {new Date().toLocaleDateString()}</p>
          <p>
            Bem-vindo à Política de Privacidade do ShareHub Rápido Web. Sua privacidade é importante para nós.
          </p>

          <h3 className="text-lg font-semibold text-gray-200 pt-4">1. Coleta de Informações</h3>
          <p>
            O ShareHub Rápido Web é projetado para funcionar sem coletar, armazenar ou transmitir qualquer informação pessoal identificável (PII) ou dados de navegação do usuário.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>Nenhum Rastreamento:</strong> Nós não usamos cookies de rastreamento, pixels ou qualquer outra tecnologia para monitorar seu uso do nosso serviço.
            </li>
            <li>
              <strong>Dados de Entrada:</strong> A URL, o título e o texto que você insere nos campos são usados exclusivamente no seu navegador (client-side) para construir os links de compartilhamento. Essas informações nunca são enviadas para nossos servidores.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-200 pt-4">2. Uso das Informações</h3>
          <p>
            Como não coletamos nenhuma informação, não há uso de suas informações. A funcionalidade da aplicação ocorre inteiramente no seu dispositivo. Ao clicar em um ícone de compartilhamento, você é redirecionado para o site de terceiros (por exemplo, Twitter, Facebook), e o uso de seus dados a partir desse ponto é regido pela política de privacidade da respectiva plataforma.
          </p>

          <h3 className="text-lg font-semibold text-gray-200 pt-4">3. Compartilhamento de Informações</h3>
          <p>
            Nós não compartilhamos nenhuma informação pessoal, pois nenhuma é coletada.
          </p>

          <h3 className="text-lg font-semibold text-gray-200 pt-4">4. Segurança</h3>
          <p>
            A aplicação segue as melhores práticas de segurança, operando inteiramente no lado do cliente para garantir que seus dados permaneçam privados e sob seu controle.
          </p>

          <h3 className="text-lg font-semibold text-gray-200 pt-4">5. Mudanças nesta Política</h3>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos sobre quaisquer alterações postando a nova Política de Privacidade nesta página.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
