import { useDispatch } from "react-redux";
import { updatePlaceholder } from "../../../slices/formCreatorSlice";

const FieldPlaceholder = ({ placeholder, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updatePlaceholder({ id, placeholder: e.target.value }));
  };

  return (
    <label>
      Placeholder:
      <input value={placeholder} onChange={handleChange}></input>
    </label>
  );
};

export { FieldPlaceholder };
