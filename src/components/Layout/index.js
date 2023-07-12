import React from 'react';

import Header from '../Header';
import PostsList from '../PostList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {
    return (
        <>
            <Header 
                onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
            <PostsList />
            <Footer 
                onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
        </>
    );
}