import React, { useState, useEffect } from "react";
import "./Pastuser.css";
import ProfitService from "./service/ProfitService";

export default function ViewProfit() {

  const [profit, setProfit] = useState([]);

  const getData = async () => {
    const response = await ProfitService.getProfit();
    setProfit(response.data);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);


  const renderBody = () => {

    return profit.map((pro) => {
  
return(
      <tr>
        <td>{pro.id}</td>
        <td>{pro.date}</td>
        <td>{pro.income}</td>
        <td>{pro.expense}</td>
        <td>{pro.profit}</td>
     
       
      </tr>);
    });
  };
 
  return (
    <div className="pastuser">
      <h1>Monthly Profit Register</h1>

      <table className="past">
        <thead>
          <tr>
          <th className="pth">No</th>
            <th className="pth">Month and Year</th>
            <th className="pth">Income</th>
            <th className="pth"> Expense</th>
            <th className="pth">Profit</th>
          </tr>
        </thead>
        <tbody>
        {renderBody()}
        </tbody>
      </table>
    </div>
  );
}
