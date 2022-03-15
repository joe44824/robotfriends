// Why are we using React if we are not using it? If you remove it, you get it error
// So that program will understand JSX

import React from "react";

const Card = ({ name, email, id }) => {
  // This is called destructuring as well. THe property names are variables
  // const { name, email, id } = props;
  // Alt way is to destructure it in parameter { name, email, id }
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
      {/* For string interpolation, do not use "", use `` */}
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
