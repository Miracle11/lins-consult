import React from 'react';
import { WebLayout } from '../../component/web/WebLayout';
import { Link } from 'react-router-dom';
import {
    Section,
    FormInput,
    FormTextArea,
    SectionSubTitle,
    InfoIcon,
    InfoText,
} from '../../assets/style/Web.Styled'
import {
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBContainer,
} from 'mdb-react-ui-kit'

export const Contact = () => {
    return (
        <WebLayout>
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '600px' }}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                        <h1 className='mb-3'>Contact Us</h1>
                        <h4 className='mb-3'>Always available to reach back to our clients</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <MDBContainer>
            <Section style={{marginBottom: 100, marginTop: 80}} >
                <MDBRow style={{marginBottom: 80}}>
                    <MDBCol className='text-center' lg={4}>
                        <InfoIcon className='shadow-3'><MDBIcon style={{color: '#FF725E'}} className='ms-1' fas icon="phone-alt"  size='lg' /></InfoIcon>
                        <InfoText>+234-8106633668 <br />+234-8027339775</InfoText>
                    </MDBCol>
                    <MDBCol className='text-center' lg={4}>
                        <InfoIcon className='shadow-3'><MDBIcon style={{color: '#FF725E'}} className='ms-1' fas icon="envelope"  size='lg' /></InfoIcon>
                        <InfoText>info@linsconsult.com <br />linsconsultltd@gmail.com</InfoText>
                    </MDBCol>
                    <MDBCol className='text-center' lg={4}>
                        <InfoIcon className='shadow-3'><MDBIcon style={{color: '#FF725E'}} className='ms-1' fas icon="map-marker-alt"  size='lg' /></InfoIcon>
                        <InfoText>Abuja, Nigeria: Suite B10, First Floor, Real Towers Complex, 26 A.E Ekukinam Street, Utako District, Abuja, FCT.</InfoText>
                    </MDBCol>
                </MDBRow>
                <MDBCard className='mt-5 contact-card'>
                    <MDBCardBody>
                        <SectionSubTitle>Reach out to us with a quick email</SectionSubTitle>
                            <form>
                                <FormInput placeholder='Full Name' />
                                <FormInput placeholder='Email' />
                                <FormTextArea placeholder='Message' />

                                <Link to='/about'>
                                <MDBBtn type='submit' className='mb-4 shadow-5' block style={{ backgroundColor: '#FF725E', padding: 12}}>Send</MDBBtn>
                            </Link>
                            </form>
                    </MDBCardBody>
                </MDBCard>
            </Section>
            </MDBContainer>
        </WebLayout>
    )
};