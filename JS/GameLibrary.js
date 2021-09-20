//function positionUp(sprite) {
   //if (keyDown('UP_ARROW')) {
      // sprite.y = sprite.y - 10;
   //} 
//}

//function positionDown(sprite) {
  //  if (keyDown('DOWN_ARROW')) {
  //      sprite.y = sprite.y + 10;
   // }  
//}

function obstacles() {
    var dis = displayHeight;
    var randY = Math.round(random(0, dis));
    var randH = Math.round(random(100, 170));

    if (frameCount % 100 === 0) {
        var obstacle = createSprite(camera.position.x+displayWidth/2, randY, 17, randH);
        obstacle.addAnimation('parrot', parrotAnimation);
        //obstacle.width = 17;
       // obstacle.height = randH;
        obstacle.velocityX = -7;

        obstacle.lifetime = 500;
        obstaclesGroup.add(obstacle);
}
    }

    