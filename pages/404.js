import React from 'react';
import Navbar from '../app/navbar';
import layout from '../app/layout';
import Head from 'next/head';
import Link from 'next/link';


const NotFoundPage = () => {

    const Page_Not_Found = {
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "50px",
    }
    const Back_Home = {
        display: "block",
        marginTop: "30px",
        textDecoration: "none",
        position: "absolute",
        left: "50%",
        top: "55%",
        transform: "translate(-50%, -55%)",
        fontSize: "45px",
    }
    return (
        <div>
            <Head>
                <title>404 Page Not Found</title>
                <meta property="og:title" content="404 Page Not Found" key="title" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="icon/logo.svg" type="image/x-icon" />
            </Head>

            <Navbar />
            <h1 style={Page_Not_Found}>404 Page Not Found </h1>
            <Link href="/" style={Back_Home}>Back to Home</Link>


        </div>
    );
};

export default NotFoundPage;