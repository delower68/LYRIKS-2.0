import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { Link } from "react-router-dom";
import { FaRegHeart , FaHeart} from "react-icons/fa";
import { useEffect, useState } from "react";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the song is in the favorites list when the component mounts
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some((favSong) => favSong.key === song.key));
  }, [song.key]);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handleToggleFavorite = () => {
    // Get the existing favorites from local storage or initialize an empty array
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the selected song is already in the favorites list
    if (favorites.some((favSong) => favSong.key === song.key)) {
      // Remove the selected song from the favorites list
      const updatedFavorites = favorites.filter((favSong) => favSong.key !== song.key);
      setIsFavorite(false);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add the selected song to the favorites list
      const updatedFavorites = [...favorites, song];
      setIsFavorite(true);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song?.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song?.images?.coverart} alt="song-img" />
      </div>
      <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        {song.title}{" "}
        <div>
          {isFavorite ? (
            <FaHeart className={`ml-2 cursor-pointer`} onClick={handleToggleFavorite} />
          ) : (
            <FaRegHeart className={`ml-2 cursor-pointer`} onClick={handleToggleFavorite} />
          )}
        </div>
      </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song?.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/favourite"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
