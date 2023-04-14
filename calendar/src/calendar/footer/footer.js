import styled from 'styled-components';

const Container = styled.div`
   height: 80px;
   display: flex;  
   justify-content: space-between;
   background-color: #F6F6F6;
`;

const ButtonFooter = styled.div`
   height: 100%;
   width: 180px;   
   color: #ff0000;
   font-size: 2em;
   display: flex;  
   justify-content: center;
   align-items: center;
   cursor: pointer;
`;



export default function Footer() {
    return (
        <Container>
            <ButtonFooter>Today</ButtonFooter>
            <ButtonFooter>Delete</ButtonFooter>
        </Container>

    )
}