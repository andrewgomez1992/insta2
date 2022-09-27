/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import Image from "next/image";
import drewselfie from "../assets/drewselfie.png";

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border-2 rounded-md shadow-[#434343a3] shadow-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <div className="p-1 mr-3">
          <Image
            src={drewselfie}
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
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>

        <BookmarkIcon className="btn"/>
      </div>
      {/* caption */}
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input 
        type="text" 
        className="border-none flex-1 focus:ring-0"
        placeholder="Add a comment..."
        />
        <button className="font-semibold text-[#2aba53]">Post</button>
      </form>
    </div>
  );
};

export default Post;
