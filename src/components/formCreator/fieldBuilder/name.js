import { useDispatch } from "react-redux";
import { updateInputName } from "../../../slices/formCreatorSlice";

const FieldName = ({ name, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInputName({ id, name: e.target.value }));
  };

  return (
    <label>
      Name:
      <input value={name} onChange={handleChange}></input>
    </label>
  );
};

export { FieldName };
