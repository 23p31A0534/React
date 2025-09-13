
import React,{Component} from "react";
import Profile from "./assets/react.svg";








const Card =()=>{
    return( 
      <div className="parent">
        
            <img className="img" src={Profile} alt="Profile" />
            <h2 className="title">Sai Lahari</h2>
            <p className="para">I am studying B.TECH and i was always ready to learn new things</p>
        

      </div>

        
    )
}
export default Card;