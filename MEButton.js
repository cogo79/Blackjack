var MEButton = function(x, y, width, height, text, stage, clickAction) {
	var ellipse = new PIXI.Graphics();

	ellipse.buttonMode = true;
	ellipse.setInteractive(true);

	ellipse.beginFill(0x000000);
	ellipse.drawEllipse(x, y, width, height);
	ellipse.endFill();

	ellipse.beginFill(0x00BFFF);
	ellipse.drawEllipse(x, y, width - 4, height - 4);
	ellipse.endFill();

	ellipse.hitArea = new PIXI.Ellipse(x, y, width, height);

	var clickable = true;
	var click = clickAction;
	ellipse.click = clickAction;
	this.disableClick = function() {
		ellipse.click = function(data) {
			console.log("Click disabled");
		};
		clickable = false;
	};
	this.enableClick = function() {
		ellipse.click = clickAction;
		clickable = true;
	};
	this.clickEnabled = function() {
		return clickable;
	};

	stage.addChild(ellipse);

	var buttonText = new PIXI.Text(text, {
		font : "bold 30px Arial",
		align : "center"
	});
	buttonText.position.x = x;
	buttonText.position.y = y;
	buttonText.anchor.x = 0.5;
	buttonText.anchor.y = 0.5;

	stage.addChild(buttonText);

	return this;
}

