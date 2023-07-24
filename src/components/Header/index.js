import React, { Component, useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default class Header extends Component {
  render(){

    return (
      <ThemeContext.Consumer>
        {({theme, handleToggleTheme})=> (
          <Container>
          <h1>TaskListener</h1>
          <button 
            type="button" 
            onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌚' : '🌞'}
          </button>
        </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}