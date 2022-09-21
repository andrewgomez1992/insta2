/* eslint-disable @next/next/no-img-element */
import { faker } from "@faker-js/faker";
import { useEffect, useState, useLayoutEffect } from "react";
import Story from "./Story";

const Stories = () => {
  // const [suggestions, setSuggestions] = useState();

  //   const fakerTest = faker;
  //   console.log(fakerTest)

  //   const randomImage = faker.image.avatar();
  //   const randomName = faker.name.firstName();
  //   const random = `${randomImage} ${randomName}`;
  //   console.log(random);

  // useEffect(() => {
  //     const suggestions = [...Array(dataLength)]
  //     .map((_, i) => ({
  //       name: faker.name.firstName(),
  //       image: faker.image.avatar(),
  //       id: i
  //     }));

  //   setSuggestions(suggestions);
  // }, []);

  // const dataLength = 20;

  // const productArr = [...Array(dataLength)].map((_, i) => ({
  //   name: faker.name.firstName(),
  //   image: faker.internet.avatar(),
  //   id: i,
  // }));

  // const [suggestions, setSuggestions] = useState([]);
  // useEffect(() => {
  //   const suggestions = [...Array(20)].map((_, i) => ({
  //     id: i,
  //     username: faker.internet.userName(),
  //     avatar: faker.image.avatar(),
  //   }));
  //   setSuggestions(suggestions);
  // }, []);

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
      className="flex soace-x-2 p-6 bg-white mt-8
     border-gray-200 border rounded-sm overflow-x-scroll"
    >
      {list.map((el) => (
        <div key={el.id}>
          <img src={el.avatar} width="40px" height="40px" alt={el.name} 
          className='rounded-full p-[1.5px] border-purple-500 border-2 object-contain
        cursor-pointer' />
          <p className="text-xs w-14 truncate text-center">{el.username}</p>
          <hr/>
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
