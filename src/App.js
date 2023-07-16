import React, { useEffect, useState, useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import themes from './styles/themes/index.js';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout';


export const AppContext = createContext();

function App() {

  const [theme, setTheme] = useLocalStorage('dark');

  const currentTheme = useMemo(()=> {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark'
    ? 'light'
    : 'dark')
  }

  return (
    <AppContext.Provider value={[handleToggleTheme, theme]}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
