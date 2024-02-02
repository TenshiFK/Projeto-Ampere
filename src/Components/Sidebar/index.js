import { Accordion, Alert, Button, Nav, Offcanvas } from "react-bootstrap";
import React from "react";
import { useSidebarContext } from "../../Contexts/SidebarContexts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './style.css';
import './../../style.css';
import CustomToggle from "../AcordeonButton";


function SideBar() {
    const {show} = useSidebarContext();
    const {handleClose} = useSidebarContext();


    return (
        <>
        <Offcanvas show={show} onHide={handleClose} className='sidebar'>
          <Offcanvas.Body>
            <Nav.Link>Home</Nav.Link>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item>
                <Accordion.Header className="header-acordion">
                  <a>Categorias</a>
                  <CustomToggle eventKey="1"/>  
                </Accordion.Header>
                <Accordion.Body>
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Home</Nav.Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Home</Nav.Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default SideBar;