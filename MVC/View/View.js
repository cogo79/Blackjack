var View = function() {
	var model;
	this.setModel = function(modelParameter) {
		model = modelParameter;
	};
	var interactive = true;
	var stage = new PIXI.Stage(0x66FF99, interactive);

	var renderer = PIXI.autoDetectRenderer(840, 600);

	document.getElementById("output").appendChild(renderer.view);

	var header = new PIXI.Text("BLACKJACK", {
		font : "Bold 100px Arial",
		align : "Center"
	});
	header.position.x = 420;
	header.position.y = 30;
	header.anchor.x = 0.5;
	stage.addChild(header);

	var text = new PIXI.Text("Dealer Cards:\n\n\n\n\nYour Cards:", {
		font : "bold italic 35px Desyrel",
		align : "center"
	});
	text.position.x = 280;
	text.position.y = 170;
	text.anchor.x = 0.5;
	stage.addChild(text);

	var pointText = new PIXI.Text("10\n\n\n18", {
		font : "bold italic 60px Desyrel",
		align : "center"
	});
	pointText.position.x = 280;
	pointText.position.y = 220;
	pointText.anchor.x = 0.5;

	stage.addChild(pointText);

	var yesRemoveAllCards = function() {
		while (cards.length != 0) {
			var card = cards.pop();
			card.destroy();
		}

	};

	this.removeAllCards = function() {
		yesRemoveAllCards();
	};

	this.hitButton = new MEButton(417, 530, 80, 30, "HIT", stage, function(data) {
		console.log("HIT button clicked");
		//console.log(this.model);
		model.dealACardToPlayer();
	});

	this.standButton = new MEButton(607, 530, 80, 30, "STAND", stage, function(data) {
			console.log("STAND button clicked");
			model.playerStands();
	});

	function animate() {
		renderer.render(stage);
		requestAnimFrame(animate);
	}

	requestAnimFrame(animate);

	var cards = new Array();
	
	/*
	this.turnFaceUp = function(cardText) {
		for (var i = 0; i < cards.length; i++) {
			if (cards[i].cardText == cardText) {
				cards[i].turnFaceUp();
				cards[i].setCard(cardText);
			}
		}
	};
	*/

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
	var dealCard = function(x, y, text) {
		var cardView = new CardView(x, y, stage);
		cardView.setCard(text);

		cards.push(cardView);
		return cardView;
	}
	var dealerCardPositionX = 390;

	this.dealACardToDealer = function(text) {
		console.log("standButtonEnabled");
		dealerCardPositionX += 60;
		dealCard(dealerCardPositionX, 200, text);
	}
	var playerCardPositionX = 390;

	this.dealACardToPlayer = function(text) {
		playerCardPositionX += 60;
		dealCard(playerCardPositionX, 400, text);
	}
	/*
	 this.removeCard = function(CardText) {
	 var position = this.cards.indexOf(findCard(CardText));
	 if (~position)
	 cards.slice(position, 1);
	 card.destroy();
	 /*
	 var tag_story = [1, 3, 56, 6, 8, 90], id_tag = 56, position = tag_story.indexOf(id_tag);
	 if (~position)
	 tag_story.splice(position, 1);

	 }
	 */
	var findCard = function(CardText) {
		var card;
		for (var i = 0; i < cards.length; i++) {
			if (cards[i].text() == CardText) {
				card = cards[i];
				console.log(card);
				return cards[i];
			}
		}
	}

	this.turnFaceUp = function(CardText) {
		var card = findCard(CardText);
		card.turnFaceUp();
	};

	this.turnFaceDown = function(CardText) {
		findCard(CardText).turnFaceDown();
	}
	
	this.playerIsBust = function() {
		alert("You are bust!");
	}
	NotificationCenter.registerForPlayerWinNotification(this);
	this.playerWon = function() {
		alert("You win!");
	}
	NotificationCenter.registerForDealerWinNotification(this);
	this.dealerWon = function() {
		alert("Dealer wins");
	}
	NotificationCenter.registerForDrawNotification(this);
	this.draw = function() {
		alert("Draw");
	}
	this.newGame = function() {
		while (cards.length != 0) {
			var card = cards.pop();
			console.log(card);
			card.destroy();
		}
		dealerCardPositionX = 390;
		playerCardPositionX = 390;
	};
	return this;
};

/*
 View.prototype.render = function() {

 };
 */
