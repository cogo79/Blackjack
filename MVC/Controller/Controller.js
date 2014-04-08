var Controller = function() {
	return this;
}

Controller.prototype.start = function() {

	var view = new View;
	view.render();

	var deckOfCards = new DeckOfCards();
	var dealer = new Dealer();
	var player = new Player();
	
	var dealerCardPositionX = 390;
	var dealACardToDealer = function(faceDown) {
		dealer.cards.push(deckOfCards.getACard());
		var i = dealer.cards.length-1;
		dealer.cards[i].faceDown = faceDown;
		dealerCardPositionX += 60;
		view.addCard(dealerCardPositionX, 100, dealer.cards[i].text());
		if (faceDown == true) {
			view.turnFaceDown(dealer.cards[i].text());
		}
	};
	
	var playerCardPositionX = 390;
	var dealACardToPlayer = function() {
		player.cards.push(deckOfCards.getACard());
		var i = player.cards.length-1;
		playerCardPositionX += 60;
		view.addCard(playerCardPositionX, 300, player.cards[i].text());
	};
	
	var pointsForCard = function(cardText) {
		
	};
	
	dealACardToDealer(true);
	dealACardToDealer(false);
	
	dealACardToPlayer();
	dealACardToPlayer();
	//view.removeCard(cardView);
}
/*

 this.dealerCard1 = new CardView(450, 100, stage);
 this.dealerCard2 = new CardView(510, 100, stage);
 this.playerCard1 = new CardView(450, 300, stage);
 this.playerCard2 = new CardView(510, 300, stage);
 */