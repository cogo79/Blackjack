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

	this.setCard = function(text) {
		cardSprite.x = positionX - cardWidth * getCardDenomination(text);
		cardSprite.y = positionY - cardHeight * getCardSuite(text);
		console.log("cardSprite.x", cardSprite.x);
		console.log("cardSprite.y", cardSprite.y);
	}
	var coloredRectangle = new PIXI.Graphics();
	coloredRectangle.beginFill(0x1E90FF);
	coloredRectangle.drawRect(9, 9, 42, 66);
	coloredRectangle.endFill();

	this.faceDown = function() {
		this.setCard(1, 1);
		cardSprite.addChild(coloredRectangle);
	};
	this.faceUp = function() {
		cardSprite.removeChild(coloredRectangle);
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
				return parseInt(firstChar)-2;
		}
	}
	return this;
};
