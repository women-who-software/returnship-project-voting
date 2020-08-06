import React from "react";

function Chevron(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <polygon points="0,53.333 106.667,160 213.333,53.333 		" />
    </svg>
  );
}

export default Chevron;
