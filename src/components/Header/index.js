import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header({onToggleTheme, selectedTheme}) {
  // const [handleToggleTheme, theme] = useContext(ThemeContext);

  return (
    <Container>
      <h1>TaskListener</h1>
      <button 
        type="button" 
        onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌚' : '🌞'}
      </button>
    </Container>
  );
}