import React, {useState} from "react";
import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'
import PressType from "./keypad/PressType"
import KeyPress from "./keypad/KeyPress";

function Calculator(props) {
  const [screenValue, setScreenValue] = useState(399491)

  function onKeyPress(keyPress){
    if (keyPress.pressCategory === PressType.DIGIT){
      setScreenValue("#Digit");
    }else if (keyPress.pressCategory === PressType.OPERAND){
      setScreenValue("#Operand");
    }else{
      if (keyPress === KeyPress.DELETE){
        setScreenValue("#Delete");
      }else if (keyPress === KeyPress.EQUAL){
        setScreenValue("#Equal")
      }else if (keyPress === KeyPress.DOT){
        setScreenValue("#Dot")
      }else if (keyPress === KeyPress.RESET){
        setScreenValue("#Reset")
      }else{
        setScreenValue("#Missing")
      }
    }
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
