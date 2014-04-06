/*
 * HeaderModel
 */

var HeaderModel = function(data) {
	this.headerText = data.headerText;
	
	return this;
};

HeaderModel.find = function(id) {
	var ourData = {
		'headerText' : {
			headerText : 'Black Jack'
		}
	};

	var headerModel = new HeaderModel(ourData[id]);

	return headerModel;
};
