class PressType{
    static EMPTY = new PressType("empty");
    static DIGIT = new PressType("digit");
    static OPERAND = new PressType("operand");
    constructor(name){
        this.name = name;
    }
}

export default PressType;