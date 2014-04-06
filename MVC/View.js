var View = function() {

	return this;
};

View.prototype.render = function() {
	// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer

	// create an new instance of a pixi stage
	var stage = new PIXI.Stage(0x66FF99);

	// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(840, 500);

	// add the renderer view element to the DOM
	document.getElementById("output").appendChild(renderer.view);

	this.dealerCard1 = CardView(450, 100, stage);
	this.dealerCard2 = CardView(510, 100, stage);
	this.playerCard1 = CardView(450, 300, stage);
	this.playerCard2 = CardView(510, 300, stage);

	var text = new PIXI.Text("Dealer Cards:\n\n\n\n\nYour Cards:", {
		font : "bold italic 35px Desyrel",
		align : "center"
	})
	text.position.x = 280;
	text.position.y = 70;
	text.anchor.x = 0.5;
	
	stage.addChild(text);

	var pointText = new PIXI.Text("10\n\n\n18", {
		font : "bold italic 60px Desyrel",
		align : "center"
	})
	pointText.position.x = 280;
	pointText.position.y = 120;
	pointText.anchor.x = 0.5;
	
	stage.addChild(pointText);

	function animate() {
		renderer.render(stage);
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
};


