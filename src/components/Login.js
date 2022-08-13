import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
   const [name, setname] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = (event) => {
      event.preventDefault();
      axios
         .post("http://localhost:5000/api/user/signup", {
            name,
            password,
         })
         .then((res) => console.log(res))
         .catch((err) => console.log(err));
   };

   return (
      <div className="container maiDiv">
         <div className="left">
            <img
               src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
               alt=""
            />
            <h4>
               Facebook helps you connect and share with the people in your
               life.
            </h4>
         </div>
         <div className="right">
            <div className="formbox">
               <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="form-control"
                  onChange={(e) => setname(e)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => setPassword(e)}
               />
               <button
                  className="btn btn-primary loginBtn"
                  onClick={handleLogin}
               >
                  Log In
               </button>
               <p className="text-primary text-center mt-3">
                  Forgotten password?
               </p>
               <hr />
               <button className="createBtn">Create New Account</button>
            </div>
            <p className="mt-4 text-center">
               {" "}
               <b> Create a Page</b> for a celebrity, brand or business.
            </p>
         </div>
      </div>
   );
};

export default Login;
