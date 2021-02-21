import styled from'styled-components'

const Titulo = styled.h1`
    color: whitesmoke;
    text-align: center;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 3em;
`;
const Subtitulo = styled.h3`
    color: silver;
    font-style: italic;
    font-weight: lighter;
    text-align: center;
    font-size: 1.2em;
    font-family: 'Shadows Into Light Two', cursive;
`;

export default function Capa(){
return(
    <>
    <Titulo> Vinicius Pena </Titulo>
    <Subtitulo> Frontend Developer </Subtitulo>
    </>
)
}