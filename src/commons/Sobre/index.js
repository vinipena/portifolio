import Styled from 'styled-components'

const SobreMimWrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  }
   @media (min-width: 600px){
     display: block;
   }
`;

const Apresentacao = Styled.p`
    color: white;
    text-indent: 1em;
    margin-bottom: 25px;
    text-align: justify;
    padding:15px;
`;

const Avatar = Styled.img`
    height: auto;
    max-width: 200px;

    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    margin-left: 2em;
   
  @media (min-width: 600px) {
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    float: right;
  }
`;

export default function Sobre(){
    return(
    <SobreMimWrapper>
      <h2>Sobre Mim</h2>
      <Avatar src='https://avatars.githubusercontent.com/u/30162376?s=460&u=994082445e46ad72f2c2de1ae04fd98f8571b770&v=4'/>
      <Apresentacao>
        Olá, sou Vinicius! <br/>
        No momento, curso Eng da Computação e tenho como objetivo me tornar um desenvolver front-end.
        A graduação, somado aos cursos e especializações da Alura, acredito estar preparado para atuar como um profissional capacitado e competente.
        Este site foi construído durante a Imersão CSS da Alura.<br/>
        Com o uso de Styled-Components, ReactJS e Next ele foi refeito! 
      </Apresentacao>
    </SobreMimWrapper>
    )
}