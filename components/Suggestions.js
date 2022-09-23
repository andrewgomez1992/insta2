/* eslint-disable @next/next/no-img-element */
import React, { useState, useLayoutEffect } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  console.log(faker);

  useLayoutEffect((_) => {
    let i = 0;
    setSuggestions([]);
    while (i < 5) {
      setSuggestions((prev, i) => [
        ...prev,
        {
          id: i,
          username: faker.internet.userName(),
          avatar: faker.image.avatar(),
          companyName: faker.company.companyName(),
        },
      ]);
      i++;
    }
  }, []);

  return (
    <div className="mt-4 ml-10 border-2 p-4 rounded-md border-[#3c36e9a3] shadow-md shadow-[#3c36e9a3]">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((el) => (
        <div key={el.id} className="flex items-center justify-between">
          <img
            src={el.avatar}
            width="40px"
            height="40px"
            alt={el.name}
            className="rounded-full  mt-3 border-[#3c36e9a3] border-2 object-contain
          cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{el.username}</h2>
            <h3 className="text-xs text-gray-400">Works at {el.companyName}</h3>
          </div>

          <button className="text-[#3c36e9a3] text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
