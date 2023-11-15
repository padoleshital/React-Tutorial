import React from "react";
import ReactDOM from "react-dom/client";

/*
*
* Header
*   -Logo
*   - NavItem
* Body
*   -cardcontainer
        card image
        Desccription
        rating
* Footer
*   links
*   address
*/
const Header = () => {
  return(
    <div className="header">      
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg&ga=GA1.1.707907593.1699969692&semt=ais"/>
      </div>
      <div className="nav-items">
      <ul>
        <li><a className="one">Home</a></li>
        <li><a className="two">About Us</a></li>
        <li><a className="three">Contact Us</a></li>
        <li><a className="four">Cart</a></li>
        <hr/>
      </ul>
      
      </div>
    </div>
    
  )
}
// inline css
const styleCard ={
  backgroundColor:"#f0f0f0"
}

const Restaurentcard = () =>{
  return(
    <div className="rest-card" style={styleCard}>
      <img src="https://t4.ftcdn.net/jpg/04/90/19/23/240_F_490192375_qg0In7Wbt4dh5zx18yEazvzPYydN2YOO.jpg"/>      
      <h3>Meghana Food</h3>
      <h4>North Indian Test</h4>
      <h4>4.4 Star</h4>
      <h4>38 Min</h4>
    </div>
  )
}



const Body = () =>{
  return (
    <div className="body">
      <div className="search">
        <label>Search</label>
        <input type="text"/>
      </div>
      <div className="res-container">
        <Restaurentcard/>
        <Restaurentcard/>
        <Restaurentcard/>
        <Restaurentcard/>
        <Restaurentcard/>
        <Restaurentcard/>
        <Restaurentcard/>  
        <Restaurentcard/>

      </div>
    </div>
  )
}

const Applayout = () =>
{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
