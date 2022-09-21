import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
    const [suggestions, setSuggestions] = useState();

  //   const fakerTest = faker;
  //   console.log(fakerTest)

  //   const randomImage = faker.image.avatar();
  //   const randomName = faker.name.firstName();
  //   const random = `${randomImage} ${randomName}`;
  //   console.log(random);

    // useEffect(() => {
    //   const suggestions = [...Array(20)].map((_, i) => ({
    //     ...productArr,
    //     id: i,
    //   }));

    //   setSuggestions(suggestions);
    // }, []);

  const dataLength = 20;

  const productArr = [...Array(dataLength)] 
    .map((_, i) => ({
      name: faker.name.firstName(),
      image: faker.image.avatar(),
      id: i
    }));

  console.log(productArr);

  return (
    <div className="">
      {productArr.map((profile) => (
        <Story key={profile.id} img={profile.name} username={profile.image}/>
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
