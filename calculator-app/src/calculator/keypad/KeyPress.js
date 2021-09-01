class KeyPress {
    static ONE = "ONE"
    static TWO = "TWO"
    static THREE = "THREE"
    static FOUR = "FOUR"
    static FIVE = "FIVE"
    static SIX = "SIX"
    static SEVEN = "SEVEN"
    static EIGHT = "EIGHT"
    static NINE = "NINE"
    static ZERO = "ZERO"
    
    static DOT = "DOT"
    
    static PLUS = "PLUS"
    static MINUS = "MINUS"
    static DIVIDE = "DIVIDE"
    static MULTIPLY = "MULTIPLY"

    static DELETE = "DELETE"
    static RESET = "RESET"
    static EQUAL = "EQUAL"

    static EMPTY = "EMPTY"

    static toNum(k){
        if (k === "ONE") {return 1;}
        if (k === "TWO") {return 2;}
        if (k === "THREE") {return 3;}
        if (k === "FOUR") {return 4;}
        if (k === "FIVE") {return 5;}
        if (k === "SIX") {return 6;}
        if (k === "SEVEN") {return 7;}
        if (k === "EIGHT") {return 8;}
        if (k === "NINE") {return 9;}
        if (k === "ZERO") {return 0;}
    }

    static isDigit(k){
        return (
            k === "ONE" ||
            k === "TWO" ||
            k === "THREE" ||
            k === "FOUR" ||
            k === "FIVE" ||
            k === "SIX" ||
            k === "SEVEN" ||
            k === "EIGHT" ||
            k === "NINE" ||
            k === "ZERO"
        ) 
    }

    static isOperand(k){
        return (
            k === "PLUS" ||
            k === "MINUS" ||
            k === "MULTIPLY" ||
            k === "DIVIDE"
        )
    }
}

export default KeyPress;