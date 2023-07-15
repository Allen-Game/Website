import { useEffect, useState } from 'react';
import Style from '../public/css/game.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Game = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('/game.json');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Failed to fetch game data:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className={Style.container}>
            <div className={Style.content}>
                {games.map((game) => (
                    <div key={game.id} className={Style.card}>
                        <Image src={game.thum} width={420} height={420} alt={game.game_name} />
                        <div className={Style.cardTitle}>{game.game_name}</div>
                        <Link className={Style.playButton} href={game.game_url}>
                            Play
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;
