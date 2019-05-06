function Intro() {
    let direction = 90;


    this.setup = function () {
        createCanvas(400, 600);
        logoImg = loadImage("assets/super_hrsm_logo.png");
        logo = createSprite(width / 2, 0, 40, 40);
        logo.addImage(logoImg);
        updateSprites(false);
        this.drawIntroScreen();
        camera.position.y = height / 2;
        camera.position.x = width / 2;
    }


    this.draw = function () {
        background("white");
        let ball = { x: width / 2, y: height / 2, size: height / 2 };
        fill("yellow")
        stroke(color("black"));
        ellipse(ball.x, ball.y, ball.size);
        if (dist(mouseX, mouseY, ball.x, ball.y) < ball.size / 2) {
            noFill();
            stroke(color("black"));
            ellipse(ball.x, ball.y, ball.size + 10);
            noStroke();
        } else {
            noFill();
            stroke(color("white"));
            ellipse(ball.x, ball.y, ball.size + 10);
        }

        textAlign(CENTER);
        fill("black");
        textSize(14);
        text("[1] - Enter your testnet account address", width / 2, height / 2);
        text("[2] - Press START!", width / 2 - 64, height / 2 + 30);

        noStroke();
        text("© 2019 Shupo", width / 2, height - 20);
        if (logo.position.y > 150) {
            logo.velocity.y = 0;
            logo.position.y = 150;
            updateSprites(false);
        }
        logo.setSpeed(1, direction);
        updateSprites(true);

        camera.on();
        drawSprite(logo);
    }


    this.drawIntroScreen = function () {
        let me = this;

        input = createInput();
        input.position(width / 2 - 50, height / 2 + 50);
        input.style('background-color', "white");
        //input.style("padding", 0);
        //input.style("margin", 1);
        //input.style("border", 0.1);
        input.style("border-style", "solid");
        input.style("border-color", "blue");
        input.size(100);
        address = input.value("");

        button = createButton('START!');
        button.position(input.x, input.y + 30);
        button.style('background-color', "white");
        button.style("border-style", "solid");
        button.style("border-color", "blue");
        button.style("border-radius", 100);
        button.size(106);
        button.mousePressed(startGame);

        function startGame() {
            console.log("startgame")
            let game = me.sceneManager.findScene(Game);
            game.setupExecuted = false;
            if (address.elt.value.length != 0) {
                me.sceneManager.showScene(Game);
                input.remove();
                button.remove();
            }
        }
    }
}
