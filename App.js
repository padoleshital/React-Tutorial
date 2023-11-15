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

// We use Destructuring While using props
const Restaurentcard = (props) =>{
  const {resData} = props;
  return(
    <div className="rest-card" style={styleCard}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.icloudinaryImageId}/>      
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>Rating {resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} Min</h4>
    </div>
  )
}

const resObj=    {
  info: {
    id: "74453",
    name: "Domino's Pizza",
    cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    locality: "Sheetal Shopping Square",
    areaName: "Athwa",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    avgRating: 4,
    veg: true,
    feeDetails: {
      restaurantId: "74453",
      fees: [
        {
          "name": "BASE_DISTANCE",
          "fee": 1900
        },
        {
          "name": "BASE_TIME"
        },
        {
          "name": "ANCILLARY_SURGE_FEE"
        }
      ],
      totalFee: 1900
    },
    parentId: "2456",
    avgRatingString: "4.0",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 25,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2023-11-16 01:00:00",
      opened: true
    },
    badges: {
      imageBadges: [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        textBased: {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-sheetal-shopping-square-athwa-surat-74453",
    "type": "WEBLINK"
  }
}


const Body = () =>{
  return (
    <div className="body">
      <div className="search">
        <label>Search</label>
        <input type="text"/>
      </div>
      <div className="res-container">
        <Restaurentcard resData ={resObj}/>
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
