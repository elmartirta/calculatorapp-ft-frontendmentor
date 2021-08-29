import PressType from "./PressType"

class KeyPress {
    static ONE = new KeyPress("ONE", PressType.DIGIT);
    static TWO = new KeyPress("TWO", PressType.DIGIT);
    static THREE = new KeyPress("THREE", PressType.DIGIT);
    static FOUR = new KeyPress("FOUR", PressType.DIGIT);
    static FIVE = new KeyPress("FIVE", PressType.DIGIT);
    static SIX = new KeyPress("SIX", PressType.DIGIT);
    static SEVEN = new KeyPress("SEVEN", PressType.DIGIT);
    static EIGHT = new KeyPress("EIGHT", PressType.DIGIT);
    static NINE = new KeyPress("NINE", PressType.DIGIT);
    static ZERO = new KeyPress("ZERO", PressType.DIGIT);
    
    static DOT = new KeyPress("DOT");
    
    static PLUS = new KeyPress("PLUS", PressType.OPERAND);
    static MINUS = new KeyPress("MINUS", PressType.OPERAND);
    static DIVIDE = new KeyPress("DIVIDE", PressType.OPERAND);
    static MULTIPLY = new KeyPress("MULTIPLY", PressType.OPERAND);

    static DELETE = new KeyPress("DELETE");
    static RESET = new KeyPress("RESET");
    static EQUAL = new KeyPress("EQUAL");

    constructor(name, pressCategory=PressType.UNDEFINED){
        this.name = name;
        this.pressCategory = pressCategory
    }
}

export default KeyPress;