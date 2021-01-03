class ParticleText {
    constructor(x, y, color, target, firework) {
        this.pos = createVector(x, y);
        this.firework = firework;
        this.lifespan = 255;
        this.color = color;
        if (target) {
            this.target = createVector(target.x, target.y);
        }
        this.maxSpeed = 10;
        this.maxForce = 5;
        if (this.firework) {
            this.vel = createVector(0, random(-10, -16));

        } else {
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(1, 10));

        }
        this.acc = createVector(0, 0.1);
    }

    done() {
        return this.lifespan < 0;
    }

    update() {
        if (!this.firework) {
            if (this.target) {

                let arrive = this.arrive();
                arrive.mult(1);
                this.applyForce(arrive);
            } else {
                this.applyForce(0.9);
            }
            this.lifespan -= 2;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        if (!this.firework) {
            strokeWeight(2);
            stroke(this.color[0], this.color[1], this.color[2], this.lifespan);
        } else {
            strokeWeight(4);
            stroke(this.color[0], this.color[1], this.color[2]);
        }
        point(this.pos.x, this.pos.y);
    }

    arrive() {
        if (!this.firework && this.target) {
            let desired = p5.Vector.sub(this.target, this.pos);
            let d = desired.mag();
            let speed = this.maxSpeed;
            if (d < 100) {
                speed = map(d, 0, 100, 0, this.maxSpeed);
            }
            desired.setMag(speed);
            let steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxForce);
            return steer;
        }
    }
}
