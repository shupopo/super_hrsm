function Game() {
    let pipeCount;

    this.setup = function () {
        createCanvas(400, 600);

        marioImg = loadImage('assets/mario.png');
        pipeImg = loadImage('assets/flappy_pipe.png');
        groundImg = loadImage('assets/ground.png');
        bgImg = loadImage('assets/flappy_bg.png');

        mario = createSprite(width / 2, height / 2, 40, 40);
        mario.rotateToDirection = true;
        mario.velocity.x = 4;
        mario.setCollider('circle', 0, 0, 20);
        mario.addImage(marioImg);

        ground = createSprite(800 / 2, GROUND_Y + 100); //image 800x200
        ground.addImage(groundImg);

        pipes = new Group();
        pipeCount = 0;
        gameOver = true;
        updateSprites(false);

        camera.position.y = height / 2;
    }


    this.draw = function () {

        if (gameOver && keyWentDown('x')) {
            this.newGame();
        }

        if (!gameOver) {

            if (keyWentDown('x')) {
                mario.velocity.y = FLAP;
            }

            mario.velocity.y += GRAVITY;

            if (mario.position.y < 0) {
                mario.position.y = 0;
            }

            if (mario.position.y + mario.height / 2 > GROUND_Y) {
                this.die();
            }

            if (mario.overlap(pipes)) {
                this.die();
            }

            //spawn pipes
            if (frameCount % 60 == 0) {
                var pipeH = random(50, 300);
                var pipe = createSprite(mario.position.x + width, GROUND_Y - pipeH / 2 + 1 + 100, 80, pipeH);
                pipe.addImage(pipeImg);
                pipes.add(pipe);
                pipeCount++;
                console.log(pipeCount);
                //top pipe
                if (pipeH < 200) {
                    pipeH = height - (height - GROUND_Y) - (pipeH + MIN_OPENING);
                    pipe = createSprite(mario.position.x + width, pipeH / 2 - 100, 80, pipeH);
                    pipe.mirrorY(-1);
                    pipe.addImage(pipeImg);
                    pipes.add(pipe);
                }
            }
            if (pipeCount == 5) {
                this.sceneManager.showScene(GameClear);
            }
            //get rid of passed pipes
            for (var i = 0; i < pipes.length; i++)
                if (pipes[i].position.x < mario.position.x - width / 2)
                    pipes[i].remove();
        }

        camera.position.x = mario.position.x + width / 4;

        //wrap ground
        if (camera.position.x > ground.position.x - ground.width + width / 2)
            ground.position.x += ground.width;

        background(80, 127, 249)
        camera.off();
        image(bgImg, 0, GROUND_Y - 190);
        camera.on();

        drawSprites(pipes);
        drawSprite(ground);
        drawSprite(mario);
    }


    this.mousePressed = function () {
        if (gameOver) {
            this.newGame();
        }
        console.log(this);
        console.log(mario);
        mario.velocity.y = FLAP;
    }


    this.die = function () {
        console.log("game over!!")
        updateSprites(false);
        gameOver = true;
        let gameOverScene = this.sceneManager.findScene(GameOver);
        gameOverScene.setupExecuted = false;
        this.sceneManager.showScene(GameOver);
    }


    this.newGame = function () {
        pipes.removeSprites();
        gameOver = false;
        updateSprites(true);
        mario.position.x = width / 2;
        mario.position.y = height / 2;
        mario.velocity.y = 0;
        ground.position.x = 800 / 2;
        ground.position.y = GROUND_Y + 100;
    }


}
