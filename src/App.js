import React, { useState } from "react";
import Post from './Post';
import Header from './Header';

// const posts = ;


function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 30 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 50 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Subtitle#04', likes: 25 },
  ]);

  function handleRefreshClean(){
    setPosts(() => []);
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
          id: Math.random(),
          title: `Title#${posts.length + 1}`,
          subtitle: `Subitle#${posts.length + 1}`,
          likes: Math.random().toFixed(2) * 100
        }
    ]);
  }
  return (
    <>
      <Header 
      
      subtitle="Deploy s of weeek">
      <h3>
        {`Current Number: ${posts.length}`}
      </h3>
      <br/>
      <button onClick={handleRefresh}> Atualizar </button>
      <button onClick={handleRefreshClean}> Limpar </button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}

    </>
  );
}

export default App;