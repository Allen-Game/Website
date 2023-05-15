import Navbar from '../app/navbar';
import layout from '../app/layout';
import Head from 'next/head';


const game = () => {
  return (
    <div>
      <Head>
        <title>Game</title>
        <meta property="og:title" content="Home" key="title" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>

      <Navbar />
      <div>About Page</div>
    </div>
  )
}

export default game
