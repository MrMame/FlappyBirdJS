namespace fb.game{

    interface IEngine{
        start():void;
        pause():void;
        resume():void;
    }

    class Engine implements IEngine{

        public constructor(){}

        public start():void{};
        public pause():void{};
        public resume():void{};
        

    }
}