import './Calculator.css'
import Header from './header/Header'
import Screen from './screen/Screen'
import Keypad from'./keypad/Keypad'

function Calculator(props) {
  return (
    <div id="calculator">
      <Header></Header>
      <Screen value="399,491"></Screen>
      <Keypad></Keypad>
    </div>
  );
}

export default Calculator;
