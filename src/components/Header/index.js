import React, { useContext } from 'react';

import { Container } from './styles';

import { AppContext } from '../../App';

export default function Header() {
  const [handleToggleTheme, theme] = useContext(AppContext);

  return (
    <Container>
      <h1>TaskListener</h1>
      <button 
        type="button" 
        onClick={handleToggleTheme}>
          {theme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  );
}