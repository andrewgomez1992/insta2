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
    <div className='bg-white my-7 border rounded-md'>
      {/* Header */}
      <div className="flex items-center p-5">
        <div className='p-1 mr-3'>
        <Image
          src={drewselfie}
          alt=""
          className="rounded-full"
          width="48px"
          height="48px"
        />
        </div>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <Image src={drewselfie} alt="" className='object-cover w-full' />
      {/* buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
};

export default Post;
