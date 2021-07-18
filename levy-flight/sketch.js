var pos;

function setup() {
    createCanvas(400, 400);
    background(0);
    pos = createVector(200, 200);
    prev = pos.copy();
    console.log(pos);
}

function draw() {
    stroke(255, 100);
    strokeWeight(2);
    //point(pos.x, pos.y);
    line(pos.x, pos.y, prev.x, prev.y);
    prev.set(pos);

    var step = p5.Vector.random2D();

    var r = random(100);
    if (r < 1) {
        step.mult(random(25, 100));
    } else {
        step.setMag(2);
    }

    pos.add(step);
}


