import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

import { AppContext } from '../../App';

export default function Header() {
  const [handleToggleTheme, theme] = useContext(AppContext);

  const history = useHistory();

  function handleNavigate(){
    history.push('/')
  }

  return (
    <Container>
      <h1>TaskListener</h1>
      <button onClick={handleNavigate} style={{ color: '#fff'}}>Return to home page</button>
      <button 
        type="button" 
        onClick={handleToggleTheme}>
          {theme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  );
}