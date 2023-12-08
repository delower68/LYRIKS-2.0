import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));

    dispatch(playPause(true));
  };

  const handleAddToFavorites = (selectedSong) => {
    // Get the existing favorites from local storage or initialize an empty array
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Check if the selected song is not already in the favorites list
    if (!favorites.some((song) => song.key === selectedSong.key)) {
      // Add the selected song to the favorites list
      const updatedFavorites = [...favorites, selectedSong];
  
      // Update the local storage with the new favorites list
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  
      // Optionally dispatch an action to update state if using Redux
      // dispatch(updateFavorites(updatedFavorites));
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
            <FaRegHeart
              className="ml-2 text-yellow-500 cursor-pointer"
              onClick={() => handleAddToFavorites(song)}
            />
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
