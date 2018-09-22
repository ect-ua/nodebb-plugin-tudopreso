(function(module) {
	"use strict";
	path = module.parent.require('path');
	nconf = module.parent.require('nconf');
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
  TudoPreso.invokeBot = function(params, callback) {
	console.log('params', params);
	console.log('callback', callback);
    callback(null, params);
  };

	module.exports = TudoPreso;
}(module));
