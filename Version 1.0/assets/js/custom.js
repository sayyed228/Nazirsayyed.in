"use strict";


$(document).ready(function() {

  /******** Navbar toggle *************/
  
	$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		});
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		});
		
		$(document).delegate('.sub-menu , .cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	


    
/*********  Page smoot scrolling start here! *******************/ 
  
var winWidht =  $(window).width();
//alert(winWidht)
if (winWidht >= 750)
{
	$('.scroll, .content').click(function() {  
			 $('.menu').hide();
			});
	
	  $(function() {
		$('a[href^="#"]').click(function() {    // Change to needed selector
			$("html, body").animate({    // Need both for full browser support
				scrollTop: $( $(this).attr("href") ).offset().top - 120 // Extra 100px
			}, 500);    // Change to desired scroll time in ms
			return false;    // Prevents the dreaded jump/flash
		});
	 });
}
else 
{
	
}


/*******  Owl carousel   ********/
 
  $("#owl-example").owlCarousel({
	navigation : true, 
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
	pagination: false,
    rewindSpeed: 500,
	autoPlay : false,
    //autoPlay : 10000,
    stopOnHover : false
	
	
    
  
  });
  
    /******** current date funcation *************/
  
  var d = new Date();
  var n = d.getFullYear();
  $('#CurrentYear').html(n);
 
  /*********  Text animation *******************/  
 
	  $(function(){
      $("#animatedtext1").typed({
        strings: ["Stockholders Interview, Research", "Analysis, wireframing", "Design, Prototype", "Testing, Deployment"],
        typeSpeed: 10,
		loop: true,
		showCursor:false,
		contentType: 'html',
		backDelay: 2000
	  });
	 
	  $("#animatedtext2").typed({
        strings: ["Visual Design, Android App Design", "IOS App Design, Web App Design", "Personalization, Color", "Layout Design, Typography"],
        typeSpeed: 10,
		loop: true,
		showCursor:false,
		contentType: 'html',
		backDelay: 2000
	  });
	  
	  $("#animatedtext3").typed({
        strings:["HTML, CSS", "Javascript, jQuery", "Angularjs, Bootstrap", "SASS, LESS", "Responsive Web Design"],
        typeSpeed: 10,
		loop: true,
		showCursor:false,
		contentType: 'html',
		backDelay: 2000
	  });
  
  });
  
 
 
 

jQuery(function($){

	/* ----------------------------------------------------------- */
	/*  8. MIXIT FILTER ( FOR PORTFOLIO ) 
	/* ----------------------------------------------------------- */ 

		jQuery(function(){
		    $('#mixit-container').mixItUp();
		});

	/* ----------------------------------------------------------- */
	/*  9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	    
		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});	 

	
});
	
	
	});
	
	
