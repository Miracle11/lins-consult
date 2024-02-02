import React from 'react'
import { CourseLayout } from '../../component/course/CourseLayout';
import { Header, Title, SubTitle, HeaderImage, Section, SectionTitle, FormTitle, FormSubTitle, InputTitle, Input } from '../../assets/style/Course.Styled';
import {MDBRow, MDBCol, MDBCard, MDBCardBody,MDBBtn, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export const Course = () => {
    return (
        <CourseLayout>
            <Header>
                <MDBRow>
                    <MDBCol lg={6}>
                        <Title>Lins Consult Ltd</Title>
                        <SubTitle>Welcome to this training program facilitated by Lins Consult Ltd</SubTitle>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <HeaderImage alt='lins' src={require('../../assets/images/courses-header.png')} />
                    </MDBCol>
                </MDBRow>
            </Header>
            {/*Form Section*/}
            <Section>
                <SectionTitle>Title: Creative Strategic Planning and Leadership</SectionTitle>

                <MDBCard className='mt-5 contact-card'>
                    <MDBCardBody>
                        <MDBCardTitle style={{marginBottom: 50}}>
                            <FormTitle>Personal Information Registration</FormTitle>
                            <FormSubTitle>Kindly fill out this brief registration form</FormSubTitle>
                        </MDBCardTitle>
                            <form>
                                <InputTitle>First Name:</InputTitle>
                                <Input />
                                <InputTitle>Last Name:</InputTitle>
                                <Input />
                                <InputTitle>Email:</InputTitle>
                                <Input />
                                <InputTitle>Phone Number:</InputTitle>
                                <Input />

                                <Link to='/course'>
                                <MDBBtn type='submit' className='mb-4 shadow-5' block style={{ backgroundColor: '#FF725E', marginTop: 50, padding: 12}}>Send</MDBBtn>
                            </Link>
                            </form>
                    </MDBCardBody>
                </MDBCard>
            </Section>
        </CourseLayout>
    )
};