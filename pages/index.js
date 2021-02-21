import styled from 'styled-components'
import Capa from '../src/commons/Capa'
import Card from '../src/commons/Card'
import { Header } from '../src/commons/Header'
import Menu from '../src/commons/Menu'
import Sobre from '../src/commons/Sobre'
import { Container } from '../src/foundation/Container'
import { LogoList } from '../src/theme/Logos'



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return(/* <Container>
    <Cabeçalho>  
      <Capa/>
    <Cabeçalho/>
    <Menu/>
    <Projetos/>
    <Footer/>
  </Container>*/
  <div>
    <Header id='home'>
      <Capa/>
      <Menu/>
    </Header>
    <Container id= 'portifolio' >
      <h2>Portifólio</h2>
      <Card/>
    </Container>
    <Container id='sobre'>
    <h2>Sobre</h2>
      <Sobre/>
    </Container>
    <Container id='contato'>
    <h2>Contato</h2>
         <LogoList/>
    </Container>
  </div>
  )
}
