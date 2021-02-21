import Styled from 'styled-components'

const Apresentacao = Styled.p`
    color: white;
    text-indent: 1.4em;
    margin-bottom: 1.4em;
    text-align: justify;
    padding:50px;
`;

const Avatar = Styled.img`
    height: 50vh;
    width: auto;
    margin:100px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    margin-left: 2em;
    z-index:0;  

  @media (min-width: 600px) {
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    float: right;
  }
`;

export default function Sobre(){
    return(
    <>
        <Avatar src='https://avatars.githubusercontent.com/u/30162376?s=460&u=994082445e46ad72f2c2de1ae04fd98f8571b770&v=4'/>
        <Apresentacao>Me chamo Vinicius.  
      <br/>
      Estou estudando para me tornar um desevolvedor Front-end e para isso iniciei uma graduação em Eng. da Computação juntando isso com os cursos e formações da Alura acredito estar aprendendo o necessario para me tornar um profissional capacitado e competente.
      <br/>
      Este site foi construído durante a Imersão CSS da Alura.
      <br/>
      Com o uso de Styled-Components, ReactJS e Next ele foi refeito! </Apresentacao>
    </>
    )
}