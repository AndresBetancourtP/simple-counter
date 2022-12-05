//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Layout from "./Layout.jsx"

let vari = 0;

setInterval(()=>{
    //render your react application
    ReactDOM.render(<Layout incr={vari} />, document.querySelector("#app"));
    vari ++;
    
},1000);
