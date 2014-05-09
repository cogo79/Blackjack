var Model = function(viewParameter) {

	var view = viewParameter;

	var deckOfCards = new DeckOfCards();
	var dealer = new Dealer();
	var player = new Player();

	var dealerCardPositionX = 390;
	this.dealACardToDealer = function(faceDown) {
		dealer.cards.push(deckOfCards.getACard());
		var i = dealer.cards.length - 1;
		dealer.cards[i].faceDown = faceDown;
		dealerCardPositionX += 60;
		view.dealACardToDealer(dealer.cards[i].text());
		if (faceDown == true) {
			view.turnFaceDown(dealer.cards[i].text());
		} else {
			dealer.addPointsForCard(dealer.cards[i], view);
		}
	}
	var playerCardPositionX = 390;
	this.dealACardToPlayer = function() {
		player.cards.push(deckOfCards.getACard());
		var i = player.cards.length - 1;
		playerCardPositionX += 60;
		view.dealACardToPlayer(player.cards[i].text());
		player.addPointsForCard(player.cards[i], view);
		if (player.points > 21) {// Good place for unit test.
			view.hitButton.disableClick();
			setTimeout(function() {
				view.playerIsBust();
				NotificationCenter.dealerWon();
				view.hitButton.enableClick();
			}, 50);
		}
	};
	
	this.turnDealersFaceDownCardsFaceUp = function() { // Though it would only be one card face down.
		for (var i = 0; i < dealer.cards.length; i++) {
			if (dealer.cards[i].faceDown) {
				dealer.cards[i].faceDown = false;
				dealer.addPointsForCard(dealer.cards[i], view);
				view.turnFaceUp(dealer.cards[i].text());
			}
		}
	};

	var pointsForCard = function(card, currentPoints) {

	}

	return this;
};

