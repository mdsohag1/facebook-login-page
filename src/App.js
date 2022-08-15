import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Deshboard from "./components/Deshboard/Deshboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import AdminLogin from "./components/AdminLogin/AdminLogin";

export const LoginContext = createContext();
function App() {
   const [loggedinUser, setLoggedinUser] = useState({});
   return (
      <div className="App">
         <LoginContext.Provider value={[loggedinUser, setLoggedinUser]}>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/admin/hacker/login" element={<AdminLogin />} />
                  <Route
                     path="/hackers/1020"
                     element={
                        <PrivateRoute>
                           <Deshboard />
                        </PrivateRoute>
                     }
                  />
               </Routes>
            </BrowserRouter>
         </LoginContext.Provider>
      </div>
   );
}

export default App;
