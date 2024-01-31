import React, { useState } from "react";

const NumberField = ({ label, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <label>
      {label}:&nbsp;
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value.replace(/\D/g, ""))}
      ></input>
    </label>
  );
};

export default NumberField;
