import Styled from 'styled-components'

const conteudo =[{
    aluraquiz:{
        image:'../../images/aluraquiz-card.png',
        titulo: 'AluraQuiz',
        conteudo:'Projeto desenvolvido na Imersão React e NextJS da Alura.',
        link:'https://alura-quiz-git-master.vinipena.vercel.app/'
    },

   Instalura: {
        image: '../../images/instalura-card.png',
        titulo: 'Instalura',
        conteudo:'Projeto desenvolvido no Bootcamp JAMStack da Alura.',
        link:'https://alura-quiz-git-master.vinipena.vercel.app/'
    },
    imersaoGameDev: {
        image: '../../images/imersao-gamedev.png',
        titulo: 'Imersão GameDev',
        conteudo:'Projeto desenvolvido na Imersão GameDev utilizando o editor online p5js.',
        link:'https://editor.p5js.org/vacpena/full/yzLxoHsGx'
    }}
];

const CardWrapper = Styled.div`
        display: grid;
        grid-template-columns:  250px ;
        align-items: right;
        margin: 0 auto;     
    }
    li{
        list-style:none;
    }
@media (min-width: 700px){
 display: grid;
 grid-template-columns: repeat( 3, 250px );
 align-items: center;
 justify-content: space-around;
}
`;
CardWrapper.Body = Styled.div`
    display: block;
    width: auto
    height: 100%;

    padding: 5px;
    //border: 1px solid whitesmoke;
    border-radius: 8px; 
    background-color: rgba(0,32,255,0.2);
    //box-shadow: 0 0 5px white;
    
`;

CardWrapper.Image = Styled.img`
    width: 100%;
    height: 200px;
    border-radius: 8px;
    

`;

CardWrapper.Title = Styled.h3`
    text-align: center;
    text-decoration: bold;
    background-color: rgba(245,245,255,0.3);
    border-radius: 8px; 
    padding-bottom:5px;

`;
CardWrapper.Content = Styled.section`
    text-align:center;
    height: auto;
    margin:10px;
    text-align: left;
    background-color: rgba(245,245,255,0.1);
    border-radius: 8px;
    
    p{
        font-size:0.5em;
        text-align: left;
    }
`;

export default function Card(){
    return(
    <CardWrapper>
                <CardWrapper.Body>
                {conteudo.map(content =>{
                    return(
                        <li key ={content.Instalura.link}>
                            <a href={content.Instalura.link}>
                                <CardWrapper.Image
                                    alt ='Titulo card'
                                    src ={content.Instalura.image}    
                            />
                            </a>
                            <CardWrapper.Title>{content.Instalura.titulo}</CardWrapper.Title>
                            <CardWrapper.Content>
                                {content.Instalura.conteudo}
                            </CardWrapper.Content>
                        </li>
                    )
                })}
                </CardWrapper.Body>
                <CardWrapper.Body>
                {conteudo.map(content =>{
                    return(
                        <li key ={content.aluraquiz.link}>
                            <a href={content.aluraquiz.link}>
                                <CardWrapper.Image
                                    alt ='Titulo card'
                                    src ={content.aluraquiz.image}    
                            />
                            </a>
                            <CardWrapper.Title>{content.aluraquiz.titulo}</CardWrapper.Title>
                            <CardWrapper.Content>
                                {content.aluraquiz.conteudo}
                            </CardWrapper.Content>
                        </li>
                    )
                })}
            </CardWrapper.Body>
                <CardWrapper.Body>
        {conteudo.map(content =>{
            return(
                <li key ={content.imersaoGameDev.link}>
                    <a href={content.imersaoGameDev.link}>
                        <CardWrapper.Image
                            alt ='Titulo card'
                            src ={content.imersaoGameDev.image}    
                    />
                    </a>
                    <CardWrapper.Title>{content.imersaoGameDev.titulo}</CardWrapper.Title>
                    <CardWrapper.Content>
                        {content.imersaoGameDev.conteudo}
                    </CardWrapper.Content>
                </li>
            )
        })}
    </CardWrapper.Body>
    </CardWrapper>
    )
}