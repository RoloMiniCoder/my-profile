import useDataFetching from '../../hooks/useDataFetching';
import DataStateWrapper from '../../components/DataStateWrapper'

import './WeeklySummary.css'

export default function WeeklySummary() {
    const { data: summary, isLoading, error } = useDataFetching(`/music/summary`);

    return (
        <section className='weekly-summary'>
            <DataStateWrapper isLoading={isLoading} error={error}>
                {summary && (<>
                    <h2>Weekly Summary 📊</h2>
                    <ul className="summary-list">
                        <li><strong>Total Scrobbles:</strong> {summary.totalScrobbles}</li>
                        <li><strong>Unique Tracks:</strong> {summary.uniqueTracks}</li>
                        <li>
                            <strong>Top Artist:</strong> {summary.topArtist}{' '}
                            <span>({summary.topArtistPlays} plays)</span>
                        </li>
                    </ul>
                </>)}
            </DataStateWrapper>
            <footer>
                <p><small>Data extracted from <a href="https://www.last.fm/" target='_blank'>Last.fm</a></small></p>
            </footer>
        </section>
    )
}