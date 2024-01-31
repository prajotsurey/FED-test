import { createSlice } from "@reduxjs/toolkit";

const createId = (inputs) => {
  if (inputs.length === 0) {
    return 0;
  } else {
    return inputs[inputs.length - 1].id + 1;
  }
};

export const formCreatorSlice = createSlice({
  name: "formCreator",
  initialState: {
    inputs: [],
  },
  reducers: {
    addInput: (state) => {
      state.inputs = [
        ...state.inputs,
        {
          id: createId(state.inputs),
          type: "",
          label: "",
          name: "",
          placeholder: "",
          constraints: [],
        },
      ];
    },
    updateInputType: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return {
            ...input,
            placeholder: "",
            constraints: [],
            ...(action.payload.type === "dropDown"
              ? {
                  options: [{}],
                }
              : {}),
            type: action.payload.type,
          };
        } else {
          return input;
        }
      });
    },
    updateInputName: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return { ...input, name: action.payload.name };
        } else {
          return input;
        }
      });
    },
    updateInputLabel: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return { ...input, label: action.payload.label };
        } else {
          return input;
        }
      });
    },
    updatePlaceholder: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return { ...input, placeholder: action.payload.placeholder };
        } else {
          return input;
        }
      });
    },
    // updateOptionText: (state, action) => {
    //   state.inputs = state.inputs.map((input) => {
    //     if (input.id === action.payload.id) {
    //       return {
    //         ...input,
    //         options: input.options.map((option, id) => {
    //           if (id === action.payload.id) {
    //           }
    //           return option;
    //         }),
    //       };
    //     } else {
    //       return input;
    //     }
    //   });
    // },
    // addConstraints: (state,action) => {
    //   state.inputs = state.inputs.map((input) => {
    //     if (input.id === action.payload.id) {
    //       return { ...input, constraints };
    //     } else {
    //       return input;
    //     }
    //   });
    // }
    addRadioButtonOption: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return {
            ...input,
            radioOptions: [
              ...(input.radioOptions ? input.radioOptions : []),
              { label: "", value: "", id: createId(input.radioOptions || []) },
            ],
          };
        } else {
          return input;
        }
      });
    },
    updateRadioButtonOptionLabel: (state, action) => {
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return {
            ...input,
            radioOptions: input.radioOptions.map((option) => {
              if (option.id === action.payload.optionId) {
                return { ...option, label: action.payload.label };
              }
              return option;
            }),
          };
        } else {
          return input;
        }
      });
    },
    updateRadioButtonOptionValue: (state, action) => {
      console.log(action.payload);
      state.inputs = state.inputs.map((input) => {
        if (input.id === action.payload.id) {
          return {
            ...input,
            radioOptions: input.radioOptions.map((option) => {
              if (option.id === action.payload.optionId) {
                return { ...option, value: action.payload.value };
              }
              return option;
            }),
          };
        } else {
          return input;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addInput,
  updateInputType,
  updateInputLabel,
  updatePlaceholder,
  updateInputName,
  addRadioButtonOption,
  updateRadioButtonOptionLabel,
  updateRadioButtonOptionValue,
} = formCreatorSlice.actions;

export default formCreatorSlice.reducer;
