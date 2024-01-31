import React, { useState } from "react";

const TextArea = ({ label, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <label>
      {label}:&nbsp;
      <textarea
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </label>
  );
};

export default TextArea;
