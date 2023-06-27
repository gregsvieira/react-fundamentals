import React, { useState, createContext } from "react";
import Post from './Post';
import Header from './Header';
import { ThemeProvider, ThemeContext  } from "./ThemeContext";
import styles from './App.css'



function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 20, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 30, read: true },
    { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 50, read: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Subtitle#04', likes: 25, read: true },
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
          likes: Math.random().toFixed(2) * 100,
          read: false,
        }
    ]);
  }

  function handleRemovePost(postId){
    setPosts((prevState)=> (
      prevState.filter(post => post.id !== postId)
      ))
  }

  function handleMarkAsReadAndUnmarkAsUnread(postId){
    setPosts((prevState)=> (
      prevState.map((post) => {
       if(post.id === postId) { 
         return { 
           ...post, 
           read: post.read === true ? false : true,
         }
       }
       return post;
      })
    ))
  }

  return (
    <ThemeProvider>
      <Header>
      <h2 className={styles.title}>Deploy s of weeek</h2>

      <h3>
        {`Current Number: ${posts.length}`}
      </h3>
      <br/>
      <button onClick={handleRefresh}> Refresh </button>
      <button onClick={handleRefreshClean}> Clean </button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          onRead={handleMarkAsReadAndUnmarkAsUnread}
          post={post}
        />
      ))}

    </ThemeProvider>
  );
}

export default App;