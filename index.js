
var spaceship;
var invaders = new Array();
var dir = false;
var dive = 10;
var wave = 0;

function setup(){
    createCanvas(800,600);
    spaceship = new Spaceship();
    buildWave();
}

function draw(){
    background(51);
    spaceship.show();
    spaceship.update();


    invaders.forEach((element,index) => 
        {element.forEach((e,i) => {
            e.show();
            e.update(dir);
        })
    });
    spaceship.bulletCollision(invaders);
    for(var i=0;i<invaders.length;i++){
        invaders[i] = invaders[i].filter( (element,index) => element.life>8 && !element.out);
    }
    invaders = invaders.filter( (element,index) => element.length>0);
    if(invaders.length != 0)
        calcDir(invaders);
    else{
        buildWave();
        dive+=5;
    }  


    
}

setInterval( () => spaceship.bullets.push(new Bullet(spaceship.pos)),200);



function calcDir(wave){

    if(wave[0][0].pos.x < wave[0][0].life/2){
        dir = false;
        wave.forEach( (fleet,index) => fleet.forEach( (element,index) => element.pos.add(createVector(0,dive))));
    }
    else if(wave[0][wave[0].length-1].pos.x > width-wave[0][wave[0].length-1].life/2){
        dir = true;
        wave.forEach( (fleet,index) => fleet.forEach( (element,index) => element.pos.add(createVector(0,dive))));
    }
}

function buildWave(){
 for(var j=0;j<2;j++){
    var wave1 = new Array();
    for(var i=0;i<10;i++){
        wave1.push(new Invader(createVector(40*i+20,40*j)));
    }
    invaders.push(wave1);
  }
}

function moveTwards(invader,spaceship){
    
}