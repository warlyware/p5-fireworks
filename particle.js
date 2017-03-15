function Particle(x, y, firework) {
    this.position = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;

    if (this.firework) {
        this.velocity = createVector(0, random(-19, -5));
    } else {
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(2, 10));
    }
    this.acceleration = createVector(0, 0);

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.update = function() {
        if (!this.firework) {
            this.velocity.mult(0.9);
            this.lifespan -= 4;
        }
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.done = function() {
        if (this.lifespan < 0) {
            return true
        }
        return false;
    }

    this.show = function() {
        if (!this.firework) {
            strokeWeight(2);
            stroke(255, this.lifespan);
        } else {
            strokeWeight(4);
            stroke(255);
        }
        point(this.position.x, this.position.y);
    }
}
