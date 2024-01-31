import React, { useState } from "react";

const CheckboxField = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label>
      {label}:&nbsp;
      <input
        name="name"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></input>
    </label>
  );
};

export default CheckboxField;
