import styled from 'styled-components';
import Header from "./header/header"
import Week from './week/week';
import Main from './main/main';
import Footer from './footer/footer';

const Container = styled.div`
   max-width: 740px;
   margin: 10px auto;
   border: 2px solid #c7c7c7;
   border-radius: 15px;  
`;


export default function Calendar() {
    return (
        <Container>
            <Header/>
            <Week />
            <Main />
            <Footer/>
        </Container>            
    )
}