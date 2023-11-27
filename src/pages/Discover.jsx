import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetWorldChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetWorldChartsQuery();
  const genreTitle = 'pop';

  console.log(data?.tracks);
  // Loading state
  if (isFetching) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <Error message="Failed to fetch data. Please try again later." />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full lg:flex justify-between items-center flex-row lg:flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-center">
          Discover 
        </h2>
        <div className='flex justify-center'>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm  rounded-lg outline-none sm:mt-0 mt-5 mb-3"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
        </div>
        <div className="flex flex-wrap justify-start lg:justify-center gap-8">
          {data?.tracks?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data?.tracks}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
