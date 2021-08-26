import React, {useState} from "react";
import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'

function Calculator(props) {
  const [screenValue, setScreenValue] = useState(399491)

  function onKeyPress(newValue){
    setScreenValue(newValue);
  }
  

  return (
    <div id="calculator">
      <Header></Header>
      <Screen value={screenValue}></Screen>
      <Keypad onKeyPress={onKeyPress}></Keypad>
    </div>
  );
}

export default Calculator;
