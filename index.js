// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {

        let condition1 = this.countSides === 3
        let condition2 = this.perimeter % 3 === 0
        if (condition1 && condition2) {
            return true;
        } else {
            return false;
        }

    }
}

class Square extends Polygon {

    get area() {
        return this.sides[0] * this.sides[1]
    }

    get isValid() {
        let result = this.sides.filter((num, i) => this.sides.indexOf(num) === i);
        if (result.length === 1) {
            return true
        } else {
            return false
        }
    }

}