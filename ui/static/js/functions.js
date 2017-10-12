$( function() {
$( "#show-more" ).click( function() {
$( "#acct-list" ).toggle();
} );
		  // the following code simulates an event 
		  // when the user clicks the acct active list item
		  // hide the active link

$( '.acct-list__item--active' ).click( function() {
$( "#acct-list" ).toggle();
} );

console.log( "we are ready" );
$( ".menu__item-list__item--item-toggle" ).on( "click", function() {
$( ".mobile-menu" ).toggleClass( "mobile-menu--open" );
} );
} );