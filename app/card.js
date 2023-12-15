import { useEffect, useState } from 'react';
import Style from '../public/css/game.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Script from 'next/script';

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
            <select id="checkType" className="dropdown_meun">
                <option value="all">all</option>
                <option value="Simulator">Simulator</option>
            </select>
            <div className={Style.content}>
                {games.map((game) => (
                    <div key={game.id} id='game_card' className={Style.card + ' ' + game.game_type}>
                        <Image src={game.game_thum} width={420} height={420} alt={game.game_name} />
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
