import styled from 'styled-components'
import Capa from '../Capa';
import Logo from '../Logo';
import Menu from '../Menu';

const HeaderWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:whitesmoke;
    border-radius:50px;
`;

export default function Header(){
    return(
        <HeaderWrapper>
            <Logo/>
            <Menu/>
        </HeaderWrapper>
    )
}
