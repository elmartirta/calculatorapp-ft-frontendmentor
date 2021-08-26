function Keypad(props) {
    function keyPressEvent(e, value){
        console.log("Firing!" + value);
        return props.onKeyPress(value)
    }

    return(
        <div id="keypad" class="flex-grid shadowed">
            <div id="keypad-row-1" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, 7)}>7</button>
                <button onClick={(e) => keyPressEvent(e, 8)}>8</button>
                <button onClick={(e) => keyPressEvent(e, 9)}>9</button>
                <button onClick={(e) => keyPressEvent(e, "DEL")}class="emphasized-key">DEL</button>
            </div>
            <div id="keypad-row-2" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, 4)}>4</button>
                <button onClick={(e) => keyPressEvent(e, 5)}>5</button>
                <button onClick={(e) => keyPressEvent(e, 6)}>6</button>
                <button onClick={(e) => keyPressEvent(e, "PLUS")}>+</button>
            </div>
            <div id="keypad-row-3" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, 1)}>1</button>
                <button onClick={(e) => keyPressEvent(e, 2)}>2</button>
                <button onClick={(e) => keyPressEvent(e, 3)}>3</button>
                <button onClick={(e) => keyPressEvent(e, "MINUS")}>-</button>
            </div>
            <div id="keypad-row-4" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, "DOT")}>.</button>
                <button onClick={(e) => keyPressEvent(e, 0)}>0</button>
                <button onClick={(e) => keyPressEvent(e, "DIVIDE")}>/</button>
                <button onClick={(e) => keyPressEvent(e, "TIMES")}>x</button>
            </div>
            <div id="keypad-row-5" class= "flex-row noselect">
                <button onClick={(e) => keyPressEvent(e, "RESET")} class="emphasized-key">RESET</button>
                <button onClick={(e) => keyPressEvent(e, "EQUAL")} class="strong-key">=</button>
            </div>
      </div>
    );
}

export default Keypad;