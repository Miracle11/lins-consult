import React from 'react';
import { WebLayout } from '../../component/web/WebLayout';
import {
    Section,
    SectionTitle,
    SectionSubTitle,
} from '../../assets/style/Web.Styled'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit'


export const Program = () => {
    return (
        <WebLayout>
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '600px' }}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                        <h1 className='mb-3'>Programs</h1>
                        <h4 className='mb-3'>Professional programs available</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <MDBContainer>
                 {/*This is the first section*/}
            <Section style={{marginBottom: 50, marginTop: 80}}>
                <SectionTitle>Professional Development Programs</SectionTitle>
                <SectionSubTitle>Giving you the best of all training </SectionSubTitle>

                <MDBRow className='mt-5'>
                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 650}}>
                            <MDBCardBody>
                            <MDBCardImage src={require('../../assets/images/sectionB-img.png')} fluid alt='...' />
                                <MDBCardTitle style={{marginTop: 20}} >Sales Training</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi 
                                    vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi 
                                    vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 650}}>
                            <MDBCardBody>
                            <MDBCardImage src={require('../../assets/images/sectionB-img.png')} fluid alt='...' />
                                <MDBCardTitle style={{marginTop: 20}} >Private Training On Site</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi 
                                    vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 650}}>
                            <MDBCardBody>
                            <MDBCardImage src={require('../../assets/images/sectionB-img.png')} fluid alt='...' />
                                <MDBCardTitle style={{marginTop: 20}} >Leadership Training</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi 
                                    vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 650}}>
                            <MDBCardBody>
                            <MDBCardImage src={require('../../assets/images/sectionB-img.png')} fluid alt='...' />
                                <MDBCardTitle style={{marginTop: 20}} >Custoemr Service Training</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi 
                                    vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className='mb-5' lg={6} >
                        <MDBCard style={{minHeight: 650}}>
                            <MDBCardBody>
                            <MDBCardImage src={require('../../assets/images/sectionB-img.png')} fluid alt='...' />
                                <MDBCardTitle style={{marginTop: 20}} >Corporate Training</MDBCardTitle>
                                <MDBCardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Varius sit amet mattis vulputate. Risus pretium quam vulputate dignissim suspendisse in est ante in. Id diam vel quam elementum. 
                                    Tristique senectus et netus et malesuada fames ac. Feugiat in ante metus dictum at tempor commodo ullamcorper. Nunc congue nisi 
                                    vitae suscipit tellus mauris a diam. Suspendisse sed nisi lacus sed viverra tellus in.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    
                </MDBRow>
            </Section>
            {/*This is the second section*/}
            <Section style={{marginBottom: 50,}}>
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
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Section>
            </MDBContainer>
        </WebLayout>
    )
};