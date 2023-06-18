import React from "react";
import Post from './Post';
import Header from './Header';

const posts = [
  { title: 'Title#01', subtitle: 'Subtitle#01', likes: 20 },
  { title: 'Title#02', subtitle: 'Subtitle#02', likes: 30 },
  { title: 'Title#03', subtitle: 'Subtitle#03', likes: 50 },
];


function App() {
  return (
    <>
      <Header 
      
      subtitle="Deploy s of weeek">
      <h3>{'Current Number:' + Math.random() * 100}</h3>
      </Header>

      <hr />

      {posts.map(post => (
      <h1 key={1} >{post.title}</h1>,
      <h2 key={2}>{post.subtitle}</h2>,
      <h3 key={3}>{post.likes}</h3>
      ))}

    </>
  );
}

export default App;