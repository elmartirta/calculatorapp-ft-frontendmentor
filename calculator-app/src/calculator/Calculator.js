import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'

function Calculator() {
  return (
    <div id="calculator">
      <Header></Header>
      <Screen></Screen>
      <Keypad></Keypad>
    </div>
  );
}

export default Calculator;
