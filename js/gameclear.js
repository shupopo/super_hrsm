function GameClear() {

    this.setup = function () {
        createCanvas(400, 600);
        console.log("CLEAR!!")
        console.log(address);
        console.log(address.elt);
        let url = "https://83bdxwjho2.execute-api.us-east-1.amazonaws.com/default/faucetnow";
        let data = JSON.stringify({
            address: address.elt.value
        });
        httpPost(url, data, function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    }

    this.draw = function () {
        fill("blue");
        textSize(map(sin(frameCount * 0.1), 0, 1, 24, 32));
        textAlign(CENTER);
        text("COURSE CLEAR!", width / 2, height / 2);
        textSize(12);
        text("some HRSM is sent to your address.", width / 2, height / 2 + 30);
        text("Please check Etherscan, thank you.", width / 2, height / 2 + 60);
    }

}