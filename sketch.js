

var database;


var gameState = 0;
var playerCount;

var allPlayers;

var car1, car2, car3, car4, cars;
var c1, c2, c3, c4, track, grounds;

var finishedPlayers = 0;
var passFinished;

var distance = 0;
var form;
var game;
var player;

var obstaclesGroup;

var parrotAnimation;

//var Ypos = 0;

// I shifted index from game class


//var obstacleGroup = createGroup();

function preload() {
    c1 = loadImage('Images/red0.png');
    c2 = loadImage('Images/blue0.png');
    c3 = loadImage('Images/green0.png');
    c4 = loadImage('Images/yellow0.png');
    track = loadImage('Images/sky edited.png');
    ground = loadImage('Images/ground.png');

    parrotAnimation = loadAnimation('Images/tile000.png', 'Images/tile001.png', 'Images/tile002.png', 'Images/tile004.png', 'Images/tile005.png', 'Images/tile006.png', 'Images/tile008.png', 'Images/tile009.png', 'Images/tile010.png')
}


function setup(){
    createCanvas(displayWidth-100,displayHeight-200);

    obstaclesGroup = new Group();

    database = firebase.database();

    //console.log(allPlayers);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("lightblue");

    
    if (playerCount === 4 ) {
        game.updateState(1);
    }

    if (gameState === 1) {
        game.play();

        obstacles();
    }


    if (gameState === 2 ) {
         game.displayRank();
    }

   // drawSprites();
}

