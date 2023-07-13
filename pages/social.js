import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../app/navbar';
import layout from '../app/layout';

const Game = () => {

    const Text_style = {
        padding: "15px 15px 15px 15px",
        margin: "15px 15px 15px 15px",
        textDecoration: "none",
    }

    const flex_center = {
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "nowrap",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        padding: "15px 15px 15px 15px"
    }

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

            <NavBar />

            <div style={flex_center}>
                <Link href="https://www.roblox.com/groups/10391051/Alan-International-Studio#!/about" style={Text_style}>
                    <Image
                        src="/icon/logo.svg"
                        alt="Roblox Group"
                        height={150}
                        width={150}
                    />
                    <br />
                    Roblox Group
                </Link>
                <br />
                <Link href='https://discord.com/invite/xBn26dcU56' style={Text_style}>
                    <Image
                        src="/icon/discord.svg"
                        alt="Discord server"
                        width={150}
                        height={150}
                    />
                    <br />
                    Discord server
                </Link>
                <br />
                <Link href='https://twitter.com/intent/follow?screen_name=AlanStudioo' style={Text_style}>
                    <Image
                        src="/icon/twitter.svg"
                        alt="follow on Twitter"
                        width={150}
                        height={150}
                    />
                    <br />
                    follow on Twitter
                </Link>
            </div>
        </div >
    )
}

export default Game;
