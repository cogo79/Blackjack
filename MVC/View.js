var View = function() {

	return this;
};

View.prototype.render = function() {
	var interactive = true;
	var stage = new PIXI.Stage(0x66FF99, interactive);

	var renderer = PIXI.autoDetectRenderer(840, 500);

	document.getElementById("output").appendChild(renderer.view);

	this.dealerCard1 = new CardView(450, 100, stage);
	this.dealerCard2 = new CardView(510, 100, stage);
	this.playerCard1 = new CardView(450, 300, stage);
	this.playerCard2 = new CardView(510, 300, stage);

	var text = new PIXI.Text("Dealer Cards:\n\n\n\n\nYour Cards:", {
		font : "bold italic 35px Desyrel",
		align : "center"
	});
	text.position.x = 280;
	text.position.y = 70;
	text.anchor.x = 0.5;

	stage.addChild(text);

	var pointText = new PIXI.Text("10\n\n\n18", {
		font : "bold italic 60px Desyrel",
		align : "center"
	});
	pointText.position.x = 280;
	pointText.position.y = 120;
	pointText.anchor.x = 0.5;

	stage.addChild(pointText);

	var hitButton = new MEButton(417, 430, 80, 30, "HIT", stage, function(data) {
		console.log("HIT button clicked");
	});
	var standButton = new MEButton(607, 430, 80, 30, "STAND", stage, function(data) {
		console.log("STAND button clicked");
	});

	function animate() {
		renderer.render(stage);
		requestAnimFrame(animate);
	}

	requestAnimFrame(animate);

	this.setDealerPointsText = function(points) {
		var splitStr = pointText.text.split("\n\n\n");
		pointText.setText(points + "\n\n\n" + splitStr[1]);
	}

	this.setPlayerPointsText = function(points) {
		var splitStr = pointText.text.split("\n\n\n");
		pointText.setText(splitStr[0] + "\n\n\n" + points);
	}

	this.giveCardToDealer = function(text) {

	}
	
	this.dealerCard1.setCard("2s");
	
//	this.dealerCard1.faceDown();
	
	
	//	this.dealerCard1.faceUp();
};

