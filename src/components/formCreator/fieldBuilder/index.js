import { useDispatch } from "react-redux";
import {
  updateInputLabel,
  updateInputType,
} from "../../../slices/formCreatorSlice";

const FieldType = ({ type, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInputType({ id, type: e.target.value }));
  };

  return (
    <select value={type} onChange={handleChange} className="fieldType">
      <option value="">Select Field Type</option>
      <option value="text">Text</option>
      <option value="number">Number</option>
      <option value="textArea">TextArea</option>
      <option value="checkbox">Checkbox</option>
      <option value="radioButton">Radio Button</option>
    </select>
  );
};

const FieldLabel = ({ label, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInputLabel({ id, label: e.target.value }));
  };

  return (
    <label>
      Label:
      <input type="text" value={label} onChange={handleChange}></input>
    </label>
  );
};

export { FieldType, FieldLabel };
