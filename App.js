import React from "react";
import ReactDOM from "react-dom/client";

const number = 1000;
//React element

const Title =() => (
  <h1 className="head" tabIndex="1">
    Namaste React Using JSX
  </h1>
); 

// React Functional element 
//component composition
const HeadingCompoenet = () => (
    <div id="container">     
      {Title()}                                                               
        <Title></Title>
        <Title/>
        <h1 className="heading">Namaste React Using Functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompoenet/>);
