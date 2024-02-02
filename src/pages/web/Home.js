import React from 'react';
import { WebLayout } from '../../component/web/WebLayout';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {
    HomeHeaderSection,
    Image,
    HeaderParagraph,
    HeaderMainTitle,
    HeaderTitleOne,
    Section,
    SectionTitle,
    SectionSubTitle,
    FormInput,
    FormTextArea,
    Program,
} from '../../assets/style/Web.Styled'


export const Home = () => {
    return (
        <WebLayout>
            <MDBContainer>
            {/*This is the header section*/}
            <HomeHeaderSection>
                <MDBRow>
                    <MDBCol sm={12} lg={6} >
                        <HeaderTitleOne>Employee training and consultant</HeaderTitleOne>
                        <HeaderMainTitle>Empowering Excellence through Training and Consulting</HeaderMainTitle>
                        <HeaderParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate.</HeaderParagraph>
                        <div>
                            <Link to='/about'>
                                <MDBBtn className='me-4 mb-3 shadow-4 ' style={{ backgroundColor: '#FF725E', padding: 12 }}>Learn More About Us
                                    <MDBIcon className='ms-3' fas icon="arrow-right" />
                                </MDBBtn>
                            </Link>
                            <Link to='/contact'>
                                <MDBBtn  className='me-4 mb-3 shadow-4' style={{ backgroundColor: '#fff', padding: 12, color: '#000' }} to='/about'>Contact Us</MDBBtn>
                            </Link>
                        </div>
                    </MDBCol>

                    <MDBCol sm={12} lg={6} className='d-none d-lg-block' >
                        <Image src={require('../../assets/images/home-header-one.png')} />
                    </MDBCol>
                </MDBRow>
            </HomeHeaderSection>
            {/*This is the first section*/}
            <Section>
                <SectionTitle>Comprehensive Training </SectionTitle>
                <SectionSubTitle>With focus on individual attention, we are committed to delivering customized strategies to help empower your workforce, and guiding your business to suitable growth and excellence</SectionSubTitle>

                <MDBRow className='mt-5'>
                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 400}} >
                            <MDBCardBody>
                                <MDBCardTitle>Our Approach to Leadership Development</MDBCardTitle>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate.
                                </MDBCardText>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>See More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 400}}>
                            <MDBCardBody>
                                <MDBCardTitle>Leadership Development expands a leader's impact.</MDBCardTitle>
                                <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>See More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Section>
            {/*This is the second section*/}
            <Section>
                <SectionTitle>Professional Development Program</SectionTitle>
                <SectionSubTitle>Giving you the best of all training</SectionSubTitle>

                <MDBRow className='mt-5'>
                    <MDBCol className='mb-5' lg={6} >
                        <Program className='shadow-4' >Sales Training</Program>
                        <Program className='shadow-3' >Private Training On Site</Program>
                        <Program className='shadow-3' >Leadership Training</Program>
                        <Program className='shadow-3' >Customer Service Training</Program>
                        <Program className='shadow-3' >Corporate Training</Program>
                    </MDBCol>

                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 500}}>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={require('../../assets/images/sectionB-img.png')} fluid alt='...' />
                                
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>Sales Training</MDBCardTitle>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Section>
            {/*This is the third section*/}
            <Section style={{marginBottom: 50}}>
                <SectionTitle>Programs to Elevate Your Workforce</SectionTitle>
                <SectionSubTitle>This are professional programs that have been tested with actual temas</SectionSubTitle>

                <MDBRow className='mt-5'>
                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 350}}>
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize: 16, color: '#85A7EC'}} >Paid Program</MDBCardTitle>
                                <MDBCardTitle>Sales and Business Development</MDBCardTitle>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 350}}>
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize: 16, color: '#85A7EC'}} >Paid Program</MDBCardTitle>
                                <MDBCardTitle>Leadership and Sales Management</MDBCardTitle>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 350}}>
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize: 16, color: '#85A7EC'}} >Paid Program</MDBCardTitle>
                                <MDBCardTitle>Compliance and Regulatory Training</MDBCardTitle>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 350}}>
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize: 16, color: '#85A7EC'}} >Paid Program</MDBCardTitle>
                                <MDBCardTitle>Change Management Workshop</MDBCardTitle>
                                <MDBCardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBBtn className='shadow-5 buttonStyle'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Section>
            {/*This is the fourth section*/}
            <Section style={{marginBottom: 50}} >
                <SectionTitle>Contact Us</SectionTitle>
                <SectionSubTitle>Reach out to us with a quick email</SectionSubTitle>
                <MDBCard className='mt-5 contact-card'>
                    <MDBCardBody>
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


