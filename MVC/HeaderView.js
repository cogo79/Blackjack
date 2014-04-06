/*
 * HeaderView
 */

var HeaderView = function(headerModel) {
	this.headerModel = headerModel;

	return this;
};

HeaderView.prototype.output = function() {
	var ourData = '<h1><%= headerText %></h1>';

	var instance = this;

	return ourData.replace(/<%=\s+(.*?)\s+%>/g, function(m, m1) {
		console.log("What is m ???? ", m);
		console.log("What is m1 ???", m1);
		return instance.headerModel[m1];
	});
};

HeaderView.prototype.render = function() {
//	console.log("this.output()", this.output());
//	console.log("document.getElementById('output'')", document.getElementById("output"));
	document.getElementById("output").innerHTML = this.output();
};