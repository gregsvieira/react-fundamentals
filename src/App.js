import React, { useEffect, useState, useMemo, createContext, useRef } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import themes from './styles/themes/index.js';
import useLocalStorage from './hooks/useLocalStorage';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';


export const AppContext = createContext();

class App extends React.Component { 
  state = {
    changed: false
  }

  componentDidMount() {
    // Here we can call api's etc
    // Same effect of useEffect(()=> {}, []); executed just one time when componenent is mounted
    console.log('componentDidMount executed')
  }

  componentDidUpdate(prevProps,prevState) {
    // to monitor if some variable value is changed
    // executed just after method render and just if we have a change of props or state
    console.log('componentDidUpdate ',{
      currentState: this.state,
      prevState,
      prevProps,
    })
  }

  componentDidCatch(error, info) {
    // whenever an error occurs with some children components, this component will be called 
    console.log('componentDidCatch: ',{ error, info })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // executed right before method rendering and only if we have a props or state change. the opposite of componentDidUpdate
    console.log('shouldComponentUpdate ', {
      currentState: this.state,
      nextState,
      nextProps,
    })

    return true; // if want don't render can set false, and component don't update on render
  }

  render() {
    console.log('rendered')
    // Here is same effect of useEffect(()=>{}); executed all time that componenent is rendered
    return (
          <ThemeProvider>
            <button onClick={()=> this.setState({changed: true})}>
              Change State
            </button>
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
