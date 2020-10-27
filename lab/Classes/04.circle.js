class Circle{
    constructor(radius){
        this.radius = radius;
        //this.diameter = diameter;
        
    }
    set radius(radProp){
        this.radius
    }
    get diameter(){
        return this.radius * 2;
    }
    get radius(){
        return this.radProp=this.radius;
    }
    
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);