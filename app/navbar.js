import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
                    <img
                        alt=""
                        src="/icon/logo.svg"
                        width="50"
                        height="50"
                        className="d-inline-block"
                    />
                    Alan Studio
                </Navbar.Brand>
                <Nav className="mx-auto justify-content-center">
                    <Nav.Link href="/" className="text-center">Home</Nav.Link>
                    <Nav.Link href="/game" className="text-center">Game</Nav.Link>
                    <Nav.Link href="/social" className="text-center">Social</Nav.Link>
                </Nav>
            </Container >
        </Navbar >
    )

}

export default NavBar;