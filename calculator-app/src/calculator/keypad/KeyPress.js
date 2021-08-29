class PressCategory{
    static UNDEFINED = new PressCategory("UNDEFINED");
    static DIGIT = new PressCategory("DIGIT");
    static OPERAND = new PressCategory("OPERAND");
    constructor(name){
        this.name = name;
    }
}

class KeyPress {
    static ONE = new KeyPress("ONE", PressCategory.DIGIT);
    static TWO = new KeyPress("TWO", PressCategory.DIGIT);
    static THREE = new KeyPress("THREE", PressCategory.DIGIT);
    static FOUR = new KeyPress("FOUR", PressCategory.DIGIT);
    static FIVE = new KeyPress("FIVE", PressCategory.DIGIT);
    static SIX = new KeyPress("SIX", PressCategory.DIGIT);
    static SEVEN = new KeyPress("SEVEN", PressCategory.DIGIT);
    static EIGHT = new KeyPress("EIGHT", PressCategory.DIGIT);
    static NINE = new KeyPress("NINE", PressCategory.DIGIT);
    static ZERO = new KeyPress("ZERO", PressCategory.DIGIT);
    
    static DOT = new KeyPress("DOT");
    
    static PLUS = new KeyPress("PLUS", PressCategory.OPERAND);
    static MINUS = new KeyPress("MINUS", PressCategory.OPERAND);
    static DIVIDE = new KeyPress("DIVIDE", PressCategory.OPERAND);
    static MULTIPLY = new KeyPress("MULTIPLY", PressCategory.OPERAND);

    static DELETE = new KeyPress("DELETE");
    static RESET = new KeyPress("RESET");
    static EQUAL = new KeyPress("EQUAL");

    constructor(name, pressCategory=PressCategory.UNDEFINED){
        this.name = name;
        this.pressCategory = pressCategory
    }
}

export default KeyPress;