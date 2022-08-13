import React from "react";
import "./Header.css";
import phone from "./mobile.jpg";

const Header = () => {
   return (
      <div className="header">
         <img src={phone} alt="" />
         <p>Get Facebok for Android and browse faster</p>
      </div>
   );
};

export default Header;
