var cardWidth = 60;
var cardHeight = 84;

var CardView = function(x, y, stage) {
	var positionX = x;
	var positionY = y;
	var cardText = "2d";
	var isFaceDownLocalBoolean = false;

	var cardMask = new PIXI.Graphics();
	cardMask.beginFill();
	cardMask.drawRect(x, y, cardWidth, cardHeight);
	cardMask.endFill();

	stage.addChild(cardMask);

	var cardSprite = new PIXI.Sprite.fromImage("cards.png");
	cardSprite.x = x;
	cardSprite.y = y;

	stage.addChild(cardSprite);

	cardSprite.mask = cardMask;

	this.setCard = function(text) {
		cardSprite.x = positionX - cardWidth * getCardDenomination(text);
		cardSprite.y = positionY - cardHeight * getCardSuite(text);
		cardText = text;
	}
	var coloredRectangle = new PIXI.Graphics();
	coloredRectangle.beginFill(0x1E90FF);
	coloredRectangle.drawRect(9, 9, 42, 66);
	coloredRectangle.endFill();

	this.turnFaceDown = function() {
		var temp = cardText;
		console.log("cardText", cardText);
		this.setCard("2s");
		cardText = temp;
		console.log("cardText", cardText);
		cardSprite.addChild(coloredRectangle);
		isFaceDownLocalBoolean = true;
	};
	this.turnFaceUp = function() {
		if (isFaceDownLocalBoolean != false) {
			console.log("cardText", cardText);
			cardSprite.removeChild(coloredRectangle);
			this.setCard(cardText);
			isFaceDownLocalBoolean = false;
			console.log("cardText", cardText);
		}
	};

	this.isFaceDown = function() {
		return isFaceDownLocalBoolean;
	}

	this.text = function() {
		return cardText;
	}

	this.destroy = function() {
		console.log("this.destroy = function() {");
		stage.removeChild(cardMask);
		stage.removeChild(cardSprite);
	};

	return this;
};

var getCardSuite = function(text) {
	var lastChar = text.charAt(text.length - 1);
	switch(lastChar) {
		case "s":
			return 0;
			break;

		case "h":
			return 1;
			break;

		case "c":
			return 2;
			break;

		case "d":
			return 3;
			break;

		default:

	}
}
var getCardDenomination = function(text) {
	var firstChar = text.charAt(0);
	switch(firstChar) {
		case "A":
			return 12;
			break;

		case "K":
			return 11;
			break;

		case "Q":
			return 10;
			break;

		case "J":
			return 9;
			break;

		case "1":
			return 8;
			break;

		default:
			return parseInt(firstChar) - 2;
	}
}
