import React from "react";
import Post from './Post';
import Header from './Header';


function App() {
  return (
    <>
      <Header title="Lauching App 🚀" subtitle="Deploys of weeek">
      <h3>{'Current Number:' + Math.random() * 100}</h3>
      </Header>

      <hr />

      <Post
        likes={2}
        post={{
          title: 'Title 01',
          subtitle: 'Subtitle 01'
        }}
      />

      <Post
        likes={15}
        post={{
          title: 'Title 02',
          subtitle: 'Subtitle 02'
        }}
      />

      <Post
      likes={50}
        post={{
          title: 'Title 03',
          subtitle: 'Subtitle 03'
        }}
      />
    </>
  );
}

export default App;