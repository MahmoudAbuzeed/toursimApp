  import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container 
} from 'reactstrap';



import { GiEgyptianTemple } from "react-icons/gi";

import "./NavBar.css";
/*
<Link className="navbar-brand" href="#"><span className="span"><GiEgyptianTemple /> TOOT <GiEgyptianTemple /></span></Link>
<Link className="nav-link " to="/Login"><h5><span>Login</span></h5></Link>
*/



const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container className="themed-container" fluid={true}>
    <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><span className="span"><GiEgyptianTemple /> TOOT <GiEgyptianTemple /></span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          
          </Nav>
          <Link className="nav-link " to="/Login"><h5><span>Login</span></h5></Link>
        </Collapse>
      </Navbar>
      </Container>


    
</div>
  );
}

export {NavBar};











