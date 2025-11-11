import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const profileList = [
  { link: 'https://www.last.fm/user/darkstahrl', name: 'Last.fm' },
  { link: 'https://tidal.com/artist/63737051', name: 'Tidal' },
  { link: 'https://open.spotify.com/user/1273789846?si=ed0887ea370a4d08', name: 'Spotify' },
];

function ProfileLinks({ profiles }) {
  return (
    <section className="music-section">
      <h2>Find Me On</h2>
      <ul className="profile-links">
        {profiles.map((profile) => (
          <li key={profile.link}>
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TrackCard({ trackName, artistName }) {
  return (
    <li className="track-info">
      <p className="track-title">{trackName}</p>
      <p className="track-artist">{artistName}</p>
    </li>
  );
}

function TopTracks({ trackList }) {
  return (
    <section className="music-section">
      <h2>What I've Been Listening To 🎧</h2>
      <ol className="track-list">
        {trackList.map((track) => (
          <TrackCard
            key={track.name + track.artist.name}
            trackName={track.name}
            artistName={track.artist.name}
          />
        ))}
      </ol>
    </section>
  );
}

function WeeklySummary({ summary }) {
  if (!summary) return null;

  return (
    <section className="music-section weekly-summary">
      <h2>Weekly Summary 📊</h2>
      <ul className="summary-list">
        <li><strong>Total Scrobbles:</strong> {summary.totalScrobbles}</li>
        <li><strong>Unique Tracks:</strong> {summary.uniqueTracks}</li>
        <li>
          <strong>Top Artist:</strong> {summary.topArtist}{' '}
          <span className="muted">({summary.topArtistPlays} plays)</span>
        </li>
      </ul>
    </section>
  );
}

export default function Music() {
  const [topTracks, setTopTracks] = useState(null);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  // Fetch top 10 tracks
  useEffect(() => {
    async function fetchMusicData() {
      try {
        const response = await fetch('http://localhost:3001/api/music/data');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        console.log(result)
        setTopTracks(result);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch music data.');
      }
    }
    fetchMusicData();
  }, []);

  // Fetch weekly summary
  useEffect(() => {
    async function fetchSummary() {
      try {
        const res = await fetch('http://localhost:3001/api/music/summary');
        if (!res.ok) throw new Error('Summary fetch failed');
        const json = await res.json();
        setSummary(json);
      } catch (err) {
        console.error(err);
      }
    }
    fetchSummary();
  }, []);

  return (
    <div className="music-page">
      {error && <p className="error">{error}</p>}
      {!topTracks && !error && <LoadingSpinner />}

      {topTracks && <TopTracks trackList={topTracks.topTracks} />}
      {summary && <WeeklySummary summary={summary} />}

      <ProfileLinks profiles={profileList} />
    </div>
  );
}
