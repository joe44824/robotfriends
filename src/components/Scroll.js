import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "900px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
