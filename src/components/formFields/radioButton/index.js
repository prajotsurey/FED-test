import React, { useState } from "react";

const RadioButtons = ({ name, label, radioOptions: options = [] }) => {
  const [value, setValue] = useState(null);

  const onOptionChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <label>
          {option.label}:&nbsp;
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onOptionChange}
          ></input>
        </label>
      ))}
    </>
  );
};

export default RadioButtons;
