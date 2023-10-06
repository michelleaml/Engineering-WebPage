import React, { Component } from "react";
import image from "../assets/images/expoIng.png";

class EXPOIng extends Component {
  render() {
   return (
        <div className="masthead" style={{
          // width:'1650px',
          // height:'950px',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${image})`}}>

            <div className="color-overlay d-flex 
            justify-content-center align-items-center">

            </div>
        </div>

    );
  }
}

export default EXPOIng;

