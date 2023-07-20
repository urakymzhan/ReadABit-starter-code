import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        minHeight: "200px",
      }}
      className="card text-white bg-dark mb-3 mt-3 p-5 text-center"
    >
      {children}
    </div>
  );
}

export default Card;
