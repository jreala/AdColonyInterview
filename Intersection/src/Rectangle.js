var elem = document.getElementById("intersectionCanvas");
var params = { width: 500, height: 500 };
var two = new Two(params);
two.appendTo(elem);

var rectangle1 = "";
var rect1dimensions = "";
var rectangle2 = "";
var rect2dimensions = "";

function dimensions(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
}

function createRectangle(x, y, width, height) {
    var rect = two.makeRectangle(x, y, width, height);
    rect.fill = 'rgb(0, 0, 255)';
    rect.opacity = 0.75;
    return rect;
}

function form1click() {
    if(rectangle1 !== ""){
        two.remove(rectangle1);
    }

    var x = document.getElementById("rect1x").value;
    var y = document.getElementById("rect1y").value;
    var width = document.getElementById("rect1width").value;
    var height = document.getElementById("rect1height").value;
    rectangle1 = createRectangle(x, y, width, height);
    rect1dimensions = dimensions(x, y, width, height);
    two.update();
}

function form2click() {
    if(rectangle2 !== ""){
        two.remove(rectangle1);
    }

    var x = document.getElementById("rect2x").value;
    var y = document.getElementById("rect2y").value;
    var width = document.getElementById("rect2width").value;
    var height = document.getElementById("rect2height").value;
    rectangle2 = createRectangle(x, y, width, height);
    rect2dimensions = dimensions(x, y, width, height);
    two.update();
}

function checkIntersection() {
}