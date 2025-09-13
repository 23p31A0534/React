import React,{Component} from "react";
import "./Updatedform.css";

const UpdatedForm = ()=>{

    const Respond = (data) =>{
        console.log(data)
    }

    return(
        <>
         
        <center>
            <h1>Student Details</h1>
        <div className="parent" >
           
        <form action="">
        <label ><input type="text" />p</label>
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="Enter your email"/><br /><br />
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder="Enter phone number"/><br /><br />
        <label htmlFor="">DOB:</label>
        <input type="date" placeholder="DOB"/><br /><br />
        <label htmlFor="">Gender</label>
        <input type="radio" />Male
        <input type="radio" />Female
        <input type="radio" />Other <br /><br />

        </form>
        </div>
        </center>

        </>
    )
}
export default UpdatedForm;