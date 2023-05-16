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
                <link rel="shortcut icon" href="icon/logo.svg" type="image/x-icon" />
            </Head>

            <Navbar />

            <Slider />


            {/* 异步加载 JavaScript 脚本 */}
            <Script src="js/jquery-3.7.0.js" strategy="beforeInteractive" />
        </div>
    );
}

export default Index;
