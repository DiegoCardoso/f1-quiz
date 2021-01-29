import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import db from '../api/db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }
  #__next {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key="title" />
        <meta property="og:description" content={db.description} key="description" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <Component {...pageProps} />
            <Footer />
          </QuizContainer>
          <GitHubCorner projectUrl="https://github.com/DiegoCardoso/f1-quiz" />
        </QuizBackground>
      </ThemeProvider>
    </>
  );
}
