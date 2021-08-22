import logo from './logo.svg';
import './App.css';
import './calculator.css'

function App() {
  return (
    <div id="calculator">
      <div id="header">
        <h1 id="logo">calc</h1>
        <div id="theme-selector">
          <label id="theme-label">THEME</label>
          <div id="theme-toggle" class="flex-grid">
            <div id="theme-indicators" class="flex-row">
              <label for="theme-1-button">1</label><br/>
              <label for="theme-2-button">2</label><br/>
              <label for="theme-3-button">3</label>
            </div>
            <div id="theme-switch" class="flex-row">
              <input type="radio" id="theme-1-button" name="background-theme" value="1"/>
              <input type="radio" id="theme-2-button" name="background-theme" value="2"/>
              <input type="radio" id="theme-3-button" name="background-theme" value="3"/>
            </div>
          </div>
        </div>
      </div>
      <div id="screen" class="shadowed">
        <p id="screen-value">399,981</p>
      </div>
      <div id="keypad" class="flex-grid shadowed">
        <div id="keypad-row-1" class= "flex-row noselect">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="emphasized-key">DEL</button>
        </div>
        <div id="keypad-row-2" class= "flex-row noselect">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div id="keypad-row-3" class= "flex-row noselect">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div id="keypad-row-4" class= "flex-row noselect">
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
        </div>
        <div id="keypad-row-5" class= "flex-row noselect">
          <button class="emphasized-key">RESET</button>
          <button class="strong-key">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
