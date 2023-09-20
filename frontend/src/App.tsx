import React, { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import {Switch, Card} from "antd";
import SwitcherLed from "./components/SwitcherLed";
import styled from "styled-components";
import {Box} from "./style";

function App() {
  const [message, setMessage] = useState("");
  //const [button, setButton] = React.useState(null)
  const baseUrl = "http://localhost:8000/"

  //
  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  // useEffect(() => {
  //   axios.get(baseUrl).then((response) => {
  //     setButton(true)
  //   })
  // })

  function execCommand(){
    console.log("calling function!")
    axios.get(baseUrl + "execCommand").then((response) => {
      console.log("doing request!")
    })
  }

  return (
    <Box>
      <Card title="Beagle Bone (Control Center)" bordered={false} style={{ width: 300 }}>
        <SwitcherLed name={"x"}></SwitcherLed>
        <SwitcherLed name={"y"}></SwitcherLed>
        <SwitcherLed name={"z"}></SwitcherLed>
      </Card>
    </Box>
  );
}

export default App
