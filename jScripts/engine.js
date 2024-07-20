

    var _engine = {
        IsRunning:false,
        IntervallId:null,
        intervall:5,
        world:undefined
    };



    function eng_start(theWorld) {
        // Setting up the Frame for Calulation the World
        if(typeof(_engine.IntervallId)!='null'){
            clearInterval(_engine.IntervallId);
            _engine.IntervallId = null;
        }
        _engine.IntervallId = setInterval(eng_frame, _engine.intervall);

        // Register the World 
        _engine.world = theWorld;
        // Start Engine
        _engine.IsRunning = true;
    }
		
    
    function eng_Pause(){
        _engine.IsRunning = false;
    }
    function eng_UnPause(){
        _engine.IsRunning = true;
    }
    function eng_getIsRunning(){
        return _engine.IsRunning;
    }

    function eng_frame() {
        
        // Calculate Timer
        eng_CalcWorldTime();
        
        if (_engine.IsRunning){
            // Calculate World (Kollision etc)
            eng_CalcWorld();
            // Draw World
            eng_DrawWorld();
        }
    }
    

    function eng_CalcWorldTime(){
        _engine.world.ActualTime = Date.now();
        _engine.world.DeltaTime = _engine.world.ActualTime - _engine.world.LastTime;
        _engine.world.LastTime = _engine.world.ActualTime;  
    }
    
    function eng_CalcWorld(){
        // Move Ibjects
        for(i=0;i<_engine.world.worldObjects.length;i++){
            _engine.world.worldObjects[i].move(_engine.world.DeltaTime);
        }
        // CheckCollisions
        for(i=0;i<_engine.world.worldObjects.length;i++){
            var colObj = _engine.world.worldObjects[i].checkMyCollisions();
            if (typeof(colObj)!='undefined' && colObj.length > 0){
                eng_Pause();}
        }

    }
    
    function eng_DrawWorld(){
        for(i=0;i<_engine.world.worldObjects.length;i++){
            _engine.world.worldObjects[i].draw();}
        
    }

    function eng_InformEvent(eventName){
        for(i=0;i<_engine.world.worldObjects.length;i++){
            _engine.world.worldObjects[i].eventListener(eventName);
        }
    }