// Fix: Declare the 'chrome' global to resolve TypeScript errors in the extension context.
declare const chrome: any;

import React, { useState, useEffect } from 'react';
import type { ShareParams } from './types';
import SocialGrid from './components/SocialGrid';

const Popup: React.FC = () => {
  const [shareParams, setShareParams] = useState<ShareParams | null>(null);

  useEffect(() => {
    // This code runs in the popup, which has access to chrome APIs
    // Fix: Use `typeof` to safely check for the 'chrome' object's existence at runtime.
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (currentTab && currentTab.url) {
          setShareParams({
            url: currentTab.url,
            title: currentTab.title || '',
            text: '', // Text can be added by the user if we add an input
          });
        }
      });
    } else {
      // Fallback for development outside the extension environment
      setShareParams({
        url: 'https://example.com',
        title: 'Example Domain',
        text: 'This is a test share.'
      });
    }
  }, []);

  return (
    <div className="popup-container">
      <header className="header">
        <h1>Izy Share</h1>
        <p>Compartilhar a página atual</p>
      </header>
      <main>
        {shareParams ? (
          <SocialGrid url={shareParams.url} title={shareParams.title} text={shareParams.text} />
        ) : (
          <div className="loader">Carregando dados da página...</div>
        )}
      </main>
    </div>
  );
};

export default Popup;