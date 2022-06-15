import ReactDOM from "react-dom";
import SearchParams from "./components/SearchParams";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adopt Me</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
