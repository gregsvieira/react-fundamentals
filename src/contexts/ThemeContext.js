import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    
    let theme = 'dark';
    let rendered = 0;

    try {
      theme = JSON.parse(localStorage.getItem('theme'))
    } catch (error) {
      console.log(error);
    }
    
    this.state = {
      theme,
      rendered,
    };
  }

  // Using to monitor the value change after render
  componentDidUpdate(prevProps, prevState) {
    // comparing to know if value changed
    if (prevState.theme !== this.state.theme){
      localStorage.setItem('theme', JSON.stringify(this.state.theme))
      console.log('theme changed');
    }
  }

  handleToggleTheme = () => {
        this.setState(prevState => ({
          theme: prevState.theme === 'dark' ? 'light' : 'dark'
        }))
      }

  reRender = () => {
    this.setState((prevState) => ({
      rendered: prevState.rendered + 1,
    }));
  };

  render() {
    console.log(`Rendered`);
   

    return (
        <ThemeContext.Provider 
          value={{ 
            theme: this.state.theme,
            handleToggleTheme: this.handleToggleTheme,
          }}
        >
          <button onClick={this.reRender}>Rendered: {this.state.rendered}</button>
          {this.props.children}
        </ThemeContext.Provider>
      )
  }
}

// export function ThemeProvider({children}) {
//   const [theme, setTheme] = useState('dark');

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
//   }  
//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }
