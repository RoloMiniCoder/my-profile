import useDataFetching from '../../hooks/useDataFetching'
import DataStateWrapper from '../../components/DataStateWrapper'

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

export default function RecentlyPlayed() {
    const { data: games, isLoading, error } = useDataFetching(`/steam/recently`)

    return (
        <section className="gaming-section">
            <DataStateWrapper isLoading={isLoading} error={error}>
                {games && (
                    <>
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
                    </>
                )}
            </DataStateWrapper>
        </section>
    )
}