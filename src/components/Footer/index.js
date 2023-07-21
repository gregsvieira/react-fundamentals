import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext';


export default function Footer({onToggleTheme, selectedTheme}) {
    // const [handleToggleTheme, theme] = useContext(ThemeContext);

    return (
        <Container>
            <span>TaskListener. All rights reserved.</span>
            <button 
                type="button" 
                onClick={onToggleTheme}>
                {selectedTheme === 'dark' ? '🌚' : '🌞'}
            </button>
        </Container>
    )
}