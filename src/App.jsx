import React, { useState } from "react";
import Post from "./Composants/Post";
import "./App.css";

const App = () => {
  const [post, setPost] = useState([
    {
      title: "My rocket",
      content: "Look, I built a new rocket",
      author: "Elon Musk",
      likes: 0,
      loves: 0,
      hate: 0,
    },
  ]);

  const addLike = (index) => {
    const updatedPosts = [...post];
    updatedPosts[index].likes += 1;
    setPost(updatedPosts);
  };

  const addLoves = (index) => {
    const updatedPosts = [...post];
    updatedPosts[index].loves += 1;
    setPost(updatedPosts);
  };

  const addHate = (index) => {
    const updatedPosts = [...post];
    updatedPosts[index].hate += 1;
    setPost(updatedPosts);
  };

  return (
    <div className="renderContainer">
      {post.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
          likes={post.likes}
          addLike={() => addLike(index)}
          loves={post.loves}
          addLoves={() => addLoves(index)}
          hate={post.hate}
          addHate={() => addHate(index)}
        />
      ))}
    </div>
  );
};

export default App;
