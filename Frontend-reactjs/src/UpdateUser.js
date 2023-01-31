import React, {useState,useEffect} from "react";
import "./Adduser.css";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import UserService from "./service/UserService";

export default function UpdateUser() {
  const { register, handleSubmit, errors } = useForm();

  const { userNo } = useParams();
  const [user, setUser] = useState();
 
 

const getUserDetail = async () => {
  const user = await UserService.getOneUser(userNo);
  setUser(user.data);
};

useEffect(() => {
  getUserDetail();
}, []);

const onchange = (data) => {
  console.log(JSON.stringify(data));
    UserService
      .updateUser(userNo,data)
      .then((res) => {
        alert("Successfully Updated!");
     
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  

};

  return (
    <div className="adduser">
      <form onSubmit={handleSubmit(onchange)}>
        <h1>User Update Form</h1>
        <div>
          <label>
            User No : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="userNo"
             value={user?.userNo}
             {...register("userNo", { required:true})}
            />
              
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
              defaultValue={user?.name}
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
              defaultValue={user?.address}
              {...register("address", { required:true})}
            />
            {/* {errors.address && (
              <p style={{ color: "red" }}>This is required!</p>
            )} */}
          </label>
        </div>
        <br />
        <div>
          <label>Insurance Type : :
          <input
            style={{ borderRadius: 8 }}
            name="type"
           value={user?.type}
           {...register("type", { required:true})}
          />
            </label>
        </div>
        <br />
        <div>
          <label>
            Total Amount : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="total"
              defaultValue={user?.total}
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
              defaultValue={user?.current}
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
        <button style={{ borderRadius: 8 }}>Update</button>
      </form>
    </div>
  );
}
