import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = React.createElement("h1", { id: "heading" }, "Hello shital");

//React element Using Jsx
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React Foundation
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
