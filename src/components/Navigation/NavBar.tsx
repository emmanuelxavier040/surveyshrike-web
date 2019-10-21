import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap';
import { GoogleLogout } from 'react-google-login';
import { userActions } from '../../actions/user.actions'
import history from '../../history'
const jwt_decode = require("jwt-decode")

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function onLogOut() {
    userActions.logoutUser()({})
    history.push('/login')
  }


  const token = localStorage.getItem('jwt_authorization')
  let clientInfo = null
  if (token !== null) {
    clientInfo = jwt_decode(token);
    // console.log(clientInfo)
  }
  return (
    <div>
      <Navbar color='dark' light={false} expand="md">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/my-surveys' className="nav-link">My Surveys</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/surveys" className="nav-link">Surveys</Link>
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
                  clientId={process.env.REACT_APP_CLIENT_ID + ''}
                  buttonText="Logout"
                  onLogoutSuccess={onLogOut}
                />
                <DropdownItem>

                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <span className='nav-link'>
                <Badge color="secondary">
                  {clientInfo !== null ? clientInfo.firstName : 'Anonymous'}
                </Badge>
              </span>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;