import React from 'react';
import styled from 'styled-components';
import { FeatherIcon } from '../../theme/Logos/svg';

const LogoWrapper = styled.div`
    display:flex;  
    justify-content:center;
    text-align:center;
    color: dodgerblue;
    
  }
   @media (min-width: 600px){
         width:30%;
     }
  svg{
    margin-left:5px;
    height: 25px;
    width: auto;

  }
  h4{
    margin-left: 1em;
  }
`;

export default function Logo(){
    return(
    <LogoWrapper>
       <FeatherIcon/>
       <h4>Vinicius Pena</h4>
    </LogoWrapper>
    )
}
