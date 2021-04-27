import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, id, checked = false, onChange }) => {
  return (
    <div className="ui__checkbox">
      <input
        type="checkbox"
        htmlFor={id}
        name={name}
        id={id}
        checked={checked}
        value={id}
        onChange={onChange}
      />
      <label id={id} htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  type: "text",
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Checkbox };
