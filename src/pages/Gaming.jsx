import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const gamingProfiles = [
    { name: 'Steam', link: 'https://steamcommunity.com/profiles/76561198013331728/' },
    { name: 'GOG', link: 'https://www.gog.com/u/ptgoofy7' },
];

function ProfileLinks({ profiles }) {
    return (
        <section className="gaming-section">
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

function GameCard({ name, playtime2Weeks, playtimeForever, iconUrl, appid }) {
    const steamImageUrl = `https://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${iconUrl}.jpg`;

    return (
        <li className="game-card">
            <img src={steamImageUrl} alt={`${name} icon`} className="game-icon" />
            <div className="game-info">
                <p className="game-title">{name}</p>
                <p className="game-playtime">
                    {playtime2Weeks > 0
                        ? `${Math.round(playtime2Weeks / 60)} hrs in last 2 weeks`
                        : `${Math.round(playtimeForever / 60)} hrs total`}
                </p>
            </div>
        </li>
    );
}

function RecentlyPlayed({ games }) {
    return (
        <section className="gaming-section">
            <h2>Recently Played 🎮</h2>
            <ul className="game-list">
                {games.map((game) => (
                    <GameCard
                        key={game.appid}
                        name={game.name}
                        playtime2Weeks={game.playtime_2weeks}
                        playtimeForever={game.playtime_forever}
                        iconUrl={game.img_icon_url}
                        appid={game.appid}
                    />
                ))}
            </ul>
        </section>
    );
}

export default function Gaming() {
    const [games, setGames] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await fetch('http://localhost:3001/api/steam/recently');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const json = await res.json();
                setGames(json);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch gaming data.');
            }
        }
        fetchGames();
    }, []);

    return (
        <div className="gaming-page">
            {error && <p className="error">{error}</p>}
            {!games && !error && <LoadingSpinner />}
            {games && <RecentlyPlayed games={games} />}
            <ProfileLinks profiles={gamingProfiles} />
        </div>
    );
}
