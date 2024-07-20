



    function game_start(gameNumber){        
        var GameAreaDiv = document.getElementById("GameArea");
        switch(gameNumber)
        {
            case 1:
                var theWorld = world_Create_1(GameAreaDiv);
                break;
            case 2:
                var theWorld = world_Create_2(GameAreaDiv);
                break;
            case 3:
                var theWorld = world_Create_3(GameAreaDiv);
                break;
        }
        eng_start(theWorld); 
    }

    function game_start_objV2(){
        var GameAreaDiv = document.getElementById("GameArea");
        theWorld = world_Create_objv2(GameAreaDiv);        
        eng_start(theWorld); 
    }

    function game_pause(){
        if(eng_getIsRunning()){
            eng_Pause();
        }else{
            eng_UnPause();
        }
    }


    function game_eventListener_GameAreaMouseClick(){
        eng_InformEvent("mouseclick");
    }
    function game_eventListener_GameAreaMouseDown(){
        eng_InformEvent("mousedown");
    }
    