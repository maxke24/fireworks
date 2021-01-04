let fireworks = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    gravity = createVector(0, height/979*0.2);
}

function draw() {
    background(0, 50);

    if(random() < 0.02){
        fireworks.push(new Firework());
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks .splice(i, 1);
        }
    }
}
