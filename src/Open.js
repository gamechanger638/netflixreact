import React from "react";




function Open(props){
    return( 
    < >
   
      
      <div className="cards">
  <div className="card">
    <img src={props.imgsrc}  alt ="my pic" className="card_img"/>
     <div className = "card_info">
    <span className="card_category"> {props.tittle} </span>
    <h3 className="card_tittle">{props.sname}</h3>
    <a href= {props.link} target="_blank"><button className = "button" >watch now</button></a>
    

    </div>
</div>

</div>
  
 </ >
    )
  
  
    
  }
  export default Open;
