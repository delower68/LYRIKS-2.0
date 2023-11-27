import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader,Error, Loader, RelatedSongs } from "../components";
import { playPause } from "../redux/features/playerSlice";
import { useGetSongDetails } from "../redux/services/shazamCore";

const SongDetails = () => {
    const {id} = useParams()
    console.log(id)
    const {data: songData,  isFatching:isFatchingSongDetails} = useGetSongDetails(id)
    const dispatch = useDispatch()
    const {activeSong, isPlaying} = useSelector((state)=> state.player)
    return (
    <div className="flex flex-col ">
        {/* <DetailsHeader
            artistsId = {artistsId}
            songData= {songData}

        /> */}
        <div className="mb-10 ">
            <h2 className="text-white text-3xl font-bold">Lyrics</h2>
            <div className="mt-5">
                
            </div>
        </div>
    </div>
    )
}

export default SongDetails;
