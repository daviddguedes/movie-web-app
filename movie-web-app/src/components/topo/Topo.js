import React from 'react';
import {
   Navbar,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink
} from 'reactstrap';

export default () => {
   return (
      <div>
         <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Cinema Database</NavbarBrand>
            <Nav className="ml-auto" navbar>
               <NavItem>
                  <NavLink href="/">List Movies</NavLink>
               </NavItem>
            </Nav>
         </Navbar>
      </div>
   )
} 