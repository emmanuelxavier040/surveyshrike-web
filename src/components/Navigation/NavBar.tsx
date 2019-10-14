import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap';
import { GoogleLogout } from 'react-google-login';
 

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' light={false} expand="md">
        <Link to='/' className="nav-link">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/surveys" className="nav-link">Surveys</Link>
            </NavItem>
            <NavItem>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Settings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 
                </DropdownItem>    

<GoogleLogout
      clientId="561673755028-4jo9u0c2c0fmro007t01l8to4fa16lcn.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={() => {}}
    />
                <DropdownItem>
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;