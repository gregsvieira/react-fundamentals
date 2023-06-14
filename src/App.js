import React from "react";
import Post from './Post';
import Header from './Header';


function App() {
  return (
    <>
      <Header 
        title="Lauching App 🚀"
        subtitle="Deploys of weeek"
        info={'Current Number:' + Math.random() * 100}
      />

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