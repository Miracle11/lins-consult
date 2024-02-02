import styled from 'styled-components';

//General Styling for web
export const Section = styled.div`
    min-height: 800px;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-color: #E9E8E8;
    border-radius: 5px;
    border-style: groove;
    &:focus{
        outline-color: #D9D9D9;
    }
`;
export const FormTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-color: #E9E8E8;
    border-radius: 5px;
    border-style: groove;
    &:focus{
        outline-color: #D9D9D9;
    }
`;





//General Text Styling for sections
export const SectionTitle = styled.h1`
    font-size: 40px;
    color: #455A64;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;
export const SectionSubTitle = styled.h1`
    font-size: 14px;
    color: #7A7A7A;
    width: 60%;
    margin: auto;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 10px;
        width: 90%;
    }
`;
//End of General Styling


//Home styling Section
export const HomeHeaderSection = styled.div`
    min-height: 800px;
    padding-top: 100px;
    @media screen and (max-width: 768px) {
        min-height: 600px;
    }
`;
export const HeaderTitleOne = styled.p`
    font-size: 16px;
    padding: 10px;
    margin-bottom: 25px;
    width: 260px;
    border: 1px;
    border-color: #E6E6E6;
    border-style: groove;
    border-radius: 30px;
`;
export const HeaderMainTitle = styled.h1`
    font-size: 50px;
    color: #000;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;
export const HeaderParagraph = styled.p`
    font-size: 14px;
    margin-bottom: 25px;
    padding-right: 20px;
    @media screen and (max-width: 768px) {
        padding-right: 0;
    }
`;
export const Image = styled.img` 
    width: 100%;
    margin-bottom: 20px;
`;
export const Program = styled.div`
    font-size: 24px;
    height: 50px;
    
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

//End of Home Styling Section

//Contact Page Style
export const InfoIcon = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;
export const InfoText = styled.p`
    margin-top: 20px;
`;

//end of contact 

//About page styled components
export const AboutTitle = styled.h3`
    color: #455A64;
    font-size: 32px;
   
`;
export const AboutText = styled.p`
    margin-bottom: 25px;
    font-size: 16px;
    font-family: 'Raleway', sans-serif;
`;