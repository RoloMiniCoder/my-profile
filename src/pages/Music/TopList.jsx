import useDataFetching from '../../hooks/useDataFetching';
import DataStateWrapper from '../../components/DataStateWrapper';

function TrackCard({ trackName, artistName }) {
    return (
        <li className="track-info">
            <p className="track-title">{trackName}</p>
            <p className="track-artist">{artistName}</p>
        </li>
    );
}

function ArtistCard({ artistName, playCount }) {
    return (
        <li className='artist-info'>
            <p className='artist-name'>{artistName}</p>
            <p className='artist-playcount'> - Played {playCount} times</p>
        </li>
    )
}

export default function TopList() {
    const { data: musicLists, isLoading, error } = useDataFetching(`/music/data`);

    return (
        <section className="music-section">
            <DataStateWrapper isLoading={isLoading} error={error}>
                {musicLists && (
                    <>
                        <div>
                            <h2>What I've Been Listening To 🎧</h2>
                            <ol className="track-list">
                                {musicLists.topTracks.map((track) => (
                                    <TrackCard
                                        key={track.name + track.artist.name}
                                        trackName={track.name}
                                        artistName={track.artist.name}
                                    />
                                ))}
                            </ol>
                        </div>
                        <div>
                            <h2>Top Artists</h2>
                            <ol className='artist-list'>
                                {musicLists.topArtists.map(artist => (
                                    <ArtistCard
                                        key={artist.name}
                                        artistName={artist.name}
                                        playCount={artist.playcount}
                                    />
                                ))}
                            </ol>
                        </div>
                    </>
                )}
            </DataStateWrapper>
        </section>
    )
}