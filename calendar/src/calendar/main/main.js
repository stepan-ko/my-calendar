import styled from 'styled-components';


const Container = styled.div`
   height: 500px;
   display: flex;
   justify-content: space-between; 
   padding: 10px 0 0 15px; 
   align-items: start;
   overflow: scroll;
`;

const Tr = styled.tr`
  height: 60px;
`;

const Td = styled.td`
  border-right: 2px solid #E6E6E6;
  border-bottom: 2px solid #E6E6E6;
  padding: 2px; 
  background-color: ${props => props.color || '#FFF'};
`;

const Time = styled.div`
  width: 60px;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
`;

const TimeOfDay = styled.div`
  width: 100%; 
  height: 62px;
  color: #D9D9D9;
`;

const Table = styled.table`
  flex-grow: 1;
  
`;

const allTime = [] 

for (let i = 0; i < 24; i++) {
  allTime.push(i)
}

const colorTd = [
  '#FFF',
  '#EBECFF',
  '#B3B7FF',
]
  


export default function Main() {


  return (
    <Container>
      <Time>
        {
          allTime.map(item => (          
          <TimeOfDay key={item}>{item}:00</TimeOfDay>
        ))} 
      </Time>

      <Table>
        <tbody>
          {
            allTime.map(item => (          
              <Tr>
                <Td color={colorTd[0]}/>
                <Td color={colorTd[1]}/>
                <Td color={colorTd[2]}/>
                <Td color={colorTd[0]}/>
                <Td color={colorTd[0]}/>
                <Td color={colorTd[0]}/>
                <Td color={colorTd[0]}/>
              </Tr>
          ))}
              
          
        </tbody>
      </Table>
    </Container>


  )
}

