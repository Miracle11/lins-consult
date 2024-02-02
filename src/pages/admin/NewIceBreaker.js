import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ButtonPrimary, ContainerBody, SubHeaderBox, InputTitleText, InputStyleOne, InputTextArea } from '../../assets/style/Admin.Styled';
import {useNavigate} from 'react-router-dom';


export const NewIceBreaker = () => {
    const navigate  =useNavigate();

    const save = () => {
        navigate('/admin/icebreaker')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>Add New IceBreaker</PageTitle>
                <ContainerBody>
                    <SubHeaderBox>IceBreaker Name</SubHeaderBox>
                    <InputTitleText style={{marginTop: 40, marginBottom: 10}} >IceBreaker Order Number</InputTitleText>
                    <InputStyleOne type='number' placeholder='0' />
                    <InputTitleText style={{ marginBottom: 10}} >IceBreaker Order Question</InputTitleText>
                    <InputTextArea type='string' placeholder='Enter Question' />
                    <ButtonPrimary onClick={save} secondary style={{float: 'right'}} >Save IceBreaker</ButtonPrimary>
                </ContainerBody>
            </Container>
        </AdminLayout>
    )
};