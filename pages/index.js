import Head from 'next/head';
import Script from 'next/script';
import Style from "../public/css/index.module.css";
import Link from 'next/link';
import Carousel from '../app/Slider';
import { Card } from 'react-bootstrap';
import NavBar from '../app/navbar';
import layout from '../app/layout';

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

            <NavBar />

            <Carousel />

            <div className={Style.container}>
                <h2 className={Style.title}>Game
                    <Link className={Style.moreGame} href="./game">More Game</Link></h2>
                <div className={Style.content}>
                    <Card style={{ width: '18rem', backgroundColor: '#fff', margin: '15px 15px 15px 15px', padding: "15px 15px 15px 15px" }}>
                        <Card.Img variant="top" src="https://tr.rbxcdn.com/e6225053b83a3364292aa14b5adbd0ea/420/420/Image/Png" />
                        <Card.Body style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Card.Title style={{ textAlign: "center" }}>Every Second +1 ki in DBZ</Card.Title>
                            <Link href="https://www.roblox.com/games/12524383962/UPD9-Every-Second-1-Ki-in-DBZ" style={{ fontSize: "15px" }} className={Style.play}>Play</Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', backgroundColor: '#fff', margin: '15px 15px 15px 15px', padding: "15px 15px 15px 15px" }}>
                        <Card.Img variant="top" src="https://tr.rbxcdn.com/091981dd1705a8a13bc9134c93483635/720/720/Image/Png" />
                        <Card.Body style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Card.Title style={{ textAlign: "center" }}>Clicker Fighting Simulator</Card.Title>
                            <Link href="https://www.roblox.com/games/12985134424/UPD-Clicker-Fighting-Simulator" style={{ fontSize: "15px" }} className={Style.play}>Play</Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', backgroundColor: '#fff', margin: '15px 15px 15px 15px', padding: "15px 15px 15px 15px" }}>
                        <Card.Img variant="top" src="https://tr.rbxcdn.com/ca116716b6d59182792e5ea76d8eac6f/720/720/Image/Png" />
                        <Card.Body style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Card.Title style={{ textAlign: "center" }}>Naruto But Every Second +1 Chakra</Card.Title>
                            <Link href="https://www.roblox.com/games/12995749346/UPD2-2-Naruto-But-Every-Second-1-Chakra" style={{ fontSize: "15px" }} className={Style.play}>Play</Link>
                        </Card.Body>

                    </Card>
                </div >
            </div >


            {/* 异步加载 JavaScript 脚本 */}
            < Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8229591117115313"
                    crossorigin="anonymous"></Script>
        </div >
    );
}

export default Index;
