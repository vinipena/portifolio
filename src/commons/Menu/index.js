import React from 'react';
import Styled from 'styled-components';
import { FeatherIcon, GithubIcon } from '../../theme/Logos/svg';
//import { MenuWrapper } from '../Menu/style/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url:'#home',
  },
  {
    texto: 'Sobre Mim',
    url: '#sobre',
  },
  {
    texto: 'Projetos',
    url: '#projetos',
  },
];

const MenuWrapper = Styled.ul`
    display: flex;
    align-items: center;
    z-index:1;
    color: dodgerblue;
    justify-content: space-around;
    text-align: center; 
    
}
@media (min-width: 600px){
         width:70%;
     }
li{
    list-style: none;
    text-align:center;    
}
a {
    font-size:1rem;
    
    margin: 5px;
    text-align:center;
    text-decoration: none;
    transition: text-shadow 1s;
    &:active,
    &:hover{
        text-shadow: 0 0 2px teal;
    }
    @media (min-width: 600px){
         font-size: 1.2rem;
     }
}
`;


export default function Menu() {
  return (
    <MenuWrapper>
        {links.map(link => {
          return (
            <li key={link.texto}>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          );
        })}      
    </MenuWrapper>
  );
}
