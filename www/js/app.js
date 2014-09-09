
/**
 * Demo App for Shoes
 */
$(document).ready(function() {

    // Create the topcoatTouch object
    var tt = new TopcoatTouch({menu: [{id: 'home', name: 'Home'}, {id: 'cards', name: 'Cards'}]});

    // First page we go to home...  This could be done in code by setting the class to 'page page-center', but here is how to do it in code...
    tt.goTo('home');
	$('.flipper').click(function(event) {
		$(this).parent().toggleClass("flip");
	});
   $('.menuButtons').click(function() {
		tt.goTo('cards');
   });
	
	$('.cards img').click(function(event){
		var cardId = $(this).attr('rel');
		tt.goTo(cardId);
	});
	
	$('.back').click(function(event){
		tt.goTo('cards');
	});
    
	
});
