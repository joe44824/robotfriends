import React from "react";
// You have to destructure it because it is not default exported
import Card from "./Card";

// robots is a property of props so you have to destructure like so { robots }

const CardList = ({ robots }) => {
  // Refer to comment below
  // When you are working with list, you need to give key id
  const cardComponent = robots.map((_, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;

// Arrow function
// map((element) => {
//   /* ... */
// });
// map((element, index) => {
//   /* ... */
// });
// map((element, index, array) => {
//   /* ... */
// });
