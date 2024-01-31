import { useDispatch } from "react-redux";
import {
  addRadioButtonOption,
  updateRadioButtonOptionLabel,
  updateRadioButtonOptionValue,
} from "../../../slices/formCreatorSlice";

const RadioOptions = ({ options = [], id }) => {
  const dispatch = useDispatch();
  const addOption = () => {
    dispatch(addRadioButtonOption({ id }));
  };

  const updateOptionLabel = (e, optionId) => {
    dispatch(
      updateRadioButtonOptionLabel({
        id,
        optionId: optionId,
        label: e.target.value,
      })
    );
  };

  const updateOptionValue = (e, optionId) => {
    console.log(e.target.value, optionId);
    dispatch(
      updateRadioButtonOptionValue({
        id,
        optionId: optionId,
        value: e.target.value,
      })
    );
  };

  console.log(options);

  return (
    <>
      {options.map((option) => (
        <>
          <label>
            Option Label:
            <input
              type="text"
              value={option.label}
              onChange={(e) => updateOptionLabel(e, option.id)}
            />
          </label>
          <label>
            Option Value:
            <input
              type="text"
              value={option.value}
              onChange={(e) => updateOptionValue(e, option.id)}
            />
          </label>
        </>
      ))}
      <button onClick={addOption}>Add Option</button>
    </>
  );
};

export { RadioOptions };
