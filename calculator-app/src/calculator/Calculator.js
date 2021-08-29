import React, {useState} from "react";
import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'
import PressType from "./keypad/PressType"
import KeyPress from "./keypad/KeyPress";

function Calculator(props) {
  const [activeValue, setActiveValue] = useState([0])

  function pushDigit(arr, keyPress){
    const newarr = arr.slice()
    if (newarr.length === 1 && newarr[0] === 0) {newarr.pop()}
    newarr.push(keyPress.toNum())
    return newarr
  }

  function popDigit(arr){
    let newarr = arr.slice()
    newarr.pop()
    if (newarr.length === 0) {newarr = [0]}
    return newarr
  }

  function pushDot(arr){
    const newArr = arr.slice();
    const periodInArr = newArr.indexOf(".") !== -1
    if (!periodInArr) newArr.push(".") ;
    return newArr;
  }

  function onKeyPress(keyPress){
    if (keyPress.pressCategory === PressType.DIGIT){
      setActiveValue((n) => pushDigit(n, keyPress))
    }else if (keyPress.pressCategory === PressType.OPERAND){
      setActiveValue(["#Operand"]);
    }else{
      if (keyPress === KeyPress.DELETE){
        setActiveValue((n) => popDigit(n))
      }else if (keyPress === KeyPress.EQUAL){
        setActiveValue(["#Equal"])
      }else if (keyPress === KeyPress.DOT){
        setActiveValue((n) => pushDot(n))
      }else if (keyPress === KeyPress.RESET){
        setActiveValue(["#Reset"])
      }else{
        setActiveValue(["#Missing"])
      }
    }
  }
  
  return (
    <div id="calculator">
      <Header></Header>
      <Screen value={activeValue.join("")}></Screen>
      <Keypad onKeyPress={onKeyPress}></Keypad>
    </div>
  );
}

export default Calculator;
