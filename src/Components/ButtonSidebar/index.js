import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useSidebarContext } from "../../Contexts/SidebarContexts";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './style.css';



export default function SideButton(){

    const {handleShow} = useSidebarContext();

    return(
        <buuton className="btn-menu" onClick={handleShow}>
          <MenuOpenIcon/>
          <span>Menu</span>
        </buuton>
    );
}