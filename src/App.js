import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

let date = new Date()
const hours = date.getHours()
let mode
if (hours >= 6 && hours <= 20) {
    mode = "light"
}
else {
    mode = "dark"
}


export default function App(){
    return (
        <div>
            <Navbar 
                mode = {mode}
            />
            <Content
                mode = {mode}    
            />
        </div>
        
    )
}