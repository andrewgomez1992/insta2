/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react"
import { addDoc, collection, onSnapshot, query, serverTimestamp, orderBy, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption, userImage }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState([]);

  useEffect(() =>
    onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      snapshot => setComments(snapshot.docs)
    ), [db, id]);

  useEffect(() => (
    onSnapshot(
      collection(db, 'posts', id, 'likes'),
      snapshot => setLikes(snapshot.docs)
    )
  ), [db]);

  useEffect(() =>
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    ), [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

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
            {hasLiked ? (
              <HeartIconFilled onClick={likePost} className="text-red-500 btn" />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}

        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className="scrollbar-thumb-black scrollbar-rounded ml-10 h-20 overflow-y-scroll scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImg}
                className="h-7 rounded-full"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 btn" />
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
