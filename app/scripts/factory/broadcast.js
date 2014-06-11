'use strict';
angular.module('nearsofProyectApp').factory('broadcastFactory', function($firebase, FIREBASE_URL){
	return {
		getBroadcast: function(key) {
			return $firebase(new Firebase(FIREBASE_URL + '/' + key));
		},
		getAllBroadcast: function() {
			return $firebase(new Firebase(FIREBASE_URL));
		}
	};

});