import useDataFetching from '../../hooks/useDataFetching';
import DataStateWrapper from '../../components/DataStateWrapper';

function TopTracks({ topTracks }) {
    return (
        <div className='top-list'>
            <h2>Recent Listens</h2>
            <ol className="track-list">
                {topTracks.map((track) => (
                    <li key={track.name + track.artist.name}>
                        <p>{track.name}<br /><small>{track.artist.name}</small></p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

function TopArtists({ topArtists }) {
    return (
        <div className='top-list'>
            <h2>Top Artists</h2>
            <ol className='artist-list'>
                {topArtists.map(artist => (
                    <li key={artist.name}>
                        <p>{artist.name}<br /><small>Played {artist.playcount} times</small></p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default function TopList() {
    const { data: musicLists, isLoading, error } = useDataFetching(`/music/data`);

    return (
        <section>
            <DataStateWrapper isLoading={isLoading} error={error}>
                {musicLists && (
                    <div id='top-lists'>
                        <TopTracks topTracks={musicLists.topTracks} />
                        <TopArtists topArtists={musicLists.topArtists} />
                    </div>
                )}
            </DataStateWrapper>
            <footer>
                <p><small>Data extracted from <a href="https://www.last.fm/" target='_blank'>Last.fm</a></small></p>
            </footer>
        </section>
    )
}