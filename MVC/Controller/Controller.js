var Controller = function() {
	var model;
	var view = new View();
	this.newGame = function() {

		//view = new View();
		//view.render();
		view.newGame();
		var model = new Model(view);
		view.setModel(model);

		model.dealACardToDealer(true);
		model.dealACardToDealer(false);
		model.dealACardToPlayer();
		model.dealACardToPlayer();
	}
	NotificationCenter.registerForPlayerWinNotification(this);
	this.playerWon = function() {
		this.newGame();
	}
	NotificationCenter.registerForDealerWinNotification(this);
	this.dealerWon = function() {
		this.newGame();
	}
	NotificationCenter.registerForDrawNotification(this);
	this.draw = function() {
		this.newGame();
	}
	return this;
}
/*
 Controller.prototype.start = function() {

 var model = new Model();

 model.dealACardToDealer(true);
 model.dealACardToDealer(false);
 model.dealACardToPlayer();
 model.dealACardToPlayer();

 }
 */
/*

 this.dealerCard1 = new CardView(450, 100, stage);
 this.dealerCard2 = new CardView(510, 100, stage);
 this.playerCard1 = new CardView(450, 300, stage);
 this.playerCard2 = new CardView(510, 300, stage);
 */