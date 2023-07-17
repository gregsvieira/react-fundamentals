import React, { useEffect, useState, useMemo, createContext, useRef, Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import themes from './styles/themes/index.js';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout';


export const AppContext = createContext();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      theme: 'dark',
    }
  }

  render() {

    const { theme } = this.state;
    return (
          <AppContext.Provider 
            value={[()=> {
            this.setState( prevState => ({theme: prevState.theme === 'dark' ? 'light' : 'dark'}))
          }, theme]}>
            <ThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </ThemeProvider>
          </AppContext.Provider>
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
