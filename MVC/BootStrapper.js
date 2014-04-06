function bootstrapper() {
	var headerController = new HeaderController;
	headerController.loadHeaderView("headerText");

	var view = new View;
	view.render();
	
}

bootstrapper();

