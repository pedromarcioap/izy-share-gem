
import React from 'react';
import type { SocialPlatform, ShareParams } from '../types';

interface SocialButtonProps {
  platform: SocialPlatform;
  shareParams: ShareParams;
  onShare?: () => void;
  size?: 'small' | 'normal';
}

const SocialButton: React.FC<SocialButtonProps> = ({ platform, shareParams, onShare, size = 'normal' }) => {
  const { name, icon, shareUrl } = platform;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!shareParams.url) {
      e.preventDefault();
      // In a real scenario, you might want a better user feedback mechanism
      console.warn('URL is missing, cannot share.');
      return;
    }
    const finalUrl = shareUrl(shareParams);
    e.currentTarget.href = finalUrl;

    // Fix: Call onShare callback if it exists, to close the selection popup.
    if (onShare) {
      onShare();
    }
  };

  const isSmall = size === 'small';

  const buttonClasses = `
    flex items-center justify-center 
    text-gray-300 no-underline 
    transition-all duration-200 
    hover:text-white hover:-translate-y-0.5
    ${isSmall ? 'p-2 rounded-lg hover:bg-gray-700' : 'flex-col p-4 rounded-xl bg-gray-800/50'}`;
  
  const iconWrapperClasses = isSmall ? 'w-5 h-5' : 'w-7 h-7';
  
  const nameClasses = `
    font-medium
    ${isSmall ? 'sr-only' : 'mt-2 text-sm'}`;

  return (
    <a
      href="#"
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      title={`Compartilhar em ${name}`}
      className={buttonClasses.replace(/\s+/g, ' ').trim()}
    >
      <div className={iconWrapperClasses}>{icon}</div>
      <span className={nameClasses}>{name}</span>
    </a>
  );
};

export default SocialButton;
