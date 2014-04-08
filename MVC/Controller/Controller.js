var Controller = function() {
	return this;
}

Controller.prototype.start = function() {
	
	var deckOfCards = new DeckOfCards();
	var dealer = new Dealer();
	var player = new Player();
	
	var view = new View;
	view.render();
	
	var cardView = view.addCard(20,20,"Kd");
	cardView.turnFaceDown();
	cardView.turnFaceUp();
}

/*
	 
	 this.dealerCard1 = new CardView(450, 100, stage);
	 this.dealerCard2 = new CardView(510, 100, stage);
	 this.playerCard1 = new CardView(450, 300, stage);
	 this.playerCard2 = new CardView(510, 300, stage);
	 */