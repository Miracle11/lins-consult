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
    {coursename: 'Creative Strategic Planning and Leadership'},
    {coursename: 'Creative Strategic Planning and Leadership'}
];

export const AdminCourse = () => {
    const navigate  =useNavigate();

    const addCourse = () => {
        navigate('/admin/course/newcourse')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>All Courses</PageTitle>
                <ButtonPrimary onClick={addCourse} >Add New Course</ButtonPrimary>
                <ContainerBody>
                    <Table>
                        <TableHead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Course Name</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </TableHead>
                        <TableBody>
                            {datas && datas.map((data, index) =>
                                <Tr key={index}>
                                    <Td>{index}</Td>
                                    <Td>{data.coursename}</Td>
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