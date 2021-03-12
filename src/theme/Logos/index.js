import styled from 'styled-components';
import { GithubIcon,TwitterIcon, LinkedinbIcon,EmailIcon } from './svg'


const Logos =styled.ul`
   list-style: none;
   display: flex;
   align-items: center;;
   width:100%;
   justify-content: space-around;
  }
  li{
    margin-top: 5px;
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