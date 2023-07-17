import React, { useEffect, useState, useMemo, createContext, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import themes from './styles/themes/index.js';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout';


export const AppContext = createContext();

class App extends React.Component {
  state = {
    theme: 'dark',
  }

// Using arrow function inherits the "this" from the parents
  handleToggleTheme = () => {
    console.log('handleTogleTheme executed');

    // Method that force a execution of render without needs a modification of props or states
    this.forceUpdate();
    // this.setState((prevState) => ({
    //   theme: prevState.theme === 'dark' ? 'light' : 'dark'}))
  }

  render() {

    const { theme } = this.state;

    console.log('<App /> rendered');
    return (
          <AppContext.Provider 
            value={[this.handleToggleTheme]}>
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
