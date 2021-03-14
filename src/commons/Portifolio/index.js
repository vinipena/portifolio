import Styled from 'styled-components'
import Card from '../Card'

const PortifolioWrapper =Styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Portifolio(){
    return(<PortifolioWrapper>
        <h2>Portifólio</h2>
        <Card/>
    </PortifolioWrapper>)
}