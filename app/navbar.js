import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="body-tertiary">
                <Container>
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
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
