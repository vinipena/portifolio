import React from 'react';
import styled from 'styled-components';
import { FeatherIcon } from '../../theme/Logos/svg';

const LogoWrapper = styled.div`
    display:flex;  
        color:dodgerblue;
        justify-content:space-around;
        text-align:center;
      }
      h4{
        margin-left: 25px;
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