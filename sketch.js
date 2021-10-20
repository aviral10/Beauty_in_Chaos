// ingredients
let arr = []
let currColors = []
let stopC = 0
let wide;
let tall;
let free = 1;
function initialize(){
    rectMode(CENTER)
    
    arr = [];
    currColors = random(palettes);
    background(currColors[0]);
    for(let i=0;i<200;i++){
        add();
    }
    stopC = 0;
}

// Canvas Size

function setup() {
    wide = window.innerWidth;
    tall = window.innerHeight;
    let cnv = createCanvas(wide,tall);
    cnv.mouseClicked(add);
    let cc = document.getElementById('defaultCanvas0')

    document.body.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    initialize();   
}

// Reset function
function reset(){
    initialize();
    loop();
    free = 1;
}

// Utility function to spawn shapes inside a circle
let ANGLE = 0;
let RADIUS = 200;
function circleRand(rad){
    let positions = []
    let rrad = random(rad);
    let rand_cos = cos(ANGLE);
    let rand_sin = sin(ANGLE);
    positions.push(rrad*rand_cos);
    positions.push(rrad*rand_sin);
    ANGLE++;
    ANGLE%=100;
    return positions;
}


function add(){
    let positions = circleRand(300);
    let new_object = new Shape(width/2 + positions[0], height/2 + positions[1], random(5,20), random(currColors));
    arr.push(new_object);
}


function draw() {
    // let bg = color(currColors[0]);
    // bg.setAlpha(200);
    // background(bg);

    arr.forEach(obj => obj.draw());
    
    
    // To stop the Animation after a while
    // stopC++;    
    // if(stopC > 1000)
    //     noLoop();
    
}

function mouseClicked(){
    
    if (free==1 && mouseButton === LEFT) {
        reset();
    }
}