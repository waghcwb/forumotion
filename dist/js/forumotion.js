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
;(function( $, window, document, undefined ) {
	'use strict';

	forumotion.module('ajax-delete-message', {
		init: function() {
			var  _this = this;

			$(document).on('click', 'a[href*="mode=delete"]', function( event ) {
				event.preventDefault();

				if ( _this._confirmDelete() ) _this._deleteMessage( $(this) );
			});
		},

		_confirmDelete: function( message ) {
			return confirm( message || 'Tem certeza que deseja remover essa mensagem?' );
		},

		_deleteMessage: function( $link ) {
			var _link = $link.attr('href');

			console.warn(link);
		}
	});

})( jQuery, this, document );