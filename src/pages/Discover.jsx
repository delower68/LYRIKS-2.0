import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetWorldChartsQuery } from "../redux/services/shazamCore";
import { useDispatch , useSelector} from "react-redux";


const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong, isPlaying}= useSelector((state)=>state.player);
  const { data, isFetching, error } = useGetWorldChartsQuery();
  const genreTitle = "pop";

  // Loading state
  if (isFetching) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <Error message="Failed to fetch data. Please try again later." />;
  }

  console.log(data)

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
        onChange={()=>{}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.map((song, i) => (
            <SongCard key={song.key} song={song} 
            isPlaying = {isPlaying}
            activeSong = {activeSong}
            data= {data}
            i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
