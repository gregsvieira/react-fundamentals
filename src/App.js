import React, { useEffect, useState, useMemo, createContext, useRef } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import themes from './styles/themes/index.js';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';


export const AppContext = createContext();

class App extends React.Component { 
  render() {
    return (
          <ThemeProvider>
            <ThemeContext.Consumer>

              {({ theme })=> (
                <StyledThemeProvider theme={themes[theme] || themes.dark}>
                  <GlobalStyle />
                  <Layout />
                </StyledThemeProvider>
              )}

            </ThemeContext.Consumer>
          </ThemeProvider>
        );
  }
}

// function App() {

//   const [theme, setTheme] = useLocalStorage('dark');
//   const firstRender = useRef(true);

//   const currentTheme = useMemo(()=> {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark'
//     ? 'light'
//     : 'dark')
//   }

//   // Don't allow useEffect executed on first render
//   useEffect(()=> {
//     if(firstRender.current) {
//       firstRender.current = false
//       return;
//     }
//     console.log({theme});
//   }, [theme]);

//   useEffect(()=> {
//     function handleClick() {
//       console.log('Clicked')
//     }

//     document.addEventListener('click', handleClick)

//     return () => document.removeEventListener('click', handleClick)
//   }, [])

//   return (
//     <AppContext.Provider value={[handleToggleTheme, theme]}>
//       <ThemeProvider theme={currentTheme}>
//         <GlobalStyle />
//         <Layout />
//       </ThemeProvider>
//     </AppContext.Provider>
//   );
// };

export default App;
