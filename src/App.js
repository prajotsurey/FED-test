import CustomForm from "./components/form";
import FormCreator from "./components/formCreator";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormCreator />
        <CustomForm />
      </div>
    </Provider>
  );
}

export default App;
