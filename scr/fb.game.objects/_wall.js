/* 
    Link zur Kollisionserkennung:   https://www.spieleprogrammierer.de/wiki/2D-Kollisionserkennung

 */

function CreateWall(oGameArea,wallIdx,startXPos,wallWidth,TopHeight,BottomHeight){
				
     
    // Create Walls Top Div
    var TopDiv = document.createElement("div");
    TopDiv.id = "wt" + wallIdx;
    TopDiv.className = "wall top";
    TopDiv.style.height = TopHeight + "px";
    TopDiv.style.left = startXPos + "px";
    TopDiv.style.width = wallWidth + "px";
    
    // Bottom Div
    var BtmDiv = document.createElement("div");
    BtmDiv.id = "wb" + wallIdx;
    BtmDiv.className = "wall bottom";
    BtmDiv.style.height = BottomHeight + "px";
    BtmDiv.style.left = startXPos + "px"
    BtmDiv.style.width = wallWidth + "px";
    
    // Get Game Area
    oGameArea.appendChild(TopDiv);
    oGameArea.appendChild(BtmDiv);
    
    
    // Create Wall Element
    var wall = {
        collisionCheckObjects:[],
        collisionObjects:[],
        checkMyCollisions:function(xPos,yPos,width,height){
            if(typeof(this.collisionCheckObjects)!='undefined' && this.collisionCheckObjects.length > 0){
                this.collisionObjects = [];     // Reset
                for(i=0;i<this.collisionCheckObjects.length;i++){

                    if(this.checkRectangleCollision(this.collisionCheckObjects[i].XPos,
                                                    this.collisionCheckObjects[i].YPos,
                                                    this.collisionCheckObjects[i].width,
                                                    this.collisionCheckObjects[i].height)){
                                                        // Collicsion Detected, adding to collidet objects
                                                        this.collisionObjects.push(this.collisionCheckObjects[i]);
                                                    }
                }
        
            }
            return this.collisionObjects;
        },
        checkRectangleCollision:function(xPos,yPos,width,height){
            
            return  this.XPos <      xPos + width && 
                         xPos < this.XPos + this.width &&
                    this.YPos <      yPos + height && 
                    yPos      < this.YPos + this.height 

        },
        GameArea:oGameArea,
        speed:0.2,
        divTop:TopDiv,
        divBottom:BtmDiv,
        width:wallWidth,
        TopHeight:TopHeight,
        BottomHeight:BottomHeight,
        playerGapHeight:_levelStrukture.wallPlayerGab,
        randomizer:140,
        XPos:startXPos,
        draw:function(){
            // Top Div
            this.divTop.style.height = this.TopHeight + "px";
            this.divTop.style.left=this.XPos+"px";
            // Bottom Div
            this.divBottom.style.height = this.BottomHeight + "px";
            this.divBottom.style.left=this.XPos+"px";
        },
        move:function(deltaTime){
            var x = this.speed * deltaTime;
            if((this.XPos-x)<(0-this.width)){
                // Startpos back to beginning
                this.XPos = parseInt(this.GameArea.style.width,10);
                // If Randomizer active, change Heights of the Gab
                var gameAreaHeight = parseInt(this.GameArea.style.height,10);//parseInt(this.GameArea.style.height.replace("px",""),10);
                var randHeight = Math.random() * gameAreaHeight;
                
                // Obere röhre dient als referenz
                var TopHeight = (randHeight - this.playerGapHeight/2);
                // Wenn Röhre + Gap über den oberen Rand gehen, am Rand ausrichten
                if(TopHeight<0){TopHeight=0;}
                // Wenn Röhre + Gap über den unteren Rand gehen, am Rand ausrichten
                if(TopHeight+this.playerGapHeight > gameAreaHeight){TopHeight=gameAreaHeight - this.playerGapHeight;}
                
                this.TopHeight = TopHeight;

                //var BottomHeight = (gameAreaHeight - TopHeight - this.playerGapHeight/2);
                var BottomHeight = (gameAreaHeight-(TopHeight + this.playerGapHeight));
                //this.divBottom.style.height = BottomHeight + "px";
                this.BottomHeight = BottomHeight;

            }else{
                this.XPos = this.XPos - x;}
                //this.divTop.style.left=this.XPos+"px";
                //this.divBottom.style.left=this.XPos+"px";								
            },
        eventListener:function(eventName){
        },
        deleteElements:function(){
                // Entfernt alle Elemente, die zur zu Darstellung einer Wall verwendet werden
                if(typeof(this.divTop)!='null'){this.divTop.parentNode.removeChild(this.divTop);this.divTop=null;}
                if(typeof(this.divBottom)!='null'){this.divBottom.parentNode.removeChild(this.divBottom);this.divBottom=null;}
            }
    }
            
    
    return wall;
            
}