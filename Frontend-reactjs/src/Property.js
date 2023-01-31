import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Life.css";
import UserService from "./service/UserService";

export default function Property() {
  const history =useHistory();
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await UserService.getUserProperty();
    setUsers(response.data);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

 
  const renderBody = () => {

    return users.map((user) => {
      const onDelete = () => {
        UserService.deleteUser(user.userNo)
          .then((res) => {
            alert("Are you sure want to delete this user!");
            window.location.reload();
          })
          .catch((error) => {
            alert("Try again!");
          });
      };

      const onUpdate = () => {
        history.push('/updateUserForm/'+`${user.userNo}`)
       }

return(
      <tr>
        <td>{user.userNo}</td>
        <td>{user.name}</td>
        <td>{user.address}</td>
        <td>{user.type}</td>
        <td>{user.total}</td>
        <td>{user.current}</td>
        <td><button className="update" onClick={onUpdate}>Update</button></td>
        <td>
          <button className="delete" onClick={onDelete}>
          Delete
          </button>
        </td>
      </tr>);
    });
  };
 


  return (
    <div className="property">
      <h1>Property Insurance</h1>

      <table>
        <thead>
          <tr>
            <th>User No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Insurance Type</th>
            <th>Insurance Value</th>
            <th>Current Total Amount</th>
            <th>Update Details</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
}
