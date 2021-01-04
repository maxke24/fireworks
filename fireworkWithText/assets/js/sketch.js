let textFireworks = [];
let fireworks = [];
let gravity;
let texts = true;
let font;
let textList = ["Fuck you!", "Get rekt!", "Ha Gay!"];

function preload() {
    font = loadFont("../generalAssets/fonts/Poppins-Medium.ttf");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    textSize(120);
    textFont(font);
    gravity = createVector(0, 0.2);
    stroke(255);
    fill(255);
    strokeWeight(8);
    textFireworks.push(new FireworkText("You", 1));
    textFireworks.push(new FireworkText("Fuck", 0));
}

function draw() {
    background(0, 50);
    if(texts){
        if (textFireworks.length <= 0) {
            let index = Math.floor(Math.random() * textList.length);
            let text = textList[index];
            textFireworks.push(new FireworkText(text));
        }

    }

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


    for (let i = textFireworks.length - 1; i >= 0; i--) {
        textFireworks[i].update();
        textFireworks[i].show();
        if (textFireworks[i].done()) {
            textFireworks.splice(i, 1);
        }
    }
}
