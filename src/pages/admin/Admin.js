import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ContainerBody, Table, TableHead, TableBody, Tr,Th, Td } from '../../assets/style/Admin.Styled';


export const Admin = () => {
    const users =[
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', number: '07057397908' },
        { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', number: '07057397908' },
        { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', number: '07057397908' },
        { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', number: '07057397908' },
        { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', number: '07057397908' },
        { id: 6, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', number: '07057397908' },
        { id: 7, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', number: '07057397908' },
        { id: 8, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', number: '07057397908' },
        { id: 9, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', number: '07057397908' },
        { id: 10, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', number: '07057397908' },
        { id: 7, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', number: '07057397908' },
        { id: 8, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', number: '07057397908' },
        { id: 9, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', number: '07057397908' },
        { id: 10, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', number: '07057397908' }
    ];
    return(
        <AdminLayout>
            <Container>
                <PageTitle>List of all registered participants</PageTitle>
                <ContainerBody>
                    <Table>
                        <TableHead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>FullName</Th>
                                <Th>Email</Th>
                                <Th>Phone Number</Th>
                            </Tr>
                        </TableHead>
                        <TableBody>
                            {users && users.map((user, index) =>
                                <Tr key={index}>
                                    <Td>{user.id}</Td>
                                    <Td>{user.firstName} {user.lastName}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.number}</Td>
                                </Tr>
                            )}
                        </TableBody>
                    </Table>
                </ContainerBody>
            </Container>
        </AdminLayout>
    )
};