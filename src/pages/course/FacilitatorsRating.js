import React from 'react'
import { CourseLayout } from '../../component/course/CourseLayout';
import { Section, FormTitle, InputTitle, Input } from '../../assets/style/Course.Styled';
import { MDBCard, MDBCardBody,MDBBtn, MDBCardTitle } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export const FacilitatorsRating = () => {
    return (
        <CourseLayout>
            {/*Form Section*/}
            <Section>
            <MDBCard className='mt-5 contact-card'>
                    <MDBCardBody>
                        <MDBCardTitle style={{marginBottom: 50}}>
                            <FormTitle>Fill out a survey on the facilitators and help us serve you better</FormTitle>
                        </MDBCardTitle>
                            <form>
                                <InputTitle>Phone Number:</InputTitle>
                                <Input type='number' />
                                <Link to='/course'>
                                <MDBBtn type='submit' className='mb-4 shadow-5' block style={{ backgroundColor: '#FF725E', marginTop: 50, padding: 12}}>Submit</MDBBtn>
                            </Link>
                            </form>
                    </MDBCardBody>
                </MDBCard>
            </Section>
        </CourseLayout>
    )
};