import NavBar from '../app/navbar';
import Game from '../app/card';
import layout from '../app/layout';
import Head from 'next/head';
import Script from 'next/script';


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
      {/* 异步加载 JavaScript 脚本 */}
      < Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8229591117115313"
        crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>

    </div>
  );
};

export default game;
