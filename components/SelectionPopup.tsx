import React from 'react';
import { platforms } from './SocialGrid';
import SocialButton from './SocialButton';

interface SelectionPopupProps {
  selection: {
    text: string;
    x: number;
    y: number;
  };
  url: string;
  title: string;
  onClose: () => void;
}

const SelectionPopup: React.FC<SelectionPopupProps> = ({ selection, url, title, onClose }) => {
  const { text, x, y } = selection;

  const popupStyle: React.CSSProperties = {
    position: 'fixed',
    top: `${y + 15}px`, // Offset below cursor
    left: `${x}px`,
    transform: 'translateX(-50%)', // Center on cursor
    zIndex: 50,
  };

  return (
    <div
      style={popupStyle}
      className="bg-gray-800/80 backdrop-blur-md rounded-lg shadow-xl p-2 flex items-center gap-2 animate-fade-in-up"
    >
      {platforms.slice(0, 6).map((platform) => ( // Show first 6 for a compact view
        <SocialButton
          key={platform.name}
          platform={platform}
          shareParams={{ url, title, text }}
          onShare={onClose}
          size="small"
        />
      ))}
       <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SelectionPopup;
