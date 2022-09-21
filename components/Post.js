/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from
"@heroicons/react/solid"

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div>
      <h1>Post</h1>

      {/* Header */}
      <div>
        <img src="" alt="" />
        <p>{username}</p>
      </div>
      {/* img */}

      {/* buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}


    </div>
  )
}

export default Post;