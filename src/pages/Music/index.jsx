import TopList from './TopList';
import WeeklySummary from './WeeklySummary';

import './Music.css'

const profileList = [
  { link: 'https://www.last.fm/user/darkstahrl', name: 'Last.fm', img: `/icons8-last.fm-96.png` },
  { link: 'https://tidal.com/artist/63737051', name: 'Tidal', img: `public/icons8-tidal-96.png` },
  { link: 'https://open.spotify.com/user/1273789846?si=ed0887ea370a4d08', name: 'Spotify', img: `/icons8-spotify-96.png` },
];

function ProfileLinks({ profiles }) {
  return (
    <section className='music-profiles'>
      <h2>Find the stuff I listen to on:</h2>
      <div>
        {profiles.map((profile) => (
          <a key={profile.link} href={profile.link} target="_blank" rel="noopener noreferrer">
            <div>
              <img src={profile.img} alt={`${profile.name} logo`} />
              <p>
                {profile.name}
              </p>
            </div>
          </a>
        ))}
      </div>
      <p>
        <small>
          <a target="_blank" href="https://icons8.com/icon/c1Sd6GHCDlb9/tidal">Tidal</a>, <a target="_blank" href="https://icons8.com/icon/zF4qMoedBHZT/lastfm">Last.fm</a> and <a target="_blank" href="https://icons8.com/icon/G9XXzb9XaEKX/spotify">Spotify</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a></small></p>
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