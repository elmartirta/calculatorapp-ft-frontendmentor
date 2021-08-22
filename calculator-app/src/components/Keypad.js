function Keypad() {
    return(
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
    );
}

export default Keypad;