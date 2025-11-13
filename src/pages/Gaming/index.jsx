import RecentlyPlayed from "./RecentlyPlayed";

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

export default function Gaming() {
    return (
        <div className="gaming-page">
            <RecentlyPlayed />
            <ProfileLinks profiles={gamingProfiles} />
        </div>
    );
}
