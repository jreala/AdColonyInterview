var elem = document.getElementById("intersectionCanvas");
var params = { width: 500, height: 500 };
var two = new Two(params);
two.appendTo(elem);

/*var rect = two.makeRectangle(213, 100, 100, 100);
rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.75;
rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
two.update();*/