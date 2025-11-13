import useDataFetching from '../hooks/useDataFetching';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';

export default function WeeklySummary() {
    const { data: summary, isLoading, error } = useDataFetching(`/music/summary`);
    let content;

    if (isLoading) {
        content = <LoadingSpinner />
    } else if (error) {
        content = <Error />
    } else {
        content = (
            <>
                <h2>Weekly Summary 📊</h2>
                <ul className="summary-list">
                    <li><strong>Total Scrobbles:</strong> {summary.totalScrobbles}</li>
                    <li><strong>Unique Tracks:</strong> {summary.uniqueTracks}</li>
                    <li>
                        <strong>Top Artist:</strong> {summary.topArtist}{' '}
                        <span className="muted">({summary.topArtistPlays} plays)</span>
                    </li>
                </ul>
            </>
        );
    }

    return (
        < section className="music-section weekly-summary" >
            {content}
        </section>
    )
}