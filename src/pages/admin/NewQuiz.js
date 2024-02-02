import React from 'react';
import { AdminLayout } from '../../component/admin/AdminLayout';
import { Container, PageTitle, ButtonPrimary, ContainerBody, SubHeaderBox, InputTitleText, InputStyleOne, InputTextArea } from '../../assets/style/Admin.Styled';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 720px) {
        display: block;
    }
`;

export const NewQuiz = () => {
    const navigate  =useNavigate();

    const save = () => {
        navigate('/admin/quiz')
    }
    return(
        <AdminLayout>
            <Container>
                <PageTitle>Add New IceBreaker</PageTitle>
                <ContainerBody>
                    <SubHeaderBox>IceBreaker Name</SubHeaderBox>
                    <InputTitleText style={{marginTop: 40, marginBottom: 10}} >Question Order Number</InputTitleText>
                    <InputStyleOne type='number' placeholder='1' />
                    <InputTitleText style={{ marginBottom: 10}} >Question</InputTitleText>
                    <InputTextArea type='string' placeholder='Enter Question' />
                    <Row>
                        <div>
                            <InputTitleText style={{ marginBottom: 10}} >Option A</InputTitleText>
                            <InputStyleOne placeholder='enter option A'  type='string' />
                        </div>
                        <div>
                            <InputTitleText style={{ marginBottom: 10}} >Option B</InputTitleText>
                            <InputStyleOne placeholder='enter option B'  type='string' />
                        </div>
                        <div>
                            <InputTitleText style={{ marginBottom: 10}} >Option C</InputTitleText>
                            <InputStyleOne placeholder='enter option C'  type='string' />
                        </div>
                        <div>
                            <InputTitleText style={{ marginBottom: 10}} >Option D</InputTitleText>
                            <InputStyleOne placeholder='enter option D'  type='string' />
                        </div>
                        <div>
                            <InputTitleText style={{ marginBottom: 10}} >Answer</InputTitleText>
                            <InputStyleOne placeholder='select the answer' type='string' />
                        </div>
                    </Row>
                    <ButtonPrimary onClick={save} secondary style={{float: 'right', marginBottom: 50}} >Add Quiz</ButtonPrimary>
                </ContainerBody>
            </Container>
        </AdminLayout>
    )
};