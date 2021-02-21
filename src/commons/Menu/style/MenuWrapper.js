import Styled from 'styled-components'

const MenuWrapper = Styled.nav`
    background-color:whitesmoke;
    border-radius: 25px 25px 0 0;
    width:100vw;
    padding:25px;
    position:fixed;
    display:flex;
    top:0;
    z-index:-3;
   
ul{
    justify-content: space-around;
    display:flex;
    

}
li{
    list-style: none;
    padding:25px;
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
}`;