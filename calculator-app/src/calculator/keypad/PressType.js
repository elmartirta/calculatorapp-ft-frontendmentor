class PressType{
    static UNDEFINED = new PressType("UNDEFINED");
    static DIGIT = new PressType("DIGIT");
    static OPERAND = new PressType("OPERAND");
    constructor(name){
        this.name = name;
    }
}

export default PressType;