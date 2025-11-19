import TopList from './TopList';
import WeeklySummary from './WeeklySummary';

const profileList = [
  { link: 'https://www.last.fm/user/darkstahrl', name: 'Last.fm' },
  { link: 'https://tidal.com/artist/63737051', name: 'Tidal' },
  { link: 'https://open.spotify.com/user/1273789846?si=ed0887ea370a4d08', name: 'Spotify' },
];

function ProfileLinks({ profiles }) {
  return (
    <section id='music-profile-links'>
      <h2>Find Me On</h2>
      <ul>
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
    <>
      <WeeklySummary />
      <TopList />
      <ProfileLinks profiles={profileList} />
    </>
  );
}