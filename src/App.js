import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
// declared component
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
// inject it into the dom, root div
render(<App />, document.getElementById("root"));
