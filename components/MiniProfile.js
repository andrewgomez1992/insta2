/* eslint-disable @next/next/no-img-element */
import React from 'react'
import drewselfie from "../assets/drewselfie.png";
import Image from "next/image";

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <div className='p-[2px]'>
      <Image
            src={drewselfie}
            alt=""
            className="rounded-full"
            width="64px"
            height="64px"
          />
      </div>

      <div>
        <h2 className='font-bold'>_drewgomez_</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button className='text-[#3c36e9a3] text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile