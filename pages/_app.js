import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *{
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background-image: url("../images/background-azul.gif");
    background-size: auto;
    font-family: 'Ubuntu Mono', monospace;
    color: whitesmoke;
    
    min-width: 100%;
    max-width: 100vw;
}

@media (min-width: 400px) {
    body {
      font-size: 18px;
  }
}
  @media (min-width: 600px) {
    body {
      font-size: 22px;
      overflow:
    }
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head> 
        <title>Vinipena - Portifólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="https://kit.fontawesome.com/123d96df60.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Shadows+Into+Light+Two&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
