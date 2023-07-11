import Navbar from '../app/navbar';
import layout from '../app/layout';
import Head from 'next/head';
import Image from 'next/image';
import Style from '../public/css/game.module.css';


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

      <div className={Style.container}>
        <h1 className={Style.title}>Game</h1>
        <div className={Style.content}>
          <div className={Style.game_Card}>
            <Image
              src='https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png'
              alt='every second +1 ki in DBZ'
              width={420}
              height={420}
            />
            <div className={Style.game_name}>every second +1 ki in DBZ</div>
          </div>
          <div className={Style.game_Card}>
            <Image
              src='https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png'
              alt='every second +1 ki in DBZ'
              width={420}
              height={420}
            />
            <div className={Style.game_name}>every second +1 ki in DBZ</div>
          </div>
          <div className={Style.game_Card}>
            <Image
              src='https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png'
              alt='every second +1 ki in DBZ'
              width={420}
              height={420}
            />
            <div className={Style.game_name}>every second +1 ki in DBZ</div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default game
