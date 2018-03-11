function Bullet(pos){
    this.position = pos.copy();
    this.color;
    this.damage = 0.5;
    this.hit = false;
    this.owner = owner;

    this.show = function(){
        push();
        translate(this.position.x,this.position.y);
        noStroke();
        fill(153, 153, 102);
        ellipse(0,0,5,5);
        pop();
    }


    this.collision = function(invader){
        if(this.position.y<invader.pos.y+invader.life/2 &&
           this.position.y>invader.pos.y-invader.life/2 &&
           this.position.x>invader.pos.x-invader.life/2 &&
           this.position.x<invader.pos.x+invader.life/2 ){
               invader.life-=this.damage;
               this.hit = true;
           }
    }

    this.travel = function(){
        this.position.add(createVector(0,-3));
    }

}