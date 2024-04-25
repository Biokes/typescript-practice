class Square extends Shape{
    constructor(name,length){
        super(name);
        this._length = length;
    }
   getArea(){
        return this._length*this._length;
   }

}