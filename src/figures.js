class Shape {
    static _fill = 1;

    constructor(x, y) {
        this._points = [x, y];
        this._width = 50;
        this._height = 50;
    }

    set points(points) {
        this._points = points;
    }

    create(context) {
        context.strokeRect(this._points[0], this._points[1], this._width, this._height);
    }

    static fill() {
        this._fill = 1;
    }
}

class Square extends Shape {
    constructor(x, y, color) {
        super(x, y);
        this._fillColor = color
    }

    create(context) {
        context.fillStyle = "rgba(" + this._fillColor + "," + Shape._fill + ")";
        context.fillRect(this._points[0], this._points[1], this._width, this._height);
        Shape._fill -= 0.01
    }
}

class Circle extends Shape {
    constructor(x, y, color) {
        super(x, y);
        this._fillColor = color
    }

    create(context) {
        context.fillStyle = "rgba(" + this._fillColor + "," + Shape._fill + ")";
        context.beginPath();
        context.arc(this._points[0], this._points[1], this._width / 2, 0, 2 * Math.PI);
        context.fill();
        Shape._fill -= 0.01
    }
}
