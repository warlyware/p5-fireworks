var fireworks = [];
var gravity;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
}

function draw() {
    background(51);
    fireworks.push(new Firework());
    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].show();
    }
}

window.onresize = function() {
    createCanvas(window.innerWidth, window.innerHeight);
};
