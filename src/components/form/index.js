import { useSelector } from "react-redux";
import TextField from "../formFields/textField";
import NumberField from "../formFields/numberField";
import CheckboxField from "../formFields/checkboxField";
import RadioButtons from "../formFields/radioButton";
import TextArea from "../formFields/textArea";

const fieldMap = {
  text: TextField,
  number: NumberField,
  checkbox: CheckboxField,
  radioButton: RadioButtons,
  textArea: TextArea,
};

const CustomForm = () => {
  const formFields = useSelector((state) => state.formCreator.inputs);
  return (
    <div>
      <h2>Form Preview</h2>
      <form onSubmit={handleSubmit} className="outputForm">
        {formFields.map((field) => {
          const Field = fieldMap[field.type];
          if (Field) {
            return <Field {...field} />;
          }
          return <></>;
        })}
      </form>
    </div>
  );
};

export default CustomForm;
