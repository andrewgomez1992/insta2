import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  //   const [suggestions, setSuggestions] = useState();

//   const randomName = faker;
//   console.log(randomName);

  const randomImage = faker.image.avatar();
  console.log(randomImage);
  const randomEmail = faker.internet.email();

  //   useEffect(() => {
  //     const suggestions = [...Array(20)].map((_, i) => ({

  //       id: i,
  //     }));

  //     setSuggestions(suggestions)
  //   }, []);

  return (
    <div>
      {/* {suggestions.map(profile => (
            <Story key={profile.id} img={profile.avatar} />
        ))} */}
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
