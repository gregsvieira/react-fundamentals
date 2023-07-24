import React, { Suspense, lazy } from 'react';

const PostsList = lazy(()=> import('../PostList'))

import Header from '../Header';

import Footer from '../Footer';
import Form from '../Form';

export default class Layout extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        // executed before component leave render
        // this example permit show that handleScroll don't execute when component don't appears
        console.log('The component will be disassembled')
        document.removeEventListener('scroll', this.handleScroll)
      }

    handleScroll = () => {
        console.log('Scrolled')
    }

    render() {
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
}

// export default function Layout() {

//     return (
//         <>
//             {/* {undefined.map(item =>item )} */}
//             {/* forcing an error */}
//             <Header />
//             <Form />
//             <Suspense fallback={<p>Loading ...</p>}>
//                 <PostsList />
//             </Suspense>
//             <Footer />
//         </>
//     );
// }