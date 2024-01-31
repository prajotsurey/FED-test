import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Options = ({ options, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch();
  };
  return (
    <>
      {options.map((option, index) => (
        <input value={option.text} onChange={handleChange}></input>
      ))}
      <button>Add Option</button>
    </>
  );
};

export { Options };
