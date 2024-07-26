
var _walls=[];// = document.getElementsByClassName("wall");
var _bird;

var _levelStrukture = {
    wallSpace:120,
    wallWidth:30,
    wallPlayerGab:120
}
var _level1_strukture = {
    wallSpace:200,
    wallWidth:30,
    wallPlayerGab:540,
    birdWidth:5,
    birdYFlapAddSpeed:-6,
    birdGravAccel:10
}
var _level2_strukture = {
    wallSpace:200,
    wallWidth:30,
    wallPlayerGab:540,
    birdWidth:15,
    birdYFlapAddSpeed:-6,
    birdGravAccel:10
}
var _level3_strukture = {
    wallSpace:200,
    wallWidth:30,
    wallPlayerGab:540,
    birdWidth:25,
    birdYFlapAddSpeed:-6,
    birdGravAccel:10
}



var _world = {
    ActualTime:0,
    LastTime:0,
    DeltaTime:0,
    worldObjects:[]
};


    function world_Create_1(GameAreaContainer){
        return world_Create(GameAreaContainer,_level1_strukture);
    }
    function world_Create_2(GameAreaContainer){
        return world_Create(GameAreaContainer,_level2_strukture);
    }
    function world_Create_3(GameAreaContainer){
        return world_Create(GameAreaContainer,_level3_strukture);
    }




