import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './../../Assets/logo-radio-300x98.png';
import './style.css';
import SideButton from "../ButtonSidebar";
import { Col, Row } from 'react-bootstrap';




export default function NavBar(){

    return(
        <Container fluid>
            <Row>
                <Col className='area-logo-navbar'>
                    <img src={Logo} width={220}/>
                </Col>
            </Row>
            <Row>
                <Navbar collapseOnSelect expand="lg" className='navBar'>
                    <Container fluid>
                        <Navbar.Brand href="#home"><SideButton/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-links">
                            <Nav.Link href="#features">Ampére</Nav.Link>
                            <Nav.Link href="#pricing">Geral</Nav.Link>
                            <Nav.Link href="#pricing">Regional</Nav.Link>
                            <Nav.Link href="#pricing">Policial</Nav.Link>
                            <Nav.Link href="#pricing">Esporte</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                             <button className='btn-oucaAgora'>Ouça Agora</button>
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Row>

            </Row>
        </Container>
  );
}