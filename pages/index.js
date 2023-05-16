import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../app/navbar';
import Style from "../public/css/index.module.css";
import layout from '../app/layout';
import Link from 'next/link';
import Slider from '../app/Slider';

const Index = () => {
    return (
        <div className={Style.body}>
            <Head>
                <title>Home</title>
                <meta property="og:title" content="Home" key="title" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
            </Head>

            <Navbar />

            <Slider />

            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"></div>
                <div className="game">
                    <h2 className="game_frame_title">Our games</h2>
                    <Link href="/game">More Game</Link>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 异步加载 JavaScript 脚本 */}
            <Script src="/js/jquery-3.7.0.js" strategy="beforeInteractive" />
        </div>
    );
}

export default Index;
