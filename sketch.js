var gameState = 0;
var playerCount;

var player;
var form;
var game;

var database;

function setup(){

    database = firebase.database();

    createCanvas(500,500);
    
    game = new Game();
    game.getState();
    game.start();
    
}



function draw(){
    background("white");
}

