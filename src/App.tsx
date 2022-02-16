import { features } from "process";
import React, { useState } from "react";
import "./App.css";
import { Feecalculate } from "./components/Feecalculate";
import { Input } from "./components/Input";
import { Timeinput } from "./components/Timeinput";

const App = () => {
  const [cartValue, setCartValue] = useState(0);
  const [distance, setDistance] = useState(0);
  const [item, setItem] = useState(0);
  const [date, setDate] = useState(new Date())


  return (
    <div className="App">
      <div className="card">
        <div className="title">
          <b>Delivery fee Calculator</b>
        </div>
        <hr />
        <div className="container">
          <Input
            name="Cart value"
            unit="&euro;"
            onRead={(e) => setCartValue(e)}
          />
          <Input
            name="Delivery distance"
            unit="m"
            onRead={(e) => setDistance(e)}
          />
          <Input name="Amount of Items" unit="" onRead={(e) => setItem(e)} />
          <Timeinput name="Time" timeRead={(e) => {
            setDate(e)
            console.log(e)
            }} />
          <Feecalculate 
            cartValue={cartValue}
            distance={distance}
            items={item}
            date={date}
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default App;
