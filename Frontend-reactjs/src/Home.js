import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";


export default function Home() {
  const history =useHistory();
 const Adduser = () => {
   history.push("./adduser");
 }
 const Motor = () => {
  history.push("./motor");
}
const Property = () => {
  history.push("./property");
}
const Life = () => {
  history.push("./life");
}
const Pastuser = () => {
  history.push("./past");
}
const AddPastuser = () => {
  history.push("./addPastUser");
}
const AddProfit = () => {
  history.push("./addProfit");
}
const ViewProfit = () => {
  history.push("./getProfit");
}
  return (
  
    <div className="Home">
      <div className="topic">Dil_Key Insurance Company</div>
      <ul className="list">
        <div>
          <a onClick={Adduser}>Add User</a>
        </div>
        <div>
          <a onClick={AddPastuser}>Add User To Past User</a>
        </div>
        <div>
          <a onClick={AddProfit}>Add Monthly Profit</a>
        </div>
        <div>
          <a onClick={Life}>Life Insurance</a>
        </div>
        <div>
          <a onClick={Property}>Property Insurance</a>
        </div>
        <div>
          <a onClick={Motor}>Motor Insurance</a>
        </div>
        <div>
          <a onClick={Pastuser}>View Past User</a>
        </div>
        <div>
          <a onClick={ViewProfit}>View Profit</a>
        </div>

      </ul>
    </div>
  );
}
