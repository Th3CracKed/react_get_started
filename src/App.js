import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// declared component
const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
// inject it into the dom, root div
render(<App />, document.getElementById("root"));
