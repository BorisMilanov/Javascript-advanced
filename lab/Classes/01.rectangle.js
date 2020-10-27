class Rectangle {
    constructor(width,height,color){
        this.height = height;
        this.width = width;
        this.color = color;
    }
    areaRec (){
        return this.height * this.width;
    }
    get sum (){
        return Number(this.width) + Number(this.height);
    }
}


const rect = new Rectangle (5,4,'green')
console.log(rect.areaRec())
Rectangle.prototype.getDiagonal = function() {
    return Math.sqrt(this.height,2) + Math.sqrt(this.width,2)
}
console.log(rect.getDiagonal())
console.log(rect.sum)