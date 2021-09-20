class Game {
//Get the game state value from the database 
getState() {
    database.ref('gameState').on('value',(trans)=>{
        gameState = trans.val();
    });
}

//update the game state value to the database
updateState(state) {
database.ref('/').update({
    gameState:state,
})
}

async start() {
if (gameState === 0) {
    player = new Player();
    var playerCountref = await database.ref('playerCount').once("value");
    if (playerCountref.exists()) {
        playerCount = playerCountref.val();
        player.getCount();
    }

    form = new Form();
    form.display();
}

car1 = createSprite(300,100);
car1.addImage(c1);
car1.scale = 0.35;
car2 = createSprite(300,250);
car2.addImage(c2);
car2.scale = 0.35;
car3 = createSprite(300,400);
car3.addImage(c3);
car3.scale = 0.35;
car4 = createSprite(300,550);
car4.addImage(c4);
car4.scale = 0.35;

// what is relative path
cars = [car1,car2,car3,car4];

//passFinished = false;

}
play() {
   form.hide();
   Player.getPlayerInfo();
   player.getFinishedPlayers();

   var y = 100;

   if (allPlayers != 'undefined') {
       background('blue');
       image(track, -40, -40, displayWidth*4, displayHeight)
    // I shifted from herevar index = 0;
    var index = 0;
    var x = 50;
    //var y = 100;
    //var y;
    //player.y = 100;
    //player.y = y;

    for (var plr in allPlayers) {
        index = index+1;
        // not working player.Ypos = 100;
        //allPlayers[plr].Ypos = allPlayers[plr].Ypos + 150;
        //player.update();

        //console.log(allPlayers[plr].Ypos);
        //allPlayers[plr].Ypos = y;
        y = allPlayers[plr].Ypos + 150+(index*120);
       // y = y + 150;

        x = allPlayers[plr].distance;

        //allPlayers[plr].Ypos = allPlayers[plr].y;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index) {
            
            camera.position.x = cars[index-1].x;
            camera.position.y = cars[index-1].y;

            if (obstaclesGroup.isTouching(cars[index-1])) {
                player.distance = 50;
                player.update();
            }
           // player.Ypos = y;

            //positionUp(cars[index-1]);
            //positionDown(cars[index-1]);
        }
        
    }

}

   if (keyDown(UP_ARROW)) {
    //player.Ypos = player.Ypos - 10;
    player.Ypos = player.Ypos-10;
   //player.Ypos = player.Ypos;
   //allPlayers[plr].y = Ypos;
   player.y = player.Ypos;
    player.update();
    //console.log('up arrow is pressed');
   }

   if (keyDown(DOWN_ARROW)) {
    //player.Ypos = player.Ypos + 10;
    //y=y+10
    player.Ypos = player.Ypos + 10
  //  player.Ypos = player.Ypos;
  //allPlayers[plr].Ypos = y;
  player.y = player.Ypos;
    player.update();
    //console.log('down arrow is pressed');
   }
 
   if (keyDown(RIGHT_ARROW)) {
    player.distance = player.distance +  10;
    //player.Ypos = player.Ypos;
    player.update();
  //  console.log(camera.position.x, camera.position.y);
   }

   



   if (player.distance === 6200 ) {
      player.rank = player.rank+1;
      Player.updateFinishedPlayers(player.rank);
      player.update();
      gameState = 2;
      //passFinished = true;
      
   }

   drawSprites();
}

displayRank() {
    camera.position.x = 0;
    camera.position.y = 0;
    textSize(35);
    fill('black');
    alert("your rank is at "+player.rank);
        /*if (player.rank === 1) {
            swal({
                title:"Congratulations",
                text:"You are First",
                icon:"info",
                button:"OMG, Yes",
            });
            console.log("it works");
        }
        else if (allPlayers[plr].rank === 2) {
            swal({
                title:"Good Job",
                text:"You are Second",
                icon:"info",
                button:"Thanks",
            });
        }
        else if (allPlayers[plr].rank === 3) {
            swal({
                title:"Good Job",
                text:"You are Third",
                icon:"info",
                button:"Nice ",
            });
        }
        else {
            swal({
                title:"OOPS !!",
                text:"You are last",
                icon:"info",
                button:"I will try next time",
            });
        
    }*/
}
}