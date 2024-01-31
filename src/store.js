import { configureStore } from "@reduxjs/toolkit";
import formCreatorReducer from "./slices/formCreatorSlice";

export default configureStore({
  reducer: {
    formCreator: formCreatorReducer,
  },
});
