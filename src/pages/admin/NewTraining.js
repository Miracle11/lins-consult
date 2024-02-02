import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ButtonPrimary, ContainerBody, SubHeaderBox, InputTitleText, InputStyleOne } from '../../assets/style/Admin.Styled';
import {useNavigate} from 'react-router-dom';


export const NewTraining = () => {
    const navigate  =useNavigate();

    const save = () => {
        navigate('/admin/training')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>Add New Training</PageTitle>
                <ContainerBody>
                    <SubHeaderBox>New Training Course</SubHeaderBox>
                    <InputTitleText style={{marginTop: 40, marginBottom: 10}} >Training Course</InputTitleText>
                    <InputStyleOne type='string' placeholder='select option' />
                    <InputTitleText style={{ marginBottom: 10}} >Country</InputTitleText>
                    <InputStyleOne type='string' placeholder='select option' />
                    <InputTitleText style={{ marginBottom: 10}} >State</InputTitleText>
                    <InputStyleOne type='string' placeholder='state' />
                    <InputTitleText style={{ marginBottom: 10}} >City</InputTitleText>
                    <InputStyleOne type='string' placeholder='city' />
                    <InputTitleText style={{ marginBottom: 10}} >Locality(Town)</InputTitleText>
                    <InputStyleOne type='string' placeholder='town' />
                    <InputTitleText style={{ marginBottom: 10}} >Venue</InputTitleText>
                    <InputStyleOne type='string' placeholder='Venue' />
                    <ButtonPrimary onClick={save} secondary style={{float: 'right'}} >Add</ButtonPrimary>
                </ContainerBody>
            </Container>
        </AdminLayout>
    )
};