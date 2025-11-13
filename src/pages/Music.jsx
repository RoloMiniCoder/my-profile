import TopList from '../components/TopList';
import WeeklySummary from '../components/WeeklySummary';

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

export default function Music() {

  return (
    <div className="music-page">
      <TopList />
      <WeeklySummary />
      <ProfileLinks profiles={profileList} />
    </div>
  );
}