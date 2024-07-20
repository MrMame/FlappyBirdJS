var gameObject = {
    collisionCheckObjects:[],
    collidetObjects:[],
    checkMyCollisions:function(){
        // This Function checks if any registered Gameobjects are colliding with me
        if(typeof(this.collisionCheckObjects)!='undefined' && this.collisionCheckObjects.length > 0){
            this.collisionObjects = [];     // Reset
            for(i=0;i<this.collisionCheckObjects.length;i++){

                if(this.checkRectangleCollision(this.collisionCheckObjects[i].XPos,
                                                this.collisionCheckObjects[i].YPos,
                                                this.collisionCheckObjects[i].width,
                                                this.collisionCheckObjects[i].height)){
                                                    // Collicsion Detected, adding to collidet objects
                                                    this.collidetObjects.push(this.collisionCheckObjects[i]);
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
    GameAreaDiv:null,
    speed:null,
    xGravity:null,
    yGravity:null,
    ySpeed:null,
    ObjectDiv:null,
    width:null,
    height:null,
    XPos:null,
    YPos:null,
    draw:function(){
        // Zuerst prüfen, ob ein Div und eine GameAreaDiv zum zeichnen registriert ist
        if(typeof(this.div) != 'undefined' && typeof(this.GameAreaDiv) != 'undefined' ){
            this.div.style.top = this.YPos + "px";
            this.div.style.left = this.XPos + "px";

            this.div.style.height = width + "px";
            this.div.style.width =  width + "px";
        }
    },
    moveGamePhysic:function(deltaTime){
        // Gravity take Action
        this.ySpeed = this.ySpeed + this.yGravity * (deltaTime / 1000 );
        this.YPos = this.YPos + this.ySpeed;

        this.xSpeed = this.xSpeed + this.xGravity* (deltaTime / 1000 );
        this.XPos = this.XPos + this.xSpeed;

        // Collision with World Borders
        var GameAreaHeight = parseInt(this.GameAreaDiv.style.height,10);
        if(this.YPos > GameAreaHeight - this.height){
            /* Do Nothing, because we are hitting the ground */
            this.ySpeed = 0;
            this.YPos = GameAreaHeight - this.height;
        }
        if(this.YPos < 0){
            this.ySpeed = 0;
            this.YPos = 0;
        }
        
        // Collision with other Game Objects
        this.checkMyCollisions();
        if(typeof(this.collidetObjects)!='undefined' && this.collidetObjects.length > 0){
            for(i=0;i<this.collidetObjects.length;i++){
                /* Correct here the position of me regarding the colliding object */
                
            }
        }

    },
    moveParent:function(){},

    eventListener:function(eventname){
        switch(eventname){
            case 'mouseclick':
                this.flap();
                break;
            case 'mousedown':
                this.flap();
                break;
        }

    }
  
}
