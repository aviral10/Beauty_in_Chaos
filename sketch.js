// ingredients
let arr = []
let currColors = []
let stopC = 0
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
let wide = 1300;
let tall = 800;
function setup() {
    let cnv = createCanvas(wide,tall);
    cnv.mouseClicked(add);
    cnv.position(windowWidth/2 - wide/2, windowHeight/5);
    

    let button = createButton("reset");
    button.mousePressed(reset);
    button.position(windowWidth/16, windowHeight/16);
    button.position(windowWidth/2-60, 60);
    button.size(100, 40);


    initialize();   
}

// Reset function
function reset(){
    initialize();
    loop();
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

