class FireworkText {
    constructor(text, section) {
        this.color = [random(150, 255), random(150, 255), random(150, 255)];
        this.exploded = false;
        this.particles = [];
        let bounds = font.textBounds(text);
        switch (section) {
            case 0:
                this.firework = new ParticleText(random(bounds.w / 2 + 2, width / 3 - bounds.w / 2), height, this.color, createVector(), true);
                break;
            case 1:
                this.firework = new ParticleText(random(width/3 + bounds.w/2, width/1.5 - bounds.w/2), height, this.color, createVector(), true);
                break;
            case 2:
                this.firework = new ParticleText(random(width / 1.5 + bounds.w/2, width - bounds.w / 2 - 2), height, this.color, createVector(), true);
                break;
            default:
                this.firework = new ParticleText(random(bounds.w/2, width - bounds.w / 2), height, this.color, createVector(), true);
                break;
        }

        this.text = text;
    }

    done() {
        return this.exploded && this.particles.length === 0;
    }

    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }

    explode() {
        let textBound = font.textBounds(this.text, this.firework.pos.x, this.firework.pos.y);
        let textPoints = font.textToPoints(this.text, this.firework.pos.x - textBound.w / 2, this.firework.pos.y + textBound.h / 2);
        for (let i = 0; i < textPoints.length; i++) {
            let p = new ParticleText(this.firework.pos.x, this.firework.pos.y, this.color, textPoints[i]);
            this.particles.push(p);
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }
        this.particles.forEach(particle => {
            particle.show();
        })
    }
}
