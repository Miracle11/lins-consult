import React from 'react';
import { CourseNavBar } from './CourseNavBar';
import { MDBContainer } from 'mdb-react-ui-kit';



export const CourseLayout = ({children}) => {
    return (
        <>
            <CourseNavBar />
            <MDBContainer style={{marginTop: 80}} >
                {children}
            </MDBContainer>
        </>
    )
};