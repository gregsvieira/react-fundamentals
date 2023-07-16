import React from 'react';

import Header from '../Header';
import PostsList from '../PostList';
import Footer from '../Footer';
import Form from '../Form';

export default function Layout() {
    return (
        <>
            <Header />
            <Form />
            <PostsList />
            <Footer />
        </>
    );
}