/* eslint-disable @next/next/no-img-element */
import { faker } from "@faker-js/faker";
import { useState, useLayoutEffect } from "react";

const Stories = () => {

  const [list, setList] = useState([]);

  useLayoutEffect((_) => {
    let i = 0;
    setList([]);
    while (i < 20) {
      setList((prev, i) => [
        ...prev,
        {
          id: i,
          username: faker.internet.userName(),
          avatar: faker.image.avatar(),
        },
      ]);
      i++;
    }
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8
     border-gray-200 border-2 rounded-md overflow-x-scroll
     scrollbar-thin scrollbar-thumb-black shadow-md shadow-[#434343a3]"
    >
      {list.map((el) => (
        <div key={el.id}>
          <img src={el.avatar} width="40px" height="40px" alt={el.name} 
          className='rounded-full p-[1.5px] border-[#3c36e9a3] border-2 object-contain
        cursor-pointer hover:scale-110 transition transform duration-200 ease-out' />
          <p className="text-xs w-14 truncate text-center">{el.username}</p>
        </div>
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
};

export default Stories;
