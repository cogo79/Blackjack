var cardWidth = 60;
var cardHeight = 84;

var CardView = function(x, y, stage) {
	var positionX = x;
	var positionY = y;

	cardMask = new PIXI.Graphics();
	cardMask.beginFill();
	cardMask.drawRect(x, y, cardWidth, cardHeight);
	cardMask.endFill();

	stage.addChild(cardMask);

	var cardSprite = new PIXI.Sprite.fromImage("cards.png");
	cardSprite.x = x;
	cardSprite.y = y;

	stage.addChild(cardSprite);

	cardSprite.mask = cardMask;

	this.setCard = function(suite, value) {
		value--;
		suite--;
		cardSprite.x = positionX - cardWidth * value;
		cardSprite.y = positionY - cardHeight * suite;
		console.log("cardSprite.x", cardSprite.x);
		console.log("cardSprite.y", cardSprite.y);
	}

	return this;
};
