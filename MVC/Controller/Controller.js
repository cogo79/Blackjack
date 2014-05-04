var Controller = function() {
	var model;
	var view;
	this.newGame = function() {

		view = new View();
		//view.render();
		var model = new Model(view);
		view.setModel(model);

		model.dealACardToDealer(true);
		model.dealACardToDealer(false);
		model.dealACardToPlayer();
		model.dealACardToPlayer();
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