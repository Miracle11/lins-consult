import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ButtonPrimary, ButtonSmall, ContainerBody, Table, TableHead, TableBody, Tr,Th, Td } from '../../assets/style/Admin.Styled';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.div`
    display: flex;
    gap: 10px;
    @media screen and (max-width: 720px) {
    gap: 5px;
}
`;

const datas = [
    {training: 'Creative Strategic Planning and Leadership', location: 'Wuse 2, 123 Backly Road'},
    {training: 'Creative Strategic Planning and Leadership', location: 'Wuse 2, 123 Backly Road'}
];


export const Training = () => {
    const navigate  =useNavigate();

    const addCourse = () => {
        navigate('/admin/training/newtraining')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>All Training</PageTitle>
                <ButtonPrimary onClick={addCourse} >Add New Training</ButtonPrimary>
                <ContainerBody>
                    <Table>
                        <TableHead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Training</Th>
                                <Th>Location</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </TableHead>
                        <TableBody>
                            {datas && datas.map((data, index) =>
                                <Tr key={index}>
                                    <Td>{index}</Td>
                                    <Td>{data.training}</Td>
                                    <Td>{data.location}</Td>
                                    <Td>
                                        <Btn>
                                            <ButtonSmall>Edit</ButtonSmall>
                                            <ButtonSmall delete >Delete</ButtonSmall>
                                        </Btn>
                                    </Td>
                                </Tr>
                            )}
                        </TableBody>
                    </Table>
                </ContainerBody>
            </Container>
        </AdminLayout>
    )
};