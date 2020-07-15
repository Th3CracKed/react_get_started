import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// declared component
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Cita", animal: "Cat", breed: "Classic" }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "eagle",
    }),
  ]);
};
// inject it into the dom, root div
render(React.createElement(App), document.getElementById("root"));
