// declare class
class Shape{
    constructor(props) {
        super(props);
        this.color="red";
    }
    drawShape(){
        return "Shape";
    }
    calculateArea(){
        return "Area";
    }
}
// export class using module.exports

module.exports=Shape;