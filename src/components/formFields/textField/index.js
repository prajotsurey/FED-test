import React, { useState } from "react";

const TextField = ({ label, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <label>
      {label}:&nbsp;
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </label>
  );
};

export default TextField;
