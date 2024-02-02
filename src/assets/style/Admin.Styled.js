import styled from 'styled-components';

//simpler container used across all admin pages
export const Container = styled.div`
    padding: 20px 50px 20px 50px; 
    @media screen and (max-width: 720px) {
     padding: 20px;
     margin-bottom: 50px;
    }
`;

//page header title
export const PageTitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: #000;
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 720px){
        font-size: 20px;
    }
`;

//primary button for admin page
export const ButtonPrimary = styled.button`
    width: 170px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    color: #fff;
    background-color: ${props => props.secondary ? "#263238" : "#FF725E"};
    border: none;
    border-radius: 3px;
    &:hover{
        background-color: ${props => props.secondary ? "#1C262A" : "#E86451"};
    }
    @media screen and (max-width: 720px){
        font-size: 10px;
        width: 110px;
        height: 30px;
    }
`;

//small buttons for deled and edith
export const ButtonSmall = styled.button`
    width: ${props => props.long ? '170px' : '80px'};
    height: ${props => props.long ? '40px' : '30px'};
    font-size: 16px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    color: #fff;
    background-color: ${props => props.delete ? "#B3001B" : "#263238"};
    border: none;
    border-radius: 3px;
    &:hover{
        background-color: ${props => props.delete ? "#9C031A" : "#1C262A"};
    }
    @media screen and (max-width: 720px) {
    width: 40px;
    height: 20px;
    font-size: 9px;
}
`;

//body container for admin
export const ContainerBody = styled.div`
    margin-top: 20px;
`;

//Table styling
export const Table = styled.table`
width: 100%;
border-collapse:separate;
border-spacing:0 20px;
@media screen and (max-width: 720px) {
    border-spacing:0 10px;
}
`;
export const TableHead = styled.thead`
background-color: #F4F4F4;
height: 50px;
font-size: 20px;
font-family: 'Lato', sans-serif;
color: #000;
@media screen and (max-width: 720px) {
    font-size: 8px;
    height: 20px;
}
`;
export const TableBody = styled.tbody`
    
`;
export const Tr = styled.tr`
outline: solid 1px #D9D9D9;
border-radius: 10px;
`;
export const Th = styled.th`
padding-left: 10px;
padding-right: 10px;
`;
export const Td = styled.td`
height: 50px;
padding-left: 10px;
padding-right: 10px;
@media screen and (max-width: 720px) {
    font-size: 8px;
    height: 20px;
}
`;

//header styles
export const SubHeaderBox =styled.div`
    height: 50px;
    background-color: #F4F4F4;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    gap: 20px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
`;
export const SubHeaderText = styled.h4`

`;

//input fields
export const InputTitleText = styled.h5`
    font-size: 16px;
    font-weight: 300;
`;
export const InputStyleOne = styled.input`
    height: 50px;
    width: 100%;
    margin-bottom: 20px;
    padding-left: 10px;
    border-color: #D9D9D9;
    border-radius: 5px;
    border-style: groove;
    &:focus{
        outline-color: #ACAAAA;
    }
`;

export const InputTextArea = styled.textarea`
    height: 300px;
    width: 100%;
    margin-bottom: 20px;
    padding-left: 10px;
    border-color: #D9D9D9;
    border-radius: 5px;
    border-style: groove;
    &:focus{
        outline-color: #ACAAAA;
    }
`;

