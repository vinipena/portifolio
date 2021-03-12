import React from 'react';
import Styled from 'styled-components';
import { FeatherIcon, GithubIcon } from '../../theme/Logos/svg';
//import { MenuWrapper } from '../Menu/style/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url:' #home',
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
}
li{
    list-style: none;
    
}
a {
    padding: 10px;
    margin: 5px;
    text-decoration: none;
    transition: text-shadow 1s;
    &:active,
    &:hover{
        text-shadow: 0 0 2px teal;
    }
}
`;


export default function Menu() {
  return (
    <MenuWrapper>
        {links.map(link => {
          return (
            <li key={link.url}>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          );
        })}      
    </MenuWrapper>
  );
}
