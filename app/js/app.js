/**
 * Demo App for Shoes
 */
$(document).ready(function() {

    // Create the topcoatTouch object
    var tt = new TopcoatTouch({menu: [{id: 'home', name: 'Home'}, {id: 'cards', name: 'Cards'}]});

    // First page we go to home...  This could be done in code by setting the class to 'page page-center', but here is how to do it in code...
    tt.goTo('home');
	
	tt.on('swipe', '.flip-container', function() {
		this.classList.toggle("flip");
	});
   $('.menuButtons').click(function() {
		tt.goTo('cards');
   });
	
	$('.cards img').click(function(event){
		var cardId = $(this).attr('rel');
		tt.goTo(cardId);
	});
	$('.front').click(function(event){
		tt.goTo('cards');
	});
	$('.back').click(function(event){
		tt.goTo('cards');
	});
    // Show the dialog...
    $('#showDialog').click(function() {
        tt.showDialog('This is a dialog', 'Example Dialog', {OK: function() { console.log('OK Pressed') }
            , Cancel: function() { console.log('Cancel Pressed')}});
    });
	
});