/*         var gameArea = GameAreaContainer;

        // Reset World Objects
        for(i=0;i<_world.worldObjects.length;i++){
            _world.worldObjects[i].deleteElements();		// Löschen aller bisherig gezeichneten Elemente (divs)
        }
        _world.worldObjects=[];		// Löschen des Arrays				
        


        // Erzuege Walls
        var wallSpace = _level1_strukture.wallSpace;
        var wallWidth = _level1_strukture.wallWidth;
        var gameAreaWidth = parseInt(gameArea.style.width,10);
        var gameAreaHeight = parseInt(gameArea.style.height,10);		
        var NumberOfWalls = Math.round(gameAreaWidth / (wallWidth + wallSpace));
        var startXPos = gameAreaWidth;
        var TopHeight = 30; 
        var BottomHeight = 60;
        var WallNumber = 0;

        for(i=1;i<=NumberOfWalls;i++){
            
            var  theWall = CreateWall(gameArea,
                                    WallNumber, 
                                    startXPos,
                                    wallWidth, 
                                    TopHeight, 
                                    BottomHeight);

            _world.worldObjects.push(theWall);

            // Calculate Properties for the next Wall from definitions of the actual Wall
            var startXPos = startXPos + 
                            wallWidth + 
                            wallSpace;

            var TopHeight    = (gameAreaHeight/2) - theWall.playerGapHeight/2; 
            var BottomHeight = (gameAreaHeight/2) - theWall.playerGapHeight/2;
            WallNumber++;
        }

        // Adding Bird to World
        var birdStartYPos = gameAreaHeight/2;
        var birdStartXPos = gameAreaWidth/5;
        var birdWidth = _level1_strukture.birdWidth;
        _bird = CreateBird(gameArea,birdStartXPos,birdStartYPos,birdWidth);
        _bird.yFlapAddSpeed = _level1_strukture.birdYFlapAddSpeed;
        _bird.gravAccel = _level1_strukture.birdGravAccel;



        _world.worldObjects.push(_bird)


        // Create Time
        _world.ActualTime = Date.now();
        _world.DeltaTime = Date.now();
        _world.LastTime = Date.now();

        // Finish Creating World
        return _world;
 */    


			function world_Create_objv2(GameAreaContainer){
								
				var gameArea = GameAreaContainer;

                // Reset World Objects
                for(i=0;i<_world.worldObjects.length;i++){
					_world.worldObjects[i].deleteElements();		// Löschen aller bisherig gezeichneten Elemente (divs)
				}
				_world.worldObjects=[];		// Löschen des Arrays				
                


				// Erzuege Walls
				var wallSpace = _levelStrukture.wallSpace;
				var wallWidth = _levelStrukture.wallWidth;
				var gameAreaWidth = parseInt(gameArea.style.width,10);
				var gameAreaHeight = parseInt(gameArea.style.height,10);		
				var NumberOfWalls = Math.round(gameAreaWidth / (wallWidth + wallSpace));
                var startXPos = gameAreaWidth;
                var TopHeight = 30; 
                var BottomHeight = 60;
                var WallNumber = 0;

				for(i=1;i<=NumberOfWalls;i++){
					
                    var  theWall = CreateWall(gameArea,
                                              WallNumber, 
                                              startXPos,
                                              wallWidth, 
                                              TopHeight, 
                                              BottomHeight);

                    _world.worldObjects.push(theWall);

                    // Calculate Properties for the next Wall from definitions of the actual Wall
                    var startXPos = startXPos + 
                                    wallWidth + 
                                    wallSpace;

                    var TopHeight    = (gameAreaHeight/2) - theWall.playerGapHeight/2; 
                    var BottomHeight = (gameAreaHeight/2) - theWall.playerGapHeight/2;
                    WallNumber++;
                    }


				// Adding Bird to World
				var birdStartYPos = gameAreaHeight/2;
				var birdStartXPos = 30;
				var birdWidth = 30;
				_bird = CreateBird_v2(gameArea,birdStartXPos,birdStartYPos,birdWidth);

                _world.worldObjects.push(_bird)

			
				// Create Time
				_world.ActualTime = Date.now();
				_world.DeltaTime = Date.now();
				_world.LastTime = Date.now();

                // Finish Creating World
                return _world;

            }
            



            function world_Create(GameAreaContainer,levelStrukture){
                                    
                var gameArea = GameAreaContainer;
        
                // Reset World Objects
                for(i=0;i<_world.worldObjects.length;i++){
                    _world.worldObjects[i].deleteElements();		// Löschen aller bisherig gezeichneten Elemente (divs)
                }
                _world.worldObjects=[];		// Löschen des Arrays				
                
        
        
                // Erzuege Walls
                var wallSpace = levelStrukture.wallSpace;
                var wallWidth = levelStrukture.wallWidth;
                var gameAreaWidth = parseInt(gameArea.style.width,10);
                var gameAreaHeight = parseInt(gameArea.style.height,10);		
                var NumberOfWalls = Math.round(gameAreaWidth / (wallWidth + wallSpace));
                var startXPos = gameAreaWidth;
                var TopHeight = 30; 
                var BottomHeight = 60;
                var WallNumber = 0;
        
                for(i=1;i<=NumberOfWalls;i++){
                    
                    var  theWall = CreateWall(gameArea,
                                            WallNumber, 
                                            startXPos,
                                            wallWidth, 
                                            TopHeight, 
                                            BottomHeight);
        
                    _world.worldObjects.push(theWall);
        
                    // Calculate Properties for the next Wall from definitions of the actual Wall
                    var startXPos = startXPos + 
                                    wallWidth + 
                                    wallSpace;
        
                    var TopHeight    = (gameAreaHeight/2) - theWall.playerGapHeight/2; 
                    var BottomHeight = (gameAreaHeight/2) - theWall.playerGapHeight/2;
                    WallNumber++;
                }
        
                // Adding Bird to World
                var birdStartYPos = gameAreaHeight/2;
                var birdStartXPos = gameAreaWidth/5;
                var birdWidth = levelStrukture.birdWidth;
                _bird = CreateBird(gameArea,birdStartXPos,birdStartYPos,birdWidth);
                _bird.yFlapAddSpeed = levelStrukture.birdYFlapAddSpeed;
                _bird.gravAccel = levelStrukture.birdGravAccel;
                // Register all Walls to be collideable
                if(_world.worldObjects.length > 0){
                    _bird.collisionCheckObjects = [];
                    for(i=0;i<_world.worldObjects.length;i++){
                        _bird.collisionCheckObjects.push(_world.worldObjects[i]);
                    }
                }
                
                _world.worldObjects.push(_bird)
        
        
                // Create Time
                _world.ActualTime = Date.now();
                _world.DeltaTime = Date.now();
                _world.LastTime = Date.now();
        
                // Finish Creating World
                return _world;
            }

