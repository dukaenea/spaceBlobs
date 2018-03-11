
function Spaceship(){

    this.pos = createVector(width/2,height*0.8);
    this.vel = createVector();
    this.acc = createVector();
    this.radius = 30;
    this.bullets = new Array();
    this.count = 0;
    this.dir = false;

    this.forceApplied = function(force){
        this.acc = createVector(force,0);
    }

    this.show = function(){
        push();
        noStroke();
        fill(153, 51, 102);
        translate(this.pos.x,this.pos.y);
        ellipse(0,0,this.radius,this.radius);
        pop();
        //ellipse(0,0,100,100);
    }

    this.update = function(){

        if(keyIsDown(LEFT_ARROW)){
            if(this.pos.x-this.radius/2>0)
                this.pos.add(createVector(-2,0));
        }
        else if(keyIsDown(RIGHT_ARROW)){
            if(this.pos.x+this.radius/2<width)
                this.pos.add(createVector(2,0));
        }
        //if(keyIsDown(32)){
          //  this.bullets.push(new Bullet(this.pos));
        //}
        for(var i=0; i<this.bullets.length;i++){
            this.bullets[i].show();
            this.bullets[i].travel();
        }
        this.bullets = this.bullets.filter((element,index) => element.position.y>0 && !element.hit);
    }

    this.collision = function(){

    }

    this.bulletCollision = function(invaders){
        invaders.forEach( (fleet,index) => fleet.forEach(
            (invader, index) => this.bullets.forEach( 
                (bullet ,index) => bullet.collision(invader))));
    }

}