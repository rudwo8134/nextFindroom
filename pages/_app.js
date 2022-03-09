import Head from 'next/head';
import react, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Wrapper from '../src/Nav/Wrapper';
import { Theme, GlobalStyles } from '../styles/globalStyles';


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <GlobalStyles theme={Theme} />
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
