import React from 'react';
import type { SocialPlatform, ShareParams } from '../types';
import SocialButton from './SocialButton';

// SVG Icons for social platforms
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.833 13.583c0 .833-.667 1.5-1.5 1.5s-1.5-.667-1.5-1.5c0-1.667-1.333-3-3-3s-3 1.333-3 3c0 .833-.667 1.5-1.5 1.5s-1.5-.667-1.5-1.5c0-3.167 2.583-5.75 5.75-5.75s5.75 2.583 5.75 5.75zm-3.25-3.167c-.833 0-1.5-.667-1.5-1.5s.667-1.5 1.5-1.5 1.5.667 1.5 1.5-.667 1.5-1.5 1.5zm-5.167 0c-.833 0-1.5-.667-1.5-1.5s.667-1.5 1.5-1.5 1.5.667 1.5 1.5-.667 1.5-1.5 1.5zm1.583 6c1.5 1.167 3.5 1.167 5 0 .167.333.25.75.25 1.167 0 1.25-1.917 2.25-4.25 2.25s-4.25-1-4.25-2.25c0-.417.083-.833.25-1.167z" /></svg>
);

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.42-1.39c1.37.74 2.92 1.18 4.62 1.18h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.5 14.3c-.28-.14-1.67-.82-1.93-.91s-.45-.14-.64.14-.73.91-.89 1.1s-.33.19-.61.07c-.28-.12-1.18-.44-2.24-1.38s-1.7-1.59-1.9-1.86c-.2-.26-.05-.4.12-.54s.28-.33.42-.5c.14-.16.19-.28.28-.47s.05-.35-.02-.49c-.08-.14-.64-1.54-.87-2.1s-.46-.48-.64-.49h-.52c-.18 0-.47.07-.71.35s-.91.89-.91 2.17.93 2.52 1.06 2.7c.13.18 1.81 2.76 4.38 3.84.6.26 1.08.41 1.45.53.59.19 1.13.16 1.56.1.48-.07 1.67-.68 1.9-1.33s.24-1.22.16-1.34c-.06-.12-.2-.18-.47-.32z"/></svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.69 6.54l-1.44 6.78c-.14.65-.54.81-.97.5l-2.22-1.63-1.08 1.04c-.12.12-.22.22-.44.22l.16-2.28 4.25-3.85c.18-.16-.04-.25-.31-.09l-5.26 3.3-2.18-.68c-.65-.2-1.02-.61-.69-1.2l1.62-5.02c.2-.62.77-1.02 1.46-1.02h.01c.22 0 .43.04.62.13z" /></svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.865 7.828 6.743 9.14.03-.23.04-.51.04-.79 0-.91-.35-2.16-.35-2.16s-.26-.52-.26-1.29c0-1.21.7-2.12 1.58-2.12.74 0 1.1.55 1.1 1.21 0 .74-.47 1.84-.72 2.87-.2.88.44 1.6 1.32 1.6 1.58 0 2.79-1.67 2.79-4.11 0-2.2-1.55-3.75-3.8-3.75-2.58 0-4.22 1.94-4.22 4.02 0 .74.28 1.55.63 2.05.07.1.08.18.06.28l-.18.7c-.05.23-.2.28-.4.18-1.45-.65-2.35-2.61-2.35-4.5 0-3.32 2.4-6.2 6.86-6.2 3.63 0 6.35 2.58 6.35 5.8 0 3.6-2.22 6.4-5.3 6.4-1.07 0-2.08-.55-2.43-1.18l-.53 2.02c-.18.7-.7 1.62-1.03 2.18.91.29 1.86.44 2.85.44 5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
);


export const platforms: SocialPlatform[] = [
  {
    name: 'X (Twitter)',
    icon: <TwitterIcon />,
    shareUrl: ({ url, text }: ShareParams) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    name: 'Facebook',
    icon: <FacebookIcon />,
    shareUrl: ({ url, text }: ShareParams) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    shareUrl: ({ url, title, text }: ShareParams) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`,
  },
  {
    name: 'Reddit',
    icon: <RedditIcon />,
    shareUrl: ({ url, title }: ShareParams) => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon />,
    shareUrl: ({ url, text }: ShareParams) => `https://api.whatsapp.com/send?text=${encodeURIComponent(text ? `${text} - ${url}` : url)}`,
  },
  {
    name: 'Telegram',
    icon: <TelegramIcon />,
    shareUrl: ({ url, text }: ShareParams) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    name: 'E-mail',
    icon: <EmailIcon />,
    shareUrl: ({ url, title, text }: ShareParams) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text ? `${text}\n\n${url}` : url)}`,
  },
  {
    name: 'Pinterest',
    icon: <PinterestIcon />,
    shareUrl: ({ url, text }: ShareParams) => `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`,
  },
];

interface SocialGridProps {
  url: string;
  title: string;
  text: string;
}

const SocialGrid: React.FC<SocialGridProps> = ({ url, title, text }) => {
  const shareParams: ShareParams = { url, title, text };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {platforms.map((platform) => (
        <SocialButton
          key={platform.name}
          platform={platform}
          shareParams={shareParams}
        />
      ))}
    </div>
  );
};

export default SocialGrid;
