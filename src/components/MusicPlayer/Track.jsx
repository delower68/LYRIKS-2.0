import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className={`w-[50%] ${window.innerWidth < 600 ? 'truncate' : ''}`}>
      <p className="text-white font-bold text-lg">
        {activeSong?.title ? activeSong.title.substring(0, 10) + (activeSong.title.length > 5 ? '...' : '') : 'No active Song'}
      </p>
      <p className="text-gray-300">
        {activeSong?.subtitle ? activeSong.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
