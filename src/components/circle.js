// import using require
const Shape=require(Shape);

// declare class
class Circle extends Shape{
    constructor(props){
        super(props);
    }
    calculateArea(){
        return "Circle Area";
    }
}


// export class using module.exports
module.exports=Circle;

