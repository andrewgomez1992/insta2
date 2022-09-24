import React, { useEffect, useState } from "react";
import Post from "./Post";
import drewselfie from "../assets/drewselfie.png";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const posts = [
  {
    id: "1",
    username: "_drewgomez_",
    userImg: { drewselfie },
    img: { drewselfie },
    caption: "Fresh haircut :)",
  },
  {
    id: "2",
    username: "_drewgomez_",
    userImg: { drewselfie },
    img: { drewselfie },
    caption: "Fresh haircut :)",
  },
  {
    id: "3",
    username: "_drewgomez_",
    userImg: { drewselfie },
    img: { drewselfie },
    caption: "Fresh haircut :)",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
      setPosts(snapshot.docs);
    })

    return () => {
      unsubscribe();
    }
  }, [])

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
