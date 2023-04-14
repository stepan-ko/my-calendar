import styled from 'styled-components';

const Container = styled.div`
   height: 120px;
   display: flex;   
   flex-direction: column;
   padding: 10px 25px 10px 80px;
   align-items: center;   
   background-color: #F6F6F6;
`;

const Top = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Bottonm = styled.div`
  height: 46px; 
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.div`
    color: #ff0000;
    font-size: 33px;
    border-bottom: 2px solid #ff0000;
    border-left: 2px solid #ff0000;
    width: 16px;
    height: 16px;
    transform: rotate(${props => props.rotate }deg);
`;


const Days = styled.div`
  display: flex;
  height: 80px;  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
`;

const LetterWeek = styled.div`
  font-size: 1.5em;
`;

const DayOfWeek = styled.div`
  font-size: 1.5em;
`;


const week = [
  {symbolWeek: 'M', dayNumber: 25},
  {symbolWeek: 'T', dayNumber: 26},
  {symbolWeek: 'W', dayNumber: 27},
  {symbolWeek: 'T', dayNumber: 28},
  {symbolWeek: 'F', dayNumber: 29},
  {symbolWeek: 'S', dayNumber: 30},
  {symbolWeek: 'S', dayNumber: 31},
];

export default function Week() {
  return (
    <Container>
      <Top> 
      {week.map(item => (
          <Days>
            <LetterWeek>{item.symbolWeek}</LetterWeek>
            <DayOfWeek>{item.dayNumber}</DayOfWeek>
          </Days>
        ))} 
      </Top>

      <Bottonm>
        <Arrow rotate="45" />       
         March 2019
        <Arrow rotate="225" />          
      </Bottonm>
    </Container>
  );
}


