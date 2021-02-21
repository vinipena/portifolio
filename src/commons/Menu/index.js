import React from 'react';
import Styled from 'styled-components';
//import { MenuWrapper } from '../Menu/style/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url:' #home',
  },
  {
    texto: 'Portifólio',
    url: '#portifolio',
  },
  {
    texto: 'Sobre',
    url: '#sobre',
  },
  {
    texto: 'Contato',
    url: '#contato',
  },
];

const MenuWrapper = Styled.nav`
    background-color:whitesmoke;
    width:100vw;
    position:fixed;
    bottom: 0;
    //border: solid 1px black;
    z-index:1;
    }
ul{
    display:flex;
    justify-content: space-around;
}
li{
    list-style: none;
}
a {
    color: dodgerblue;
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
      <ul>
        {links.map(link => {
          return (
            <li key={link.url}>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          );
        })}
      </ul>
    </MenuWrapper>
  );
}
