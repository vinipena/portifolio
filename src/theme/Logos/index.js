import Styled from 'styled-components';
import { GithubIcon,TwitterIcon, LinkedinbIcon,EmailIcon } from './svg'


const Logos =Styled.ul`
   list-style: none;
   padding: 25px;
    
@media (min-width: 300px){
 
    display: grid;
    grid-template-columns:  150px ;
    align-items: center;
    justify-content: center;
    
  }
  @media (min-width: 700px){
    display: grid;
    grid-template-columns: repeat(4 , 200px );
    align-items: center;
    justify-content: center;
  }
  a{
	  text-decoration: none;
 
  }

`;

export function LogoList(){
    return(
        <Logos>
            <li><a 
                  href='https://github.com/vinipena'
                  target='_blank'
                >
                  <GithubIcon/>
                </a>
            </li>
            <li><a 
                  href='https://www.linkedin.com/in/viniciuspena/'
                  target='_blank'
                >
                  <LinkedinbIcon/>
                </a>
            </li>
			<li>
	              <a target="_blank" href="https://twitter.com/Qpenavini">    
                  	<TwitterIcon/>
                  </a>
            </li>
            <li>
				<a 
                  href='mailto:vacpena@gmail.com'
                >
                  <EmailIcon/>
                </a>
            </li>
        </Logos>

    )
} 