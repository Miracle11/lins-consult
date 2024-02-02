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
const Bottom = styled.div`
    margin-top: 50px;
`;

const datas = [
    {question: 'What is leadership'},
    {question: 'What is strategic plan'},
    {question: 'What are the elements of planning'}
];


export const Quiz = () => {
    const navigate  =useNavigate();

    const addCourse = () => {
        navigate('/admin/quiz/newquiz')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>All Quiz</PageTitle>
                <ButtonPrimary onClick={addCourse} >Add New Quiz</ButtonPrimary>
                <ContainerBody>
                    <Table>
                        <TableHead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>question</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </TableHead>
                        <TableBody>
                            {datas && datas.map((data, index) =>
                                <Tr key={index}>
                                    <Td>{index}</Td>
                                    <Td>{data.question}</Td>
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
                <Bottom>
                    <ButtonSmall delete long  onClick={addCourse} >Delete All</ButtonSmall>
                </Bottom>
            </Container>
        </AdminLayout>
    )
};