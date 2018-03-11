function Invader(pos){
    this.pos = pos.copy();
    this.radius = 40;
    this.life = random(10,40);
    this.out = false;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.show = function(){
        push();
        translate(this.pos.x,this.pos.y);
        noStroke();
        fill(this.r,this.g,this.b);
        ellipse(0,0,this.life,this.life);
        pop();
    }

    this.update = function(dir){
        if(this.pos.y<height+this.life){
            if(dir)
                this.pos.add(createVector(-0.4,0));
            else
                this.pos.add(createVector(0.4,0));
        }

        else{
            this.out = true;
        }
    }

    this.collision = function(ship){
    
    }

}