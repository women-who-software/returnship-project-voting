import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, handleClick, label, width, img, disabled }) => {
  return (
    <div
      className="ui__button"
      type={type}
      width={width}
      onClick={handleClick}
      disabled={disabled}
    >
      {img}
      {label}
    </div>
  );
};

Button.defaultProps = {
  type: "",
  label: "",
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
