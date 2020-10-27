function classHierarchy() {
    class Figure {
        constructor(units) {
            this.units = units || "cm";
        }

        conversionFactor() {
            if (this.units == "cm") {
                return 1;
            } else if (this.units == 'mm') {
                return 10;
            } else if (this.units == 'm') {
                return 0.1;
            }
        }

        toString() {
            return this.constructor.name;
        }

        get area() {
            return undefined;
        }
        changeUnits(newUnits) {
            this.units = newUnits;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        set radius(val) {
            this._radius = val;
        }

        get radius() {
            return this._radius  * this.conversionFactor();
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        set width(val) {
            this._width = val;
        }

        get width() {
            return this._width  * this.conversionFactor();
        }

        set height(val) {

            this._height = val;
        }

        get height() {
            return this._height * this.conversionFactor();
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }

        get area() {
            console.log(this.conversionFactor())
            return this.width * this.height;
        }
    }
    return { Figure, Circle, Rectangle }
}
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50