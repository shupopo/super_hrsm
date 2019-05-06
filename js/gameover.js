function GameOver() {

    this.setup = function () {
        createCanvas(400, 600);
        background("black");

    }


    this.draw = function () {
        fill("white");
        textSize(48);
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
        textSize(14);
        text("Press any key to restart game...", width / 2, height / 2 + 40);
    }


    this.keyPressed = function () {
        let game = this.sceneManager.findScene(Game);
        game.setupExecuted = false;
        this.sceneManager.showScene(Game);
    }
}
