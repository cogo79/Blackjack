var Model = function() {
	
	var view = new View();
	view.render();

	var deckOfCards = new DeckOfCards();
	var dealer = new Dealer();
	var player = new Player();
	
	var dealerCardPositionX = 390;
	this.dealACardToDealer = function(faceDown) {
		
		dealer.cards.push(deckOfCards.getACard());
		var i = dealer.cards.length-1;
		dealer.cards[i].faceDown = faceDown;
		dealerCardPositionX += 60;
		view.dealACardToDealer(dealer.cards[i].text());
		if (faceDown == true) {
			view.turnFaceDown(dealer.cards[i].text());
		}
	}
	
	var playerCardPositionX = 390;
	this.dealACardToPlayer = function() {
		player.cards.push(deckOfCards.getACard());
		var i = player.cards.length-1;
		playerCardPositionX += 60;
		view.dealACardToPlayer(player.cards[i].text());
	};
	
	/*
	this.dealACardToPlayer = function(cardText) {
		this.view.dealACardToPlayer(cardText);
	}
	*/
	
	return this;
};






