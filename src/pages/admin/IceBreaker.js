import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ButtonPrimary, ButtonSmall, ContainerBody, Table, TableHead, TableBody, Tr,Th, Td } from '../../assets/style/Admin.Styled';
import {useNavigate} from 'react-router-dom';

const datas = [
    {icebreaker: 'What is your favourite English football club and at what cost do you watch them?', orderNo: 1},
    {icebreaker: 'Some people say that there is no need to plan and that when you get to the bridge you will know how to cross it. But what do you think?', orderNo: 2},
    {icebreaker: 'Do you like the changes in information technology, if so why?', orderNo: 3},
    {icebreaker: 'What is your favourite English football club and at what cost do you watch them?', orderNo: 4}
];

export const IceBreaker = () => {
    const navigate  =useNavigate();

    const addCourse = () => {
        navigate('/admin/icebreaker/newicebreaker')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>All Ice Breaker</PageTitle>
                <ButtonPrimary onClick={addCourse} >Add Ice Breaker</ButtonPrimary>
                <ContainerBody>
                    <Table>
                        <TableHead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Icebreaker</Th>
                                <Th>Order no</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </TableHead>
                        <TableBody>
                            {datas && datas.map((data, index) =>
                                <Tr key={index}>
                                    <Td>{index}</Td>
                                    <Td>{data.icebreaker}</Td>
                                    <Td>{data.orderNo}</Td>
                                    <Td>
                                        <ButtonSmall delete >Delete</ButtonSmall>
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