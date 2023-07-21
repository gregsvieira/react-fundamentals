import React, { Suspense, lazy } from 'react';

const PostsList = lazy(()=> import('../PostList'))

import Header from '../Header';

import Footer from '../Footer';
import Form from '../Form';

export default function Layout() {

    return (
        <>
            <Header />
            <Form />
            <Suspense fallback={<p>Loading ...</p>}>
                <PostsList />
            </Suspense>
            <Footer />
        </>
    );
}