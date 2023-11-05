
const heading = React.createElement("h1", 
{
    id:"heading",xyz:"abc"
} ,
'This is First React Application!');

console.log("Heading",heading)  //return object 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);