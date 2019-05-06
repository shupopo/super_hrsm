let GRAVITY = 0.3;
let FLAP = -7;
let GROUND_Y = 450;
let MIN_OPENING = 300;
let mario, ground;
let pipes;
let gameOver;
let marioImg, pipeImg, groundImg, bgImg;
let input, button, logo, logoImg;

let address = 0;

function setup() {
    createCanvas(400, 600);

    var mgr = new SceneManager();
    mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Game);
    mgr.addScene(GameOver);
    mgr.addScene(GameClear);
    mgr.showScene(Intro);
}
