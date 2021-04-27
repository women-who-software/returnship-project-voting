import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, type, onChange, value, error, label, width }) => {
  return (
    <div className="ui__input">
      <label htmlFor={name} width={width}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error.error && <div className="ui__error">{error.message}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export { Input };
