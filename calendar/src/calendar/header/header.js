import styled from 'styled-components';

const Container = styled.div`
   height: 70px;
   display: flex;
   justify-content: space-between;
   padding: 0px 50px;
   align-items: center;
   border-bottom: 1px solid #EBEBEB;
`;

const Title = styled.h2`
   
`;

const AddButton = styled.div`
    width: 1em;
    height: 1em;
    color: #ff0000;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default function Header() {
  let mess;
  const handleClick = () => {
    mess = prompt('введи текст');
   
  }
  
  return (
    <Container>
      <Title>Interview Calendar - {mess}</Title>
      <AddButton onClick={handleClick}>+</AddButton>
    </Container>
  );
}


