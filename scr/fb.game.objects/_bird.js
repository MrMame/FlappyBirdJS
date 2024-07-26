function CreateBird_v2(oGameArea,startXPos,startYPos,width){
				
     
    // Create Walls Top Div
    var BirdDiv = document.createElement("div");
    BirdDiv.id = "bird";
    BirdDiv.className = "bird";

    // Get Game Area
    oGameArea.appendChild(BirdDiv);
    
    
    // Create 
    var bird = {
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
                    
/*             return  position1[0] < position2[0] + width2  &&
                    position2[0] < position1[0] + width1  &&
                    position1[1] < position2[1] + height2 &&
                    position2[1] < position1[1] + height1;
 */


        },
        GameArea:oGameArea,
        speed:0.2,
        gravAccel:20.1,
        ySpeed:0,
        yFlapAddSpeed:-5,
        div:BirdDiv,
        width:width,
        height:width,
        XPos:startXPos,
        YPos:startYPos,
        draw:function(){
            // Zuerst prüfen, ob ein Div und eine GameArea zum zeichnen registriert ist
            if(typeof(this.div) != 'undefined' && typeof(this.GameArea) != 'undefined' ){
                this.div.style.top = this.YPos + "px";
                this.div.style.left = this.XPos + "px";

                BirdDiv.style.height = width + "px";
                BirdDiv.style.width =  width + "px";
            

            }
        },
        move:function(deltaTime){
            
            this.ySpeed = this.ySpeed + this.gravAccel * (deltaTime / 1000 );
            this.YPos = this.YPos + this.ySpeed;

            var GameAreaHeight = parseInt(this.GameArea.style.height,10);
            if(this.YPos > GameAreaHeight - this.height){
                // Do Nothing, because we are hitting the ground
                this.ySpeed = 0;
                this.YPos = GameAreaHeight - this.height;
            }
            if(this.YPos < 0){
                this.ySpeed = 0;
                this.YPos = 0;
            }   
        },
        eventListener:function(eventname){
            switch(eventname){
                case 'mouseclick':
                    this.flap();
                    break;
                case 'mousedown':
                    this.flap();
                    break;
            }

        },
        flap:function(){
            this.ySpeed = this.ySpeed + this.yFlapAddSpeed;    // -1 means Jump, 0 is steady, positiv is falling
        },
        deleteElements:function(){
            // Entfernt alle Elemente, die zur zu Darstellung einer Wall verwendet werden
            if(typeof(this.div)!='null'){this.div.parentNode.removeChild(this.div);this.div=null;}
        }
    }
            
    
    return bird;
            
}




function CreateBird(oGameArea,startXPos,startYPos,width){
				
     
    // Create Walls Top Div
    var BirdDiv = document.createElement("div");
    BirdDiv.id = "bird";
    BirdDiv.className = "bird";

    // Get Game Area
    oGameArea.appendChild(BirdDiv);
    
    
    // Create 
    var bird = {
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
                    
/*             return  position1[0] < position2[0] + width2  &&
                    position2[0] < position1[0] + width1  &&
                    position1[1] < position2[1] + height2 &&
                    position2[1] < position1[1] + height1;
 */


        },
        GameArea:oGameArea,
        speed:0.2,
        gravAccel:20.1,
        ySpeed:0,
        yFlapAddSpeed:-5,
        div:BirdDiv,
        width:width,
        height:width,
        XPos:startXPos,
        YPos:startYPos,
        draw:function(){
            // Zuerst prüfen, ob ein Div und eine GameArea zum zeichnen registriert ist
            if(typeof(this.div) != 'undefined' && typeof(this.GameArea) != 'undefined' ){
                this.div.style.top = this.YPos + "px";
                this.div.style.left = this.XPos + "px";

                BirdDiv.style.height = width + "px";
                BirdDiv.style.width =  width + "px";
            

            }
        },
        move:function(deltaTime){
            
            this.ySpeed = this.ySpeed + this.gravAccel * (deltaTime / 1000 );
            this.YPos = this.YPos + this.ySpeed;

            var GameAreaHeight = parseInt(this.GameArea.style.height,10);
            if(this.YPos > GameAreaHeight - this.height){
                // Do Nothing, because we are hitting the ground
                this.ySpeed = 0;
                this.YPos = GameAreaHeight - this.height;
            }
            if(this.YPos < 0){
                this.ySpeed = 0;
                this.YPos = 0;
            }   
        },
        eventListener:function(eventname){
            switch(eventname){
                case 'mouseclick':
                    this.flap();
                    break;
                case 'mousedown':
                    this.flap();
                    break;
            }

        },
        flap:function(){
            this.ySpeed = this.ySpeed + this.yFlapAddSpeed;    // -1 means Jump, 0 is steady, positiv is falling
        },
        deleteElements:function(){
            // Entfernt alle Elemente, die zur zu Darstellung einer Wall verwendet werden
            if(typeof(this.div)!='null'){this.div.parentNode.removeChild(this.div);this.div=null;}
        }
    }
            
    
    return bird;
            
}
