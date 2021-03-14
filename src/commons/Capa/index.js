import styled from'styled-components'

const CapaWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;

const Titulo = styled.h1`
    color: whitesmoke;
    text-align: center;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 3em;
`;
const Subtitulo = styled.h3`
    color: silver;
    font-weight: lighter;
    font-size: 1.2em;
    font-family: 'Shadows Into Light Two', cursive;
`;

export default function Capa(){
return(
    <CapaWrapper>
        <Titulo> 
            Vinicius Pena
        </Titulo>
        <Subtitulo> 
            Front-end Developer
        </Subtitulo>
    </CapaWrapper>
)
}