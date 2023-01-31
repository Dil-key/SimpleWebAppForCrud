import React, { useState, useEffect } from "react";
import "./Pastuser.css";
import PastuserService from "./service/PastuserService";

export default function Pastuser() {

  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await PastuserService.getAllPastUsers();
    setUsers(response.data);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);


  const renderBody = () => {

    return users.map((user) => {
  
return(
      <tr>
        <td>{user.userno}</td>
        <td>{user.name}</td>
        <td>{user.address}</td>
        <td>{user.type}</td>
        <td>{user.total}</td>
     
       
      </tr>);
    });
  };
 
  return (
    <div className="pastuser">
      <h1>Past Users</h1>

      <table className="past">
        <thead>
          <tr>
            <th className="pasth">User No</th>
            <th className="pasth">Name</th>
            <th className="pasth">Address</th>
            <th className="pasth"> Insurance Type</th>
            <th className="pasth">Insurance Value</th>
          </tr>
        </thead>
        <tbody>
        {renderBody()}
        </tbody>
      </table>
    </div>
  );
}
