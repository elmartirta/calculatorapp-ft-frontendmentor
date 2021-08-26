class KeyPress {
    static ONE = new KeyPress("ONE");
    static TWO = new KeyPress("TWO");
    static THREE = new KeyPress("THREE");
    static FOUR = new KeyPress("FOUR");
    static FIVE = new KeyPress("FIVE");
    static SIX = new KeyPress("SIX");
    static SEVEN = new KeyPress("SEVEN");
    static EIGHT = new KeyPress("EIGHT");
    static NINE = new KeyPress("NINE");
    static ZERO = new KeyPress("ZERO");
    
    static DOT = new KeyPress("DOT");
    
    static PLUS = new KeyPress("PLUS");
    static MINUS = new KeyPress("MINUS");
    static DIVIDE = new KeyPress("DIVIDE");
    static MULTIPLY = new KeyPress("MULTIPLY");

    static DELETE = new KeyPress("DELETE");
    static RESET = new KeyPress("RESET");
    static EQUAL = new KeyPress("EQUAL");

    constructor(name){
        this.name = name;
    }
}

export default KeyPress;