import React, {useState} from "react";
import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'
import PressType from "./keypad/PressType"
import KeyPress from "./keypad/KeyPress";


function Calculator(props) {
  const [activeValue, setActiveValue] = useState([0])
  const [cachedValue, setCachedValue] = useState([0])
  const [operand, setOperand] = useState(KeyPress.EMPTY.name);
  const [isPrimed, setIsPrimed] = useState(false)
  const [prevState, setPrevState] = useState(KeyPress.EMPTY.name)

  function pushDigit(arr, keyPress){
    if (isPrimed){
      setIsPrimed(false)
      setCachedValue(activeValue)
    }
    const newarr = (isPrimed) ? [0] : arr.slice() 
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

  function toNum(digitArray){
    return Number(digitArray.join(""))
  }

  function toDigitArray(number){
    return String(number).split("");
  }

  function performArithmetic(operand, object, actor){
    console.log(operand)
    switch(operand){
      case KeyPress.PLUS.name:
        return toDigitArray(toNum(object) + toNum(actor))
      case KeyPress.MINUS.name:
        return toDigitArray(toNum(object) - toNum(actor))
      case KeyPress.MULTIPLY.name:
        return toDigitArray(toNum(object) * toNum(actor))
      case KeyPress.DIVIDE.name:
        return toDigitArray(toNum(object) / toNum(actor))
      default:
        return actor
    }
  }

  function onKeyPress(keyPress){
    switch(keyPress){
      case KeyPress.DELETE:
        if (!(
          prevState === KeyPress.ONE.name ||
          prevState === KeyPress.TWO.name ||
          prevState === KeyPress.THREE.name ||
          prevState === KeyPress.FOUR.name ||
          prevState === KeyPress.FIVE.name ||
          prevState === KeyPress.SIX.name ||
          prevState === KeyPress.SEVEN.name ||
          prevState === KeyPress.EIGHT.name ||
          prevState === KeyPress.NINE.name ||
          prevState === KeyPress.ZERO.name ||
          prevState === KeyPress.DOT.name ||
          prevState === KeyPress.DELETE.name
        )) return;
        setActiveValue((n) => popDigit(n))
        break;
      case KeyPress.EQUAL: 
        const a = activeValue;  
        if (!(prevState === KeyPress.EQUAL.name)) {
          setActiveValue((a) => performArithmetic(operand, cachedValue, activeValue))
          setCachedValue(a)
        }else{
          setActiveValue((a) => performArithmetic(operand, activeValue, cachedValue))
        }
        setIsPrimed(true)
        break;
      case KeyPress.DOT:
        setActiveValue((n) => pushDot(n))
        break;
      case KeyPress.RESET:
        setActiveValue([0])
        setCachedValue([0])
        setOperand(KeyPress.EMPTY.name)
        break;
      default:
        switch (keyPress.pressCategory){
          case PressType.DIGIT:
            setActiveValue((n) => pushDigit(n, keyPress))
            break;
          case PressType.OPERAND:
            setIsPrimed(true)
            if (
                prevState !== KeyPress.EQUAL.name &&
                prevState !== KeyPress.PLUS.name &&
                prevState !== KeyPress.MINUS.name &&
                prevState !== KeyPress.MULTIPLY.name &&
                prevState !== KeyPress.DIVIDE.name
              ){
              console.log(prevState)
              setActiveValue((a) => performArithmetic(operand, cachedValue, a))
            }
            setOperand(keyPress.name)
            setCachedValue([0])
            break;
          default:
            setActiveValue(["#Missing"])
            break;
        }
      break;
    }
    setPrevState(keyPress.name)
  }
  
  return (
    <div id="calculator">
      <Header></Header>
      <Screen value={activeValue.join("")}></Screen>
      <Screen value={cachedValue.join("")}></Screen>
      <Screen value={operand}></Screen>
      <Keypad onKeyPress={onKeyPress}></Keypad>
    </div>
  );
}

export default Calculator;
