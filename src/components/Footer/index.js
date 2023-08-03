import React, { useContext } from 'react';

import { Container } from './styles';

import { AppContext } from '../../App';


export default function Footer() {
    const [handleToggleTheme, theme] = useContext(AppContext);

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