import styled from 'styled-components'
import { LogoList } from '../../theme/Logos'

const FooteWrapper= styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    border-radius:50px;
    display: flex;
    background-color:dodgerblue;
    justify-content:center;
    align-items:center;
`;

export default function Contato(){
    return(
        <FooteWrapper>
            <LogoList/>
        </FooteWrapper>
    )
}