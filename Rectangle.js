let Shape = require("./Shape")
class Rectangle extends Shape{
    constructor(name, length, breadth){
        super(name);
        this._breadth= breadth;
        this._length= length;
    }
  getArea(){
        return this._length* this._breadth;
  }
  setLength(length){
        this._length= length;
  }
  setBreadth(breadth){
        this._breadth = breadth;
    }
  isSquare(){
        return this._breadth*this._breadth=== this.length*this._breadth;
  }
}

module.exports = Rectangle;