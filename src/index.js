import React from 'react';
import ReactDOM from 'react-dom';
 import Open from "./Open.js";
 import Sdata from "./Sdata.js" ;
 import "./index.css";

 
 

ReactDOM.render(
  < >  
 
  <h1 className ="heading_style">list of 5 netflix series</h1>
        { Sdata.map((cvalue) =>{
         return (  <Open imgsrc =  {cvalue.imgsrc}
          sname= {  cvalue.sname}
          tittle= {cvalue.tittle}
          link= {cvalue.link}
  />)

       }
       )}

   </ >,
  document.getElementById("root")
);



