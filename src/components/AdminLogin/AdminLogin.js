import React, { useContext, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

const AdminLogin = () => {
   const [loggedinUser, setLoggedinUser] = useContext(LoginContext);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const location = useLocation();
   const navigate = useNavigate();
   const redirectPath = location.state?.path || "/";

   const handleLogin = (event) => {
      event.preventDefault();
      axios
         .post("https://intense-springs-49451.herokuapp.com/api/admin/adminLogin", {
            email,
            password,
         })
         .then((res) => {
            setLoggedinUser(res.data);
            navigate(redirectPath);
         })
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
                  type="email"
                  placeholder="Email address or phone number"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button
                  className="btn btn-danger loginBtn"
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

export default AdminLogin;
