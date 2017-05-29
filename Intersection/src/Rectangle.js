var elem = document.getElementById("intersectionCanvas");
var params = { width: 640, height: 480 };
var two = new Two(params);
two.appendTo(elem);

two.bind("update", function () {
    checkIntersection();
});

var rectangle1 = "";
var rect1Info = "";
var rectangle2 = "";
var rect2Info = "";

function rectangleInfo(x, y, width, height) {
    this.left = parseFloat(x) - (parseFloat(width) / 2);
    this.right = parseFloat(x) + (parseFloat(width) /2);
    this.top = parseFloat(y) - (parseFloat(height) / 2);
    this.bottom = parseFloat(y) + (parseFloat(height) / 2);
}

function createRectangle(x, y, width, height) {
    var rect = two.makeRectangle(x, y, width, height);
    rect.fill = 'rgb(0, 0, 255)';
    rect.opacity = 0.75;
    return rect;
}

function form1click() {
    two.remove(rectangle1);

    var x = document.getElementById("rect1x").value;
    var y = document.getElementById("rect1y").value;
    var width = document.getElementById("rect1width").value;
    var height = document.getElementById("rect1height").value;
    rectangle1 = createRectangle(x, y, width, height);
    rect1Info = new rectangleInfo(x, y, width, height);
    two.update();

    var rect1Element = document.getElementById(rectangle1.id);
    rect1Element.addEventListener('click', function(){
        alert("Clicked Rectangle 1!");
    }, false);
}

function form2click() {
    two.remove(rectangle2);

    var x = document.getElementById("rect2x").value;
    var y = document.getElementById("rect2y").value;
    var width = document.getElementById("rect2width").value;
    var height = document.getElementById("rect2height").value;
    rectangle2 = createRectangle(x, y, width, height);
    rect2Info = new rectangleInfo(x, y, width, height);
    two.update();

    var rect2Element = document.getElementById(rectangle2.id);
    rect2Element.addEventListener('click', function(){
        alert("Clicked Rectangle 2!");
    }, false);
}

function checkIntersection() {
    if(rect1Info === "" || rect2Info === ""){
        return;
    }

    if(rect1Info.top > rect2Info.bottom ||
        rect1Info.bottom < rect2Info.top ||
        rect1Info.left > rect2Info.right ||
        rect1Info.right < rect2Info.left)
    {
        rectangle1.fill = 'rgb(0, 0, 255)';
        rectangle2.fill = 'rgb(0, 0, 255)';
        return;
    }

    rectangle1.fill = 'rgb(255, 0, 0)';
    rectangle2.fill = 'rgb(255, 0, 0)';
}