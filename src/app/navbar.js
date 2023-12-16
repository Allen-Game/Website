import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import '/public/bootstrap/css/bootstrap.css';

import { useState, useEffect } from 'react';

const NavBar = () => {

    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navbar bg="body-tertiary" style={{
            transform: `translateY(${scrollPos > 100 ? '-100px' : 0})`, // 控制偏移
            position: "fixed",
            right: "0",
            left: "0",
            top: "0",
            zIndex: "10000",
            transition: 'transform 0.25s ease', // 设置过渡动画
        }}>
            < Container >
                <Navbar.Brand href="/">
                    <Image
                        alt=""
                        src="/icon/logo.svg"
                        width={30}
                        height={24}
                        className="d-inline-block align-text-top"
                    />
                    &nbsp;Alan Studio
                </Navbar.Brand>
                <Nav className="mx-auto justify-content-center">
                    <Nav.Link href="/" className="text-center font-size-20px">Home</Nav.Link>
                    <Nav.Link href="/game" className="text-center font-size-20px">Game</Nav.Link>
                    <Nav.Link href="/social" className="text-center font-size-20px">Social</Nav.Link>
                </Nav>
            </Container >
        </Navbar >
    )

}

export default NavBar;