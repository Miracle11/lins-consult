import React from 'react';
import { WebLayout } from '../../component/web/WebLayout';
import {
    Section,
    SectionTitle,
    AboutText,
    AboutTitle,
    Image,
} from '../../assets/style/Web.Styled'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit'

export const About = () => {
    return (
        <WebLayout>
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '600px' }}>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                        <h1 className='mb-3'>About Us</h1>
                        <h4 className='mb-3'>Get to know more about us</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <MDBContainer>
                <Section style={{marginBottom: 100, marginTop: 80}} >
                <SectionTitle>Company Profile </SectionTitle>
                    <MDBRow style={{marginTop: 80}}>
                        <MDBCol lg={6}>
                            <AboutTitle>Information</AboutTitle>
                            <AboutText>
                                LINS Consult Ltd is an international firm of Multi-disciplinary Consultants with offices in Dubai, UAE and Abuja, Nigeria. The firm carries out Integrated Human Resource Development and Financial Management consulting locally and overseas. The company is owned by Mr. Rawlins Orobogha who is a Chartered Accountant and a fellow of Institute of Chartered Accountants of Nigeria (ICAN). He holds a B.Sc. degree in Economics from the University of Lagos, Nigeria, an MBA from the University of Nigeria, Nsukka and is currently running a Doctorate Degree in Business Administration (DBA) with the prestigious Anaheim University, California, USA. The major focus of the firm is in human resource training and development in the areas of leadership, attitude and technology development. The firm strongly believes that human capital development can help to position 21st century organizations to remain current and competitive in a fast and ever-changing business environment. The firm's services are built around information technology as a force for driving business efficiency and effectiveness. The company collaborates with other experts in the industry to achieve cross-fertilization of ideas because as it generally said "ideas rules the world".
                            </AboutText>
                        </MDBCol>
                        <MDBCol lg={6}>
                        <Image src={require('../../assets/images/home-header-one.png')} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{marginTop: 80}}>
                        <MDBCol lg={6}>
                            <AboutTitle style={{color: '#B3001B'}}>Our Goals</AboutTitle>
                            <AboutText>To collaborate with focused establishments in providing management solutions packages in key areas such as human resources development, ICT, finance etc.</AboutText>
                        </MDBCol>
                        <MDBCol lg={6}>
                            <AboutTitle style={{color: '#B3001B'}}>Our Mission</AboutTitle>
                            <AboutText>To produce human resource and financial management solution packages required for organizational effectiveness and development</AboutText>
                        </MDBCol>
                        <MDBCol lg={6}>
                            <AboutTitle style={{color: '#B3001B'}}>Our Vision</AboutTitle>
                            <AboutText>To become an excellent management solution provider to organizations both in Nigeria and Overseas</AboutText>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{marginTop: 80}}>
                        <MDBCol lg={6}>
                            <MDBCard style={{minHeight: 600, marginBottom: 25}}>
                                <MDBCardBody>
                                    <AboutTitle>Our Core Value</AboutTitle>
                                        <ul>
                                            <li>Creativity</li>
                                            <li>Excellence</li>
                                            <li>Technology</li>
                                            <li>Professionalism</li>
                                        </ul>
                                    <AboutTitle>Our Core Products</AboutTitle>
                                        <ul>
                                            <li>Manpower Training and Development</li>
                                            <li>Business Analytics and Big Data Management</li>
                                            <li>Organizational Strategy and Change Development</li>
                                        </ul>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg={6}>
                            <MDBCard>
                                <MDBCardBody>
                                    <AboutTitle>Our Core Products</AboutTitle>
                                    <AboutText>The customized training programms are inspirational and interactive. They are packaged to facilitate adult learning, discovery, and application. Our teaching styles ranging from case study, business analysis, lectures and role play. The case study approach though is designed as a primary learning to action method, there are other complementary methods which include group discussions, individual / team projects and test writing. Our learning model creates both immediate and long term impact on individuals and teams. As such participants return to their desk with competences and capacities in accomplishing tasks, inter-personal relationship and team spirit required for organization's growth and sustainability.</AboutText>
                                    <AboutTitle>Our Core Products</AboutTitle>
                                    <AboutText>We deploy stimulating, collaborative process of discovery, in which participants are compelled to identify relevant issues and to apply practical lessons to their respective situations and the organization. During case studies, participants are made to assume positions of working under typical office settings such as incomplete information, complex trade-offs, and time pressures. Our Implant programms are not about Client's Organization policies but about the competencies and capacities of the individuals.</AboutText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Section>
            </MDBContainer>
        </WebLayout>
    )
};