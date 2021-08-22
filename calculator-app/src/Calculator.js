import './Calculator.css'
import Header from './components/Header'
import Screen from './components/Screen'
import Keypad from'./components/Keypad'

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
