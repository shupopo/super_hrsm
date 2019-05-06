function GameOver() {

    this.setup = function () {
        createCanvas(400, 600);
        fill("blue");
        textSize(map(sin(frameCount * 0.1), 0, 1, 24, 32));
        textAlign(CENTER);
        text("GAME OVER!", width / 2, height / 2);
        textSize(12);
        text("Press any key to restart game...", width / 2, height / 2 + 40);
    }

    this.keyPressed = function () {
        let game = this.sceneManager.findScene(Game);
        game.setupExecuted = false;
        this.sceneManager.showScene(Game);
    }
}
