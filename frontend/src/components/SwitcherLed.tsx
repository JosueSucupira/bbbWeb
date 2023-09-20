import {Switch} from "antd";
import React, {useState} from "react";
import Led from "./Led";

function SwitcherLed({name} : Led){
  const [isStatus, setStatus] = useState(false);

  const buttonHandler = () => {
    if(isStatus){
      console.log(`deactivating button for the sensor ${name}`)
    } else {
      console.log(`activate button for the sensor ${name}`)
    }
    setStatus((status) => !status);
  };

  return (
    <div style={{display: "flex", alignItems:"center", justifyContent:"space-around"}}>
      <p>Led {name}</p>
      <Switch onChange={buttonHandler} checked={isStatus}></Switch>
    </div>
  )
}

export default SwitcherLed