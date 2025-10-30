
import React from 'react';
import SocialButton from './SocialButton';
import type { SocialPlatform, ShareParams } from '../types';

// Using inline SVGs for icons to avoid extra dependencies.
const TwitterIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-sky-400"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-500"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-12h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-12h3.564v12zM22.225 0h-20.45c-.984 0-1.774.79-1.774 1.774v20.451c0 .984.79 1.774 1.774 1.774h20.45c.984 0 1.775-.79 1.775-1.774v-20.451c0-.984-.791-1.774-1.775-1.774z"></path></svg>;
const RedditIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-orange-500"><path d="M12.021 0C5.383 0 0 5.383 0 12.021s5.383 12.021 12.021 12.021 12.021-5.383 12.021-12.021S18.659 0 12.021 0zM12.021 21.365c-5.163 0-9.344-4.181-9.344-9.344s4.181-9.344 9.344-9.344 9.344 4.181 9.344 9.344-4.181 9.344-9.344 9.344zm-3.328-11.459c-.496 0-.899.403-.899.899s.403.899.899.899.899-.403.899-.899-.403-.899-.899-.899zm6.656 0c-.496 0-.899.403-.899.899s.403.899.899.899.899-.403.899-.899-.403-.899-.899-.899zm-1.832 3.129c-1.353 1.353-3.547 1.353-4.9 0l-.1-.1c-.131-.131-.131-.343 0-.474s.343-.131.474 0l.1.1c1.159 1.159 3.047 1.159 4.206 0 .131-.131.343-.131.474 0s.131.343 0 .474z"></path></svg>;
const WhatsappIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767s2.586 5.767 5.767 5.767c3.18 0 5.767-2.586 5.767-5.767s-2.587-5.767-5.767-5.767zm0 10.3c-2.5 0-4.533-2.033-4.533-4.533s2.033-4.533 4.533-4.533c2.5 0 4.533 2.033 4.533 4.533s-2.033 4.533-4.533 4.533zm6.176-14.072c-1.171-1.171-2.736-1.812-4.409-1.812-1.672 0-3.238.641-4.409 1.812-1.171 1.171-1.812 2.736-1.812 4.409 0 1.672.641 3.238 1.812 4.409l-1.357 4.969 5.068-1.332c1.153.714 2.486 1.104 3.874 1.104 3.428 0 6.221-2.793 6.221-6.221 0-1.673-.641-3.238-1.812-4.409zm-1.767 7.018c-.283.504-.986.9-1.4.956-.379.052-1.018.009-1.504-.176-.567-.215-1.116-.549-1.589-.955-1.29-1.104-2.123-2.6-2.21-2.748-.086-.148-.686-1.023-.686-1.882 0-.859.458-1.282.686-1.458.228-.176.489-.215.631-.215.176 0 .343.009.485.009.176 0 .388-.061.597.436.241.597.832 2.019.9 2.167.069.148.118.315 0 .485-.118.176-.207.283-.352.427-.145.148-.292.315-.41.436-.118.127-.25.26-.118.494.132.232.588.973 1.258 1.579.881.823 1.626 1.096 1.845 1.185.219.088.447.07.622-.052.207-.148.455-.494.574-.661.118-.167.241-.148.396-.088s1.018.476 1.185.565c.167.088.283.132.327.207.044.074.044.427-.239.931z"></path></svg>;
const TelegramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-sky-500"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.253 8.216l-3.253 11.784c-.205.748-.724 1-1.285.63l-4.102-3.23-1.99 1.912c-.218.218-.475.436-.927.436l.32-4.195 7.904-7.464c.345-.316-.067-.487-.522-.172l-9.815 6.188-4.04-1.26c-.732-.232-.748-.84.143-1.248l16.488-6.398c.613-.238 1.16.198.966.906z"></path></svg>;
const EmailIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400"><path d="M12 12.713l-11.985-9.213h23.97l-11.985 9.213zm0 2.574l-12-9.287v15h24v-15l-12 9.287z"></path></svg>;

export const platforms: SocialPlatform[] = [
  { name: 'Twitter', icon: <TwitterIcon />, shareUrl: ({ url, text, title }) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text || title)}` },
  { name: 'Facebook', icon: <FacebookIcon />, shareUrl: ({ url, text }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}` },
  { name: 'LinkedIn', icon: <LinkedinIcon />, shareUrl: ({ url, title, text }) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}` },
  { name: 'Reddit', icon: <RedditIcon />, shareUrl: ({ url, title }) => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}` },
  { name: 'WhatsApp', icon: <WhatsappIcon />, shareUrl: ({ url, text }) => `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}` },
  { name: 'Telegram', icon: <TelegramIcon />, shareUrl: ({ url, text }) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}` },
  { name: 'Email', icon: <EmailIcon />, shareUrl: ({ url, title, text }) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}` },
];

interface SocialGridProps extends ShareParams {}

const SocialGrid: React.FC<SocialGridProps> = ({ url, title, text }) => {
  const shareParams: ShareParams = { url, title, text };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {platforms.map((platform) => (
        <SocialButton key={platform.name} platform={platform} shareParams={shareParams} />
      ))}
    </div>
  );
};
export default SocialGrid;
