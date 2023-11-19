import React from 'react';
import { FaPause, FaPlayCircle } from 'react-icons/fa';

export default function PlayPause({ song, isPlaying, activeSong, handlePause, handlePlay }) {
  return (
    <div>
      {isPlaying && activeSong?.title === song?.title ? (
        <FaPause size={35} className='text-gray-300' onClick={handlePause} />
      ) : (
        <FaPlayCircle size={35} className='text-gray-300' onClick={handlePlay} />
      )}
    </div>
  );
}
