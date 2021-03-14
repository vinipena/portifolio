import styled from 'styled-components'
import Logo from '../Logo';
import Menu from '../Menu';

const HeaderWrapper = styled.nav`
    top:0;
    position:fixed;
    width:100%;
    background-color:whitesmoke;
    border-radius:25px;
    
     @media (min-width: 600px){
         display:flex;
         justify-content:space-between;
     }
`;


export default function Header(){
    return(
        <div>
        <HeaderWrapper>
            <Logo/>
            <Menu/>
        </HeaderWrapper>
        </div>
    )
}
