import KeyPress from "./KeyPress";

function Keypad(props) {
    function keyPressEvent(e, value){
        return props.onKeyPress(value)
    }

    return(
        <div id="keypad" className={"flex-grid shadowed "+props.theme}>
            <div className= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.SEVEN)}>7</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.EIGHT)}>8</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.NINE)}>9</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.DELETE)} className="emphasized-key text-key">DEL</button>
            </div>
            <div className= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.FOUR)}>4</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.FIVE)}>5</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.SIX)}>6</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.PLUS)}>+</button>
            </div>
            <div className= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.ONE)}>1</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.TWO)}>2</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.THREE)}>3</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.MINUS)}>-</button>
            </div>
            <div className= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.DOT)}>.</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.ZERO)}>0</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.DIVIDE)}>/</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.MULTIPLY)}>x</button>
            </div>
            <div className= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, KeyPress.RESET)} className="emphasized-key text-key">RESET</button>
                <button onClick={(e) => keyPressEvent(e, KeyPress.EQUAL)} className="strong-key">=</button>
            </div>
      </div>
    );
}

export default Keypad;