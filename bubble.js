class Shape{
    // Yeah Chaos
    constructor(x=0,y=0,r=30, col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.rchg = random(-0.1,0.1);
        this.col = col;
        this.ang = cos(random(1, 89));
        this.velx = random(-1,1);
        this.vely = random(-1,1);
        this.angcng = random(-0.05, 0.05);
        this.c = color(this.col);
        this.c.setAlpha(random(50, 200));
        this.lx = this.velx;
        this.ly = this.vely;
    }
    
    //draw the shapes
    draw(){
        fill(this.c);
        noStroke();
        let ranval = random(-2,2);
        if(this.r > 10)
            this.r -= abs(ranval);
        else if(this.r > 30) this.r = 5;
        else this.r += ranval; 
        this.r = abs(this.r);
        this.velx = this.velx%5 + random(-5,5);
        this.vely = this.vely%5 + random(-5,5);
        this.lx += (this.velx - this.lx)*0.05;
        this.ly += (this.vely - this.ly)*0.05;
        this.x += this.lx;
        this.y += this.ly;
        this.x %= width;
        this.y %= height;
        this.ang += this.angcng;
       


        push();
        translate(this.x,this.y);
        rotate(this.ang);


        rect(0,0, this.r, this.r, 5);
        // circle(0,0,this.r);
        pop();
    }

}