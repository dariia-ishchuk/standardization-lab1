let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let square = document.getElementById('square');
let circle = document.getElementById('circle');

window.onload = () => {
    square.style.border = '4px solid black';
    circle.style.border = ''
}

square.onclick = () => {
    square.style.border = '4px solid black';
    circle.style.border = ''
}

circle.onclick = () => {
    circle.style.border = '4px solid black';
    square.style.border = ''
}

document.getElementById('clear').onclick = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('refill').onclick = () => {
    Shape.fill();
}

canvas.onmousedown = (e) => {
    let shape;

    if (square.style.border !== '') {
        shape = new Square(e.offsetX, e.offsetY, '255,0,0');
    } else {
        shape = new Circle(e.offsetX, e.offsetY, '255,0,0');
    }

    shape.create(context)

    function onMouseMove(e) {
        shape.points = [e.offsetX, e.offsetY];
        shape.create(context);
    }

    canvas.addEventListener('mousemove', onMouseMove);

    canvas.onmouseup = () => {
        canvas.removeEventListener('mousemove', onMouseMove);
    }
}