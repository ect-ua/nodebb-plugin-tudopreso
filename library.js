(function(module) {
	"use strict";
	var path = module.parent.require('path');
	var nconf = module.parent.require('nconf');
	var topics = module.parent.require('../src/topics');
	// var topics = require(path.join(nconf.get('base_dir'), 'src/topics'));
	// var controllers = require('./lib/controllers');
	// var winston = module.parent.require('winston');
	// var async = module.parent.require('async');
	// var db = module.parent.require('../src/database');
	// var Groups = module.parent.require('./groups');

	
	/*var constants = Object.freeze({
		type: 'oauth2',	// Either 'oauth' or 'oauth2'
		userRoute: 'https://idp.ect-ua.com/auth/realms/master/protocol/openid-connect/userinfo'	// This is the address to your app's "user profile" API endpoint (expects JSON)
	});*/

	var TudoPreso = {};

	/*if (!constants.name) {
		winston.error('[sso-oauth] Please specify a name for your OAuth provider (library.js:32)');
	} else if (!constants.type || (constants.type !== 'oauth' && constants.type !== 'oauth2')) {
		winston.error('[sso-oauth] Please specify an OAuth strategy to utilise (library.js:31)');
	} else if (!constants.userRoute) {
		winston.error('[sso-oauth] User Route required (library.js:31)');
	} else {
		configOk = true;
	}*/

  // If this filter is not there, the deleteUserData function will fail when getting the oauthId for deletion.
  TudoPreso.invokeBot = function(params) {
	var notification = params.notification;
	var uids = params.uids;	

	if (notification.type === 'mention' && uids.includes(1)) {
		var nid = notification.nid;
		var pid = notification.pid;
		var tid = notification.tid;
		var from = notification.from;
		var content = "Está tudo preso, seus cabrões!";

		var contentId = Math.floor(Math.random() * 6);
		switch (contentId) {
			case 0: 
				content = "Está tudo preso, seus cabrões!";
				break;
			case 1:
				content = "If we inject the array, we can get to the GUI spyware through the redundant RAM port!";
				break;
			case 2:
				content = "You can't parse the application without inputting the cross-platform USB malware!";
				break;
			case 3:
				content = "Rebooting the card won't do anything, we need to network the primary IP feed!";
				break;
			case 4:
				content = "They're inside the network, use the cross-platform SQL port to compress their matrix!";
				break;
			case 5:
				content = "Calculating the matrix won't do anything, we need to inject the bluetooth AI form factor!";
				break;
			case 6:
				content = "You can't bypass the capacitor without transcoding the bluetooth AI virus!";
				break;
		} 


		var data = {
			tid,
			content,
			uid: 1
		};
		topics.reply(data, (v) => {console.log('v', v)});
	}
  };

	module.exports = TudoPreso;
}(module));
