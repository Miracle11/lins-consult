import React from 'react';
import { SideNav } from './SideNav';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;
const Nav = styled.div`
    position: fixed;
`;
const Children = styled.div`
    width: 100%;
    margin-left: 260px;
    @media screen and (max-width: 720px) {
        margin-left: 70px;
    }
`;

export const AdminLayout = ({children}) => {
    return (
        <Container>
            <Nav>
                <SideNav />
            </Nav>
            <Children>
                {children}
            </Children>
        </Container>
    )
};