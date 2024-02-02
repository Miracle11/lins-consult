import {styled} from 'styled-components'

export const Header = styled.div`
    margin-top: 15em;
    margin-bottom: 10em;

`;
export const Title = styled.h1`
    margin-top: 30px;
    font-size: 64px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: #000;
    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: 0;
    }
`;
export const SubTitle = styled.h3`
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 50px;
    }
`;
export const HeaderImage = styled.img`
    width: 100%;
    @media screen and (max-width: 768px) {
        
    }
`;

export const Section = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const SectionTitle = styled.h1`
    color: #455A64;
    font-size: 40px;
    font-family: 'Lato', sans-serif;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const FormTitle = styled.h1`
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;

export const FormSubTitle = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const InputTitle = styled.p`
    font-size: 20px;
    color: #000;
`;
export const Input = styled.input`
    width: 100%;
    height: 60px;
    padding-left: 10px;
    margin-bottom: 20px;
    border-style: solid;
    border-radius: 5px;
    border-color: #D2D2D2;
    outline-color: #ACACAC;
`;