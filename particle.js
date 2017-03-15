function Particle(x, y, firework) {
    this.position = createVector(x, y);
    this.firework = firework;
    if (this.firework) {
        this.velocity = createVector(0, random(-19, -5));
    } else {
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(1, 6));
    }
    this.acceleration = createVector(0, 0);

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.show = function() {
        point(this.position.x, this.position.y);
    }
}
