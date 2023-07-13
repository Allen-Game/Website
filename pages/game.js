import NavBar from '../app/navbar';
import Game from '../app/card'; // 使用大写字母开头的名称 Game
import layout from '../app/layout';
import Head from 'next/head';
import Image from 'next/image';
import Style from '../public/css/game.module.css';

const game = () => {
  return (
    <div>
      <NavBar />

      <Game />
    </div>
  );
};

export default game;
