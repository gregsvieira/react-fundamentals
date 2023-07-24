import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext';


export default function Footer() {
    const { theme, handleToggleTheme } = useContext(ThemeContext);
    
    return (
        <Container>
            <span>TaskListener. All rights reserved.</span>
            <button 
                type="button" 
                onClick={handleToggleTheme}>
                {theme === 'dark' ? '🌚' : '🌞'}
            </button>
        </Container>
    )
}