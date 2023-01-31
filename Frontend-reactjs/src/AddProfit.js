import { useForm } from "react-hook-form";
import ProfitService from "./service/ProfitService";

export default function AddProfit() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    ProfitService
      .addProfit(data)
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
    <div className="addprofit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Profit Registration Form</h1>
        <div>
          <label>
            No : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="id"
             {...register("id", { required:true})}
            />
            
          </label>
        </div>
        <br />
        <div>
          <label>
            Month and Year : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="date"
              {...register("date", { required:true})}
            />
     
          </label>
        </div>
        <br />
        <div>
          <label>
            Income : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="income"
              {...register("income", { required:true})}
            />
        
          </label>
        </div>
        <br />
        <div>
          <label>
            Expense : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="expense"
              {...register("expense", { required:true})}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Profit : :
            <input
              type="text"
              style={{ borderRadius: 8 }}
              name="profit"
              {...register("profit", { required:true})}
            />
          </label>
        </div>
        <div>
        
        </div>
        <br />
      <br/>
        <button className="pro" style={{ borderRadius: 8 }}>Submit</button>
      </form>
    </div>
  );
}
