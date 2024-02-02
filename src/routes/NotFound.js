import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    text-align: center;
`;
const Message = styled.h1`
    font-size: 50px;
`;
const linkstyle = {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
};


export const NotFound = () => {
    return (
       <Container>
            <Message>Page Not Found</Message>
            <Link to='/' style={linkstyle} >Click To Go Back To Home Page</Link>
       </Container>
    )
}