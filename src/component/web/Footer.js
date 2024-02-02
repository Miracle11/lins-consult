import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import styled from 'styled-components';


//custom footer changed style
const footerBg = {
        backgroundColor: '#263238',
}
const SubSect = styled.div`
    display: flex;
    align-items: baseline;
    gap: 20px;
    
`;
const Info = styled.p`
    font-size: 16px;
`;
const Image = styled.img`
    margin-top: 80px;
`;

export const Footer = () => {
    return (
        <MDBFooter style={footerBg}  className='text-white text-lg-left'>
          <MDBContainer className='p-4'>
            <MDBRow>
              <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                <SubSect>
                    <MDBIcon className='ms-1' fas icon="map-marker-alt"  size='lg' />
                    <Info>Abuja, Nigeria: Suite B10, First Floor, Real Towers Complex, <br /> 26 A.E Ekukinam Street, Utako District, Abuja, FCT.</Info>
                </SubSect>
                <SubSect>
                    <MDBIcon className='ms-1' fas icon="phone-alt"  size='lg' />
                    <Info>+234-8027339775 <br /> +234-8106633668</Info>
                </SubSect>
                <SubSect>
                    <MDBIcon className='ms-1' fas icon="envelope"  size='lg' />
                    <Info>info@linsconsult.com <br /> linsconsultltd@gmail.com</Info>
                </SubSect>
              </MDBCol>
    
              <MDBCol lg='6' md='6' className='mb-4 mb-md-0 text-end'>
                <form action=''>
                    <MDBRow className='d-flex justify-content-center'>
                        <MDBCol >
                            <p className='pt-2'>
                            <strong>Join our mailing list</strong>
                            </p>
                        </MDBCol>

                        <MDBCol md='5' start>
                            <MDBInput contrast type='email' label='Email address' className='mb-4' />
                        </MDBCol>

                        <MDBCol size="auto">
                            <MDBBtn outline color='light' type='submit' className='mb-4'>
                                <MDBIcon className='ms-1' fas icon="paper-plane"  size='lg' />
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
                <Image
                src={require('../../assets/images/logo.png')}
                height='50'
                alt='lins-logo'
                loading='lazy'
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; 2023 Copyright:{' '}linsconsult
          </div>
        </MDBFooter>
      );
}