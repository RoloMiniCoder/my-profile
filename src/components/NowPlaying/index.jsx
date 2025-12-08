import useDataPollingFetching from "../../hooks/useDataPollingFetching"
import './NowPlaying.css'

export default function NowPlaying() {
    const { data: playingSong, isLoading, error } = useDataPollingFetching('/music/playing', 5000)

    return (
        playingSong && playingSong.artist && (
            <div className='now-playing'>
                <p><small>Currently playing</small></p>
                <p id="artist">{playingSong.name}</p>
                <p><small>by {playingSong.artist}</small></p>
            </div>
        )
    )
}