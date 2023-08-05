import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Nav } from './styles';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

export default function Layout() {

    return (
        <BrowserRouter>
            <Header />
                <Nav>
                    <Link to="/"> Home </Link>
                    <Link to="/posts"> Posts </Link>
                    <Link to="/posts/12313"> Last Post </Link>
                    <Link to="/publish"> Publish </Link>
                </Nav>

            <Routes />
            {/* <Footer /> */}
        </BrowserRouter>
    );
}