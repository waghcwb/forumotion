;(function( $, window, document, undefined ) {
	'use strict';

	forumotion.module('ajax-delete-message', {
		init: function() {
			var  _this = this;

			$(document).on('click', 'a[href*="mode=delete"]', function( event ) {
				event.preventDefault();

				_this._confirmDelete() && _this._deleteMessage( $(this) );
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