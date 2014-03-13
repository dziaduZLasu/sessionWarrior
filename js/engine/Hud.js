function Hud(){
    // każdy obiekt niech ma zmienną self do której przypisujemy this 
    // - dlatego że czasami this się gubi w JS a tak zawsze będziemy mieli do 
    // niego referencję
    var self = this;
    var gameCanvas = null;
    
    
    self.init = function(){
        document.getElementById("preloaderImage").style.display = "none";
        var htmlCanvas = document.getElementById("gameScreen");
        gameCanvas = htmlCanvas.getContext("2d");
        console.log(gameCanvas);
    };
    
    self.onMenu = function(){};
    
    self.onPause = function(){};
    
    self.displayMenu
    
    
}

