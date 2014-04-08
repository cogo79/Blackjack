function bootstrapper() {
	var headerController = new HeaderController;
	headerController.loadHeaderView("headerText");

	var view = new View;
	view.render();
	
	var controller = new Controller();
	controller.newGame();
	
}

bootstrapper();

