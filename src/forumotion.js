;(function( $, window, document, undefined ) {
	'use strict';

	var forumotion;

	var modules = [];

	const Forumotion = function() {
		if ( ! ( this instanceof Forumotion ) ) {
			return new Forumotion();
		}

		return this;
	};


	Forumotion.fn = Forumotion.prototype = {
		init: function() {
			return ! window.jQuery && forumotion.loadjQuery();
		}
	};


	Forumotion.fn.module = function( module, fn, override ) {
		if ( module in Forumotion.fn && ! override ) {
			console.log('Módulo repetido');

			return false;
		}
		else if ( module && fn ) {
			Forumotion.fn[ module ] = fn;

			if ( fn.hasOwnProperty('init') ) {
				fn.init.apply( forumotion[ module ] );
			}

			modules.push({
				name: module,
				fn: fn
			});

			return forumotion[ module ];
		}
		else if ( module ) {
			return forumotion[ module ];
		}

		return this;
	};


	Forumotion.fn.loadjQuery = function() {
		console.warn('load jQuery');
	};

	window.forumotion = forumotion = Forumotion();

})( jQuery, this, document );