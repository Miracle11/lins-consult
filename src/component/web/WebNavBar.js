import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand,
  } from 'mdb-react-ui-kit';


export const WebNavBar = () => {
    const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar fixed='top' expand='lg' light bgColor='light'>
      <MDBContainer >
      <MDBNavbarBrand href='/'>
            <img
              src={require('../../assets/images/logo.png')}
              height='50'
              alt='lins-logo'
              loading='lazy'
            />
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/' active={window.location.pathname === "/"} aria-current='page'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/program' active={window.location.pathname === "/program"} >Program</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/about' active={window.location.pathname === "/about"} >About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/contact' active={window.location.pathname === "/contact"} >Contact</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};