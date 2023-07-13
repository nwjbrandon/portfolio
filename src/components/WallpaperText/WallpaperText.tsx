import React from 'react';
import './WallpaperText.scss';

interface WallpaperTextProps {
  text: string;
}

const WallpaperText: React.FC<WallpaperTextProps> = ({ text }) => {
  return (
    <div className="wallpapertext__container">
      <div className="wallpapertext__container--text">{text}</div>
    </div>
  );
};

export default WallpaperText;
