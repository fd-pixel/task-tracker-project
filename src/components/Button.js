import React from "react";

const Button = ({ color, text, toggleShow }) => {
  return (
    <div>
      <button
        onClick={toggleShow}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
