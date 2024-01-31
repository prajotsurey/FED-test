import { useDispatch, useSelector } from "react-redux";
import { addInput } from "../../slices/formCreatorSlice";
import { FieldType, FieldLabel } from "./fieldBuilder";
import { FieldPlaceholder } from "./fieldBuilder/placeholder";
import { FieldName } from "./fieldBuilder/name";
import { RadioOptions } from "./fieldBuilder/radioOptions";

const FormCreator = () => {
  const inputs = useSelector((state) => state.formCreator.inputs);
  const dispatch = useDispatch();

  const addInputField = () => {
    dispatch(addInput());
  };

  return (
    <div>
      <h2>Form Creator</h2>
      <div className="fieldsContainer">
        {inputs.map(
          ({ id, type, label, name, radioOptions, placeholder }, index) => (
            <div key={id} className="fieldWrapper">
              Field: {index + 1}
              <FieldType type={type} id={id} />
              {type ? (
                <>
                  <FieldName name={name} id={id} />
                  {type !== "radioButton" ? (
                    <FieldLabel label={label} id={id} />
                  ) : (
                    <></>
                  )}
                  {type !== "checkbox" && type !== "radioButton" ? (
                    <FieldPlaceholder placeholder={placeholder} id={id} />
                  ) : (
                    <></>
                  )}
                  {type === "radioButton" ? (
                    <RadioOptions options={radioOptions} id={id} />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
          )
        )}
        <button onClick={addInputField}>Add Field</button>
      </div>
    </div>
  );
};

export default FormCreator;
