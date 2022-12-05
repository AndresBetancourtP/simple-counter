import React from "react";
import Counter from "./component/Counter.jsx";


const Layout = (props)=>{

    let initial = props.incr;

    let six = Math.floor(initial/100000)
    let five = Math.floor(initial/10000)
    let four = Math.floor(initial/1000)
    let three = Math.floor(initial/100)
    let two= Math.floor(initial/10)
    let one = Math.floor(initial/1)

    return(
        <Counter digiOne={one} digiTwo={two} digiThree={three} digiFour={four} digiFive={five} digiSix={six}/>
    );
}

export default Layout;