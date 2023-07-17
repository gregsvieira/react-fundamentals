import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default class PostsList extends React.Component {
    render() {
        return (
            <Container>
                {posts.map((post)=> (
                    <Post 
                        key={post.id}
                        title={post.name}
                        description={post.description}
                    />
                ))}
            </Container>
        )
    };
}

// export default function PostsList() {
//     return (
//         <Container>
//             {posts.map((post)=> (
//                 <Post 
//                     key={post.id}
//                     title={post.name}
//                     description={post.description}
//                 />
//             ))}
//         </Container>
//     )
// }

