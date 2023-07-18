import NavBar from '../app/navbar';
import Game from '../app/card'; // 使用大写字母开头的名称 Game
import layout from '../app/layout';
import Head from 'next/head';
import Image from 'next/image';
import Style from '../public/css/game.module.css';

const game = () => {
  return (
    <div>
      <Head>
        <title>Game</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8229591117115313"
          crossorigin="anonymous"></script>
        <meta property="og:title" content="Home" key="title" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="icon/logo.svg" type="image/x-icon" />
      </Head>
      <NavBar />

      <Game />
    </div>
  );
};

export default game;
