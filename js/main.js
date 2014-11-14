'use strict';

function DotHivController() {

	var self = this;

	// see http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
	var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

	self.initUIBehaviour = function() {
		$('.dot').removeClass('pre-init');

		// if(isIE){
		// 	$('.dot').removeClass('flip-container');
		// 	console.log('switch');
		// }
	};

	self.initUIDefaultSettings = function() {

	};

	self.initUIBehaviour();
	self.initUIDefaultSettings();
}

$(document).ready(function() {
	if(!window.dotHivController){
		window.dotHivController = new DotHivController();
	}
});

