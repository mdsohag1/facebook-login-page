import React from "react";
import "./Deshboard.css";

const Deshboard = () => {
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
                  <tr>
                     <th scope="row">1</th>
                     <td>test@gnail.com</td>
                     <td>Otto124545</td>
                  </tr>
                  <tr>
                     <th scope="row">1</th>
                     <td>test@gnail.com</td>
                     <td>Otto45412</td>
                  </tr>
                  <tr>
                     <th scope="row">1</th>
                     <td>test@gnail.com</td>
                     <td>Otto121454</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Deshboard;
