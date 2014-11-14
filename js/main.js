'use strict';

function DotHivController() {

	var self = this;

	self.initUIBehaviour = function() {
		$('.dot').removeClass('pre-init');
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

