//horizontal stretch
var A = 100,
    //vertical stretch
    B = 100,
    //a/b ratio determines the number of lobes of the curve
    a = 1,
    b = 3,
    //apparent rotation of the curve
    D = 0;

//generate random rgb color
var col = [0, 0, 0];

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    col = [random(255), random(255), random(255)];
}

function draw() {
    background(255);

    noStroke();
    textFont("Georgia")
    textSize(14);
    text("a parameter: " + a, 20, 30);
    text("b parameter: " + b, 20, 50);
    textSize(12);
    textStyle(BOLD);
    text("Move backwards", 20, 120);
    text("Stop", 300, 120);
    text("Move forward", 500, 120);
    textStyle(NORMAL);
    text("Use \u2190 and \u2192 to change the a parameter, \u2191 and \u2190 to change the b parameter.", 20, 580);

    if (D % 200 === 0) {
        col = [random(255), random(255), random(255)];
    }

    translate(width / 2, height / 2);
    strokeWeight(2);
    for (var t = 0; t < 360; t++) {
        stroke(col[0], col[1], col[2]);
        point(A * sin(a * t + D), B * cos(b * t));
    }
    D = D + floor((mouseX - 150)/300);
}

function keyPressed() {
    //change a/b ratio
    switch (keyCode) {
        case UP_ARROW:
            a++;
            break;
        case DOWN_ARROW:
            a--;
            break;
        case RIGHT_ARROW:
            b++;
            break;
        case LEFT_ARROW:
            b--;
            break;
        default:
            console.log("wrong button!");
    }
}
