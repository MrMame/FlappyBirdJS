/* 
    Link zur Kollisionserkennung:   https://www.spieleprogrammierer.de/wiki/2D-Kollisionserkennung

 */

function CreatePipe(oGameArea,idx,xPos,yPos,width,height){
				
     
    // Create Pipe Div
    var pipeDiv = document.createElement("div");
    pipeDiv.id = "pipe" + idx;
    pipeDiv.className = "pipe";
    pipeDiv.style.left = xPos + "px";
    pipeDiv.style.top = yPos + "px";
    pipeDiv.style.height = height + "px";
    pipeDiv.style.width = width + "px";
        
    // Get Game Area
    oGameArea.appendChild(pipeDiv);

    // Create Element
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
            return  this.xPos <      xPos + width && 
                         xPos < this.xPos + this.width &&
                    this.yPos <      yPos + height && 
                    yPos      < this.yPos + this.height 
        },
        GameArea:oGameArea,
        xSpeed:0.2,
        div:pipeDiv,
        width:width,
        height:height,
        xPos:xPos,
        yPos:yPos,
        draw:function(){
            this.div.style.height = this.height + "px";
            this.div.style.left=this.yPos+"px";
        },
        move:function(deltaTime){
            var xDist = this.xSpeed * deltaTime;
            // Wenn Object ausserhalb der Gamearea ist, wird es zurück an die Startposition gesetzt
            if((this.xPos-xDist)<(0-this.width)){
                // Startpos back to beginning
                this.xPos = parseInt(this.GameArea.style.width,10);
            }else{
                this.xPos = this.xPos - xDist;}
            },
        eventListener:function(eventName){
        },
    }
            
    
    return wall;
            
}