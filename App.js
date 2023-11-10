import React from "react";
import ReactDOM from "react-dom/client";

const number = 1000;
//React element

const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React Using JSX
  </h1>
);

// React Element
const ele = <span>React element</span>
const title = (
  <h1 className="head" tabIndex="5">
    {ele}                               
  </h1>       
)

// React Functional element
const ImageCompoent =() =>(
    // <h4 id="heading">This is image tag</h4>
    <img src="pexels-pixabay-268533.jpg" alt="nature" width="500" height="600"/>
)

const InputComponent = () => (
   <input type="text"/>
)

const LinkComponent = () => {
 return <a href="https://www.w3schools.com"> Visit School </a>
}

//component composition
const HeadingCompoenet = () => (
    <div id="container">     
      {title}                                                               
      <h2>{console.log("iowiuiwdhuhdsjdbshsb")}</h2>
       <h1>{ 1000 }</h1>
        <ImageCompoent/>
        <InputComponent/> 
        <LinkComponent/>
        <h1 className="heading">Namaste React Using Functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompoenet/>);
