class rectangle{
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    area() {
        const area = this.width * this.height
        return area;
    }
    paint(){
        const paint = `color of rec is ${this.color}`
    }
}

const rect = new rectangle(2,3, 'black')
const area = rect.area();
const paint = rect.paint();

console.log(area);
console.log(paint)