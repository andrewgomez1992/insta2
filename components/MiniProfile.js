/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import drewselfie from "../assets/drewselfie.png";

const MiniProfile = () => {
  const { data: session } = useSession();

  console.log(session)

  return (
    <div
      className="flex items-center justify-between 
    mt-14 ml-10 border-2 border-[#3c36e9a3] rounded-md p-3
    shadow-md shadow-[#3c36e9a3]"
    >
      <div className="p-[2px]">
        <img
          src={session?.user?.image}
          alt=""
          className="rounded-full"
          width="64px"
          height="64px"
        />
      </div>

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button onClick={signOut}
      className="text-[#3c36e9a3] text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
