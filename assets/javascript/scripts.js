// Javascript function that wraps everything
$(document).ready(function(){

	// scroll script for nav links
	$(".back-to-top").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({

	       scrollTop: $(hash).offset().top

	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;

	     }); // end animate

	}); // end scroll script

}); // end jQuery document ready