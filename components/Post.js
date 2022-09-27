/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../firebase"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import Image from "next/image";
import drewselfie from "../assets/drewselfie.png";

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession()
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    })
  }


  return (
    <div className="bg-white my-7 border-2 rounded-md shadow-[#434343a3] shadow-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <div className="p-1 mr-3">
          <img
            src={userImg}
            alt=""
            className="rounded-full"
            width="48px"
            height="48px"
          />
        </div>
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img src={img} alt="Loading..." className="w-full object-cover" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>

          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0"
            placeholder="Add a comment..."
          />
          <button 
          type='submit'
          disabled={!comment.trim()} 
          onClick={sendComment} 
          className="font-semibold text-[#2aba53]">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
