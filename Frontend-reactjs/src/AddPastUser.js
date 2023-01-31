import React from "react";
import "./Adduser.css";

import { useForm } from "react-hook-form";
import PastuserService from "./service/PastuserService";

export default function AddPastUser() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    PastuserService
      .addPastUsers(data)
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
    <div className="addpastuser">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>User-To-Past User Form</h1>
        <div>
          <label>
            User No : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="userno"
             {...register("userno", { required:true})}
            />
               {/* {errors.userNo && <p>Please enter number for userNo.</p>} */}
          </label>
        </div>
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
        
        </div>
        <br />
        {/*               
                <input type="submit" value="submit" style={{borderRadius:8}}/> */}
        <button className="puser" style={{ borderRadius: 8 }}>Submit</button>
      </form>
    </div>
  );
}
