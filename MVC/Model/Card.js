var Card = function(cardText) {
	var value = cardText;
	this.faceDown = false;
	
	this.text = function() {
		return value;
	}
	/*
	this.points = function(currentPointsForPlayerOr) {
		
	}
	*/
	
	this.firstChar = function() {
		return value.charAt();
	}
	
	return this;
}
