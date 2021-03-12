import styled from 'styled-components'
import Capa from '../src/commons/Capa'

import Contato from '../src/commons/Contato'
import Header from '../src/commons/Header'
import Menu from '../src/commons/Menu'
import Portifolio from '../src/commons/Portifolio'
import Sobre from '../src/commons/Sobre'
import { Container } from '../src/foundation/Container'



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return(/* 
    <Container>
      <Capa/>
      <Cabeçalho>
        <Logo/>  
        <Menu/>
      <Cabeçalho
      <Projetos>
        <Cards
      <Projetos/>
      <Footer>
        <Icons/>
      </Footer
    </Container>*/
    <Container>
      <Capa/>
      <Header id='home'/>
      <Sobre id ='sobre'/>
      <Portifolio id='projetos' />
      <Contato id='contato'/>
    </Container>
  )
}
