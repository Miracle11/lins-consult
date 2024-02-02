import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ButtonSmall, ContainerBody, SubHeaderBox, InputStyleOne } from '../../assets/style/Admin.Styled';
import {useNavigate} from 'react-router-dom';


export const NewCourse = () => {
    const navigate  =useNavigate();

    const save = () => {
        navigate('/admin/course')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>Add New Courses</PageTitle>
                <ContainerBody>
                    <SubHeaderBox>Course Name</SubHeaderBox>
                    <InputStyleOne style={{marginTop: 40, marginBottom: 40}} placeholder='Enter course name' />
                    <ButtonSmall onClick={save} style={{float: 'right'}} >Add</ButtonSmall>
                </ContainerBody>
            </Container>
        </AdminLayout>
    )
};