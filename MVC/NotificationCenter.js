var NotificationCenter = (function() {
	var playerWinObservers = new Array;
	var dealerWinObservers = new Array;

	return {// public interface
		registerForPlayerWinNotification : function(observer) {
			playerWinObservers.push(observer);
		},
		registerForDealerWinNotification : function(observer) {
			dealerWinObservers.push(observer);
		},
		playerWon : function() {
			for (var i = 0; i < playerWinObservers.length; i++) {
				playerWinObservers[i].playerWon();
			}
		},
		dealerWon : function() {
			for (var i = 0; i < dealerWinObservers.length; i++) {
				dealerWinObservers[i].dealerWon();
			}
		}
	};
})();






