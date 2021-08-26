import KeyPress from "./KeyPress";

function Keypad(props) {
    function keyPressEvent(e, value){
        return props.onKeyPress(value)
    }

    return(
        <div id="keypad" class="flex-grid shadowed">
            <div id="keypad-row-1" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.SEVEN)}>7</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.EIGHT)}>8</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.NINE)}>9</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.DELETE)}class="emphasized-key">DEL</button>
            </div>
            <div id="keypad-row-2" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.FOUR)}>4</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.FIVE)}>5</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.SIX)}>6</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.PLUS)}>+</button>
            </div>
            <div id="keypad-row-3" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.ONE)}>1</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.TWO)}>2</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.THREE)}>3</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.MINUS)}>-</button>
            </div>
            <div id="keypad-row-4" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.DOT)}>.</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.ZERO)}>0</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.DIVIDE)}>/</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.MULTIPLY)}>x</button>
            </div>
            <div id="keypad-row-5" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.RESET)} class="emphasized-key">RESET</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.EQUAL)} class="strong-key">=</button>
            </div>
      </div>
    );
}

export default Keypad;