import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "../components/PlayPause";
import FavouriteSongCard from "../components/FavouriteSongCard";
import { useGetWorldChartsQuery } from "../redux/services/shazamCore";
import { Loader } from "../components";

const MyFavourites = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetWorldChartsQuery();

  // Function to get the favorites list from local storage
  const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };

  // Loading state
  if (isFetching) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <Error message="Failed to fetch data. Please try again later." />;
  }
  

  const favorites = getFavorites();

  return (
    <div>
      <h2 className="font-bold text-3xl text-white text-center my-10">My Favorite Songs</h2>
      {favorites.length === 0 ? (
        <p>No favorite songs yet.</p>
      ) : (
        <ul className="flex flex-wrap justify-center lg:justify-start gap-8">
          {favorites?.map((song, i) => (
            <li key={song.key} className="">
               <FavouriteSongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data?.tracks}
              i={i}
            />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyFavourites;
