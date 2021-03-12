import styled from 'styled-components'
import { LogoList } from '../../theme/Logos'

const FooteWrapper= styled.div`
    bottom: 0;
    display: flex;
    background-color:dodgerblue;
    border-radius: 25px;
    justify-content:center;
    align-items:center;
    z-index:1;

`;

export default function Contato(){
    return(
        <FooteWrapper>
            <LogoList/>
        </FooteWrapper>
    )
}