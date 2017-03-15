function Particle(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, random(-19, -5));
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
