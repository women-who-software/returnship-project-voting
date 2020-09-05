import React, { useState } from 'react';

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <div className="Status">
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}