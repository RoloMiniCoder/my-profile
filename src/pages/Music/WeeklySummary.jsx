import useDataFetching from '../../hooks/useDataFetching';
import DataStateWrapper from '../../components/DataStateWrapper'

export default function WeeklySummary() {
    const { data: summary, isLoading, error } = useDataFetching(`/music/summary`);

    return (
        < section className="music-section weekly-summary" >
            <DataStateWrapper isLoading={isLoading} error={error}>
                {summary && (<>
                    <h2>Weekly Summary 📊</h2>
                    <ul className="summary-list">
                        <li><strong>Total Scrobbles:</strong> {summary.totalScrobbles}</li>
                        <li><strong>Unique Tracks:</strong> {summary.uniqueTracks}</li>
                        <li>
                            <strong>Top Artist:</strong> {summary.topArtist}{' '}
                            <span className="muted">({summary.topArtistPlays} plays)</span>
                        </li>
                    </ul>
                </>)}
            </DataStateWrapper>
        </section>
    )
}