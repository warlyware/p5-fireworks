function Firework() {
    this.firework = new Particle(random(width), height);
    this.exploded = false;
    this.particles = [];

    this.update = function() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            if (this.firework.velocity.y >= 0) {
                this.explode();
                this.exploded = true;
            }
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
        }
    }

    this.explode = function() {
        for (var i = 0; i< 100; i++) {
            var p = new Particle(this.firework.position.x, this.firework.position.y);
            this.particles.push(p);
        }
    }

    this.show = function() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}