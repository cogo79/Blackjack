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

	ellipse.click = clickAction;

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

