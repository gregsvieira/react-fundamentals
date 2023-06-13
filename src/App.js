import React from "react";
import Post from './Post';

function App() {
  return (
    <>
      <h1>Lauching App 🚀</h1>
      <h2>Deploys of weeek</h2>
      <h3>
        Current Number: {Math.random() * 100}
      </h3>

      <hr />

      <Post
        post={{
          title: 'Title 01',
          subtitle: 'Subtitle 01'
        }}
      />

      <Post
        post={{
          title: 'Title 02',
          subtitle: 'Subtitle 02'
        }}
      />

      <Post
        post={{
          title: 'Title 03',
          subtitle: 'Subtitle 03'
        }}
      />
    </>
  );
}

export default App;