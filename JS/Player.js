class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.Ypos = 0;
        this.index = null;
        this.rank = 0;
        //cars[index-1].y
    }

    //Get the player count value from the database 
    getCount() {
        database.ref('playerCount').on('value',(trans)=>{
            playerCount = trans.val();
        });        
    }
  
    update() {
        var playerIndex = "players/player"+this.index;
       // this.Ypos = this.Ypos + 170
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
            rank:this.rank,
            Ypos:this.Ypos,
           
        })
    }

    static getPlayerInfo() {
        var playerInforef = database.ref('players')
        playerInforef.on('value',(info)=>{
        allPlayers = info.val();    
        })
    }
//Player.getPlayerInfo(player)

    //update the player count value to the database
    updateCount(count) {
        database.ref('/').update({
            playerCount:count, 
        })
    }

    getFinishedPlayers() {
       var rankref = database.ref('rank');
        rankref.on('value',(trans) => {
           this.rank = trans.val(); 
        } )
    }

    static updateFinishedPlayers(rank) {
        var refer = database.ref('/');
        refer.update({
            finishedPlayers:rank,
        })

        //this.rank+=1;
    }
}