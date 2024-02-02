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


export const CourseNavBar = () => {
    const [openNavRight, setOpenNavRight] = useState(false);

  return (
    <MDBNavbar fixed='top' expand='lg' light bgColor='light'>
      <MDBContainer >
      <MDBNavbarBrand href='/course'>
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
              <MDBNavbarLink tag={Link} to='/course' active={window.location.pathname === "/course"} aria-current='page'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/course/icebreaker' active={window.location.pathname === "/course/icebreaker"} >Ice Breaker</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/course/quiz' active={window.location.pathname === "/course/quiz"} >Quiz</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/course/facilitatorsratin' active={window.location.pathname === "/course/facilitatorsratin"} >Facilitators Rating</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/course/courseevaluation' active={window.location.pathname === "/course/courseevaluation"} >Course Evaluation</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};