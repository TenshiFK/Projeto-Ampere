import { Col, Container, ListGroup, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';
import './../../style.css';
import SideBar from "../../Components/Sidebar";
import NavBar from "../../Components/Navbar";
import { SidebarProvider } from "../../Contexts/SidebarContexts";




function Home() {

  return (
    <Container fluid className="d-flex">
      <SidebarProvider>
          <SideBar/>
        <Container fluid>
          <NavBar/>
          <main className="principal-home">
            <h1>Home</h1>
          </main>
        </Container>
      </SidebarProvider>
    </Container>
  );
}

export default Home;