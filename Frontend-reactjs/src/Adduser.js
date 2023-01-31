import React from "react";
import "./Adduser.css";

import { useForm } from "react-hook-form";
import UserService from "./service/UserService";

export default function Adduser() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    UserService
      .addUser(data)
      .then((res) => {
        alert("Successfully Added!");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <div className="adduser">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>User Registration Form</h1>
        {/* <div>
          <label>
            User No : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="userNo"
             {...register("userNo", { required:true})}
            />
               {errors.userNo && <p>Please enter number for userNo.</p>}
          </label>
        </div> */}
        <br />
        <div>
          <label>
            Name : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="name"
              {...register("name", { required:true})}
            />
            {/* {errors.name && <p style={{ color: "red" }}>This is required!</p>} */}
          </label>
        </div>
        <br />
        <div>
          <label>
            Address : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="address"
              {...register("address", { required:true})}
            />
            {/* {errors.address && (
              <p style={{ color: "red" }}>This is required!</p>
            )} */}
          </label>
        </div>
        <br />
        <div>
          <label>Insurance Type : :</label>
          <select
            defaultValue="Select Insurance Type"
            style={{ borderRadius: 8 }}
            name="type"
            {...register("type", { required:true})}
          >
            <option>Select Insurance Type </option>
            <option>Life Insurance</option>
            <option>Property Insurance</option>
            <option>Motor Insurance</option>
          </select>
        </div>
        <br />
        <div>
          <label>
            Insurance Value : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="total"
              {...register("total", { required:true})}
            />
            {/* {errors.total && <p style={{ color: "red" }}>This is required!</p>} */}
          </label>
        </div>
        <br />
        <div>
          <label>
            Current Amount : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="current"
              {...register("current", { required:true})}
            />
            {/* {errors.current && (
              <p style={{ color: "red" }}>This is required!</p>
            )} */}
          </label>
        </div>
        <br />
        {/*               
                <input type="submit" value="submit" style={{borderRadius:8}}/> */}
        <button style={{ borderRadius: 8 }}>Submit</button>
      </form>
    </div>
  );
}
