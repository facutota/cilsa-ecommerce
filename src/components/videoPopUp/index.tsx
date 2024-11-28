import { Close, CloseFullscreen } from '@mui/icons-material';
import React, { useState } from 'react';

interface VideoPopupProps {
  videoSrc: string;
  buttonText?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoSrc, buttonText = 'Video Sucursales' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        onClick={openPopup} 
        className="mt-2 btn-video bg-primary text-text-primary dark:bg-dark-primary dark:text-dark-secondary py-2 px-4 rounded-lg"
      >
        {buttonText}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        >
          <div className="relative bg-white rounded-lg max-w-2xl w-full">
            <button 
              onClick={closePopup} 
              className="mt-2 text-gray-700 bg-white rounded-full"
            >
              <CloseFullscreen  />
            </button>
            <video controls className="w-full">
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
