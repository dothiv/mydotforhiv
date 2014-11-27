'use strict';

function DotHivController() {

	var self = this;

	// see http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
	var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

	self.initUIBehaviour = function() {
		// eindrehen bei Start
		$('.dot').removeClass('pre-init');

		// IE bugfixing
		if(isIE){
			$('.dot').addClass('ie');
		}

		// behaviour tracking
		
		$('.share-button.fb').on('click', function() {
			ga('send', 'event', 'button', 'click', 'click on facebook share');
		});

		$('.share-button.twitter').on('click', function() {
			ga('send', 'event', 'button', 'click', 'click on twitter share');

		});

		// wird bei Klick auf FB und Twitter auch ausgelöst und macht wegen Hover-Interaktion nicht viel Sinn
		// $('.dot1').on('click touchstart', function() {
		// 	ga('send', 'event', 'button', 'click', 'click on circle 1');
		// });

		$('.dot2link').on('click', function() {
			ga('send', 'event', 'button', 'click', 'click on deeplink in circle 2');
		});

		$('.dot3link').on('click', function() {
			ga('send', 'event', 'button', 'click', 'click on deeplink in circle 3');
		});

		$('.dot4link').on('click', function() {
			ga('send', 'event', 'button', 'click', 'click on deeplink in circle 4');
		});

	};


	self.initUIBehaviour();
}

$(document).ready(function() {
	if(!window.dotHivController){
		window.dotHivController = new DotHivController();
	}
});

