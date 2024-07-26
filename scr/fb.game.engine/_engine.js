

    var _engineState = {
        IsRunning:false,
        IntervallId:null,
        intervall:5,
        world:undefined
    };



    function eng_start(theWorld) {
        // Setting up the Frame for Calulation the World
        if(typeof(_engineState.IntervallId)!='null'){
            clearInterval(_engineState.IntervallId);
            _engineState.IntervallId = null;
        }
        _engineState.IntervallId = setInterval(eng_frame, _engineState.intervall);

        // Register the World 
        _engineState.world = theWorld;
        // Start Engine
        _engineState.IsRunning = true;
    }
		
    
    function eng_Pause(){
        _engineState.IsRunning = false;
    }
    function eng_UnPause(){
        _engineState.IsRunning = true;
    }
    function eng_getIsRunning(){
        return _engineState.IsRunning;
    }

    function eng_frame() {
        
        // Calculate Timer
        eng_CalcWorldTime();
        
        if (_engineState.IsRunning){
            // Calculate World (Kollision etc)
            eng_CalcWorld();
            // Draw World
            eng_DrawWorld();
        }
    }
    

    function eng_CalcWorldTime(){
        _engineState.world.ActualTime = Date.now();
        _engineState.world.DeltaTime = _engineState.world.ActualTime - _engineState.world.LastTime;
        _engineState.world.LastTime = _engineState.world.ActualTime;  
    }
    
    function eng_CalcWorld(){
        // Move Ibjects
        for(i=0;i<_engineState.world.worldObjects.length;i++){
            _engineState.world.worldObjects[i].move(_engineState.world.DeltaTime);
        }
        // CheckCollisions
        for(i=0;i<_engineState.world.worldObjects.length;i++){
            var colObj = _engineState.world.worldObjects[i].checkMyCollisions();
            if (typeof(colObj)!='undefined' && colObj.length > 0){
                eng_Pause();}
        }

    }
    
    function eng_DrawWorld(){
        for(i=0;i<_engineState.world.worldObjects.length;i++){
            _engineState.world.worldObjects[i].draw();}
        
    }

    function eng_InformEvent(eventName){
        for(i=0;i<_engineState.world.worldObjects.length;i++){
            _engineState.world.worldObjects[i].eventListener(eventName);
        }
    }