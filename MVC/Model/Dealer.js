var Dealer = function() {
	this.cards = new Array();
	this.points = 0;
	this.addPointsForCard = function(card, view) {
		var firstChar = card.firstChar();
		if (firstChar == "A") {
			if (this.points <= 10) {
				this.points += 11;
			} else {
				this.points += 1;
			}
		} else if (firstChar == "1" || firstChar == "J" || firstChar == "Q" || firstChar == "K") {
			this.points += 10;
		} else {
			this.points += parseInt(firstChar);
		}
		view.setDealerPointsText(this.points);
	}
	
	return this;
};

