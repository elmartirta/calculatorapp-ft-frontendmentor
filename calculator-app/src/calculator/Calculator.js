import React, {useState} from "react";
import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'
import KeyPress from "./keypad/KeyPress";


function Calculator(props) {
  const [activeValue, setActiveValue] = useState([0])
  const [cachedValue, setCachedValue] = useState([0])
  const [operand, setOperand] = useState(KeyPress.EMPTY);
  const [willCache, setWillCache] = useState(false)
  const [prevState, setPrevState] = useState(KeyPress.EMPTY)
  const [canDelete, setCanDelete] = useState(true)

  function pushDigit(arr, keyPress){
    if (willCache){
      setWillCache(false)
      setCachedValue(activeValue)
    }
    const newarr = (willCache) ? [0] : arr.slice() 
    if (newarr.length === 1 && newarr[0] === 0) {newarr.pop()}
    newarr.push(KeyPress.toNum(keyPress))
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

  function toNum(digitArray){
    return Number(digitArray.join(""))
  }

  function toDigitArray(number){
    return String(number).split("");
  }

  function performArithmetic(operand, object, actor){
    switch(operand){
      case KeyPress.PLUS:
        return toDigitArray(toNum(object) + toNum(actor))
      case KeyPress.MINUS:
        return toDigitArray(toNum(object) - toNum(actor))
      case KeyPress.MULTIPLY:
        return toDigitArray(toNum(object) * toNum(actor))
      case KeyPress.DIVIDE:
        return toDigitArray(toNum(object) / toNum(actor))
      default:
        return actor
    }
  }

  function onKeyPress(keyPress){
    switch(keyPress){
      case KeyPress.DELETE: 
        processDelete(keyPress);
        break;
      case KeyPress.EQUAL: 
        processEqual(keyPress); 
        break;
      case KeyPress.DOT: 
        processDot(keyPress); 
        break;
      case KeyPress.RESET: 
        processReset(keyPress); 
        break;
      default:
        if (KeyPress.isDigit(keyPress)) {
          processDigit(keyPress);
        } else if (KeyPress.isOperand(keyPress)){
          processOperand(keyPress)
        } else {
          setActiveValue(["#Missing"])
        }
      break;
    }
    setPrevState(keyPress)
  }

  function processDelete(keyPress){
    if (canDelete){
      setActiveValue((n) => popDigit(n))
    }
    setWillCache(false)
  }

  function processEqual(keyPress){
    const a = activeValue;  
    if (!(prevState === KeyPress.EQUAL)) {
      setActiveValue((a) => performArithmetic(operand, cachedValue, activeValue))
      setCachedValue(a)
    }else{
      setActiveValue((a) => performArithmetic(operand, activeValue, cachedValue))
    }
    setWillCache(true)
    setCanDelete(false);
  }

  function processDot(){
    if (canDelete){
      setActiveValue((n) => pushDot(n))
    }
    setWillCache(false)
  }

  function processReset(){
    setActiveValue([0])
    setCachedValue([0])
    setOperand(KeyPress.EMPTY)
  }

  function processDigit(keyPress){
    setActiveValue((n) => pushDigit(n, keyPress))
    setCanDelete(true);
  }

  function processOperand(keyPress){
    setWillCache(true)
    if (!(
        KeyPress.isOperand(prevState) ||
        prevState === KeyPress.EQUAL ||
        prevState === KeyPress.DOT
      )){
      setActiveValue((a) => performArithmetic(operand, cachedValue, a))
    }
    setOperand(keyPress)
    setCachedValue([0])
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
