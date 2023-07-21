import React, { Suspense, lazy } from 'react';

const PostsList = lazy(()=> import('../PostList'))

import Header from '../Header';

import Footer from '../Footer';
import Form from '../Form';

export default function Layout({onToggleTheme, selectedTheme}) {

    return (
        <>
            <Header 
                onToggleTheme={onToggleTheme}
                selectedTheme={selectedTheme}
            />
            <Form />
            <Suspense fallback={<p>Loading ...</p>}>
                <PostsList />
            </Suspense>
            <Footer 
                onToggleTheme={onToggleTheme}
                selectedTheme={selectedTheme}
            />
        </>
    );
}