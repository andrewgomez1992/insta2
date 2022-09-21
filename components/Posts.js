import React from "react";
import Post from "./Post";
import drewselfie from "../assets/drewselfie.png";

const posts = [
  {
    id: "1",
    username: "_drewgomez_",
    userImg: { drewselfie },
    img: { drewselfie },
    caption: "This is crazy! We need more footage!",
  },
  {
    id: "2",
    username: "_drewgomez_",
    userImg: { drewselfie },
    img: { drewselfie },
    caption: "This is crazy! We need more footage!",
  },
  {
    id: "3",
    username: "_drewgomez_",
    userImg: { drewselfie },
    img: { drewselfie },
    caption: "This is crazy! We need more footage!",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
