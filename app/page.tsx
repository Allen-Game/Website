import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from './navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/js/jquery-3.7.0.js"></script>
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>

      <Navbar />

      {/* <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        </div>

        <div className="game_frame">
          <h2 className="game_frame_title">Our games</h2>
          <a href="Game" className="btn btn-primary">More Game</a>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* JavaScript脚本 */}
      <script src="/js/jquery-3.7.0.js"></script>
      <script src="/js/loader.js"></script>
    </div>
  );
}