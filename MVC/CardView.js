var cardWidth = 60;
var cardHeight = 84;

var CardView = function(x, y, stage) {
	var positionX = x;
	var positionY = y;
	this.cardIsFaceDown = false;

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
	var coloredRectangle = new PIXI.Graphics();
	coloredRectangle.beginFill(0x1E90FF);
	coloredRectangle.drawRect(9, 9, 42, 66);
	coloredRectangle.endFill();
	this.faceDown = function() {
		if (!this.cardIsFaceDown) {
			cardSprite.addChild(coloredRectangle);
			this.cardIsFaceDown = true;
		}
	};
	this.faceUp = function() {
		if (this.cardIsFaceDown) {
			cardSprite.removeChild(coloredRectangle);
			this.cardIsFaceDown = false;
		}
	};

	return this;
};
