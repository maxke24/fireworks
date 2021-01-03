class Firework {
	constructor() {
		this.color = [random(150, 255), random(150, 255), random(150, 255)];
		this.firework = new Particle(random(width), height, this.color, true);
		this.exploded = false;
		this.particles = [];
	}

	done(){
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

		for(let i = this.particles.length - 1; i >= 0; i--){
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			if(this.particles[i].done()){
				this.particles.splice(i, 1);
			}
		}
	}

	explode() {
		for (let i = 0; i < 100; i++) {
			let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.color);
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
