/* ==========================================================================
 * A "Hello World"-like example of Javascript using the MVC pattern.
 * ========================================================================== */




/*
 * HeaderController
 */

var HeaderController = function() {
	return this;
};

HeaderController.prototype.loadHeaderView = function(id) {
	var headerModel = HeaderModel.find(id);

	var headerView = new HeaderView(headerModel);

	headerView.render();
};

