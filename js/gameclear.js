function GameClear() {
    let snowflakes;

    this.setup = function () {
        createCanvas(400, 600);
        console.log("CLEAR!!")
        console.log(address.elt.value);
        let url = "https://83bdxwjho2.execute-api.us-east-1.amazonaws.com/default/faucetnow";
        let data = JSON.stringify({
            address: address.elt.value
        });
        httpPost(url, data, function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });

        background("black");
        textAlign(CENTER);
        fill("white");
        textSize(48);
        text("GOAL!!!", width / 2, height / 2);
        textSize(14);
        text("some HRSM is sent to your address.", width / 2, height / 2 + 30);
        text("Please check Etherscan, thank you.", width / 2, height / 2 + 60);
    }

}