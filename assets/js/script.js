$(document).ready(function() {
	"use strict";
// Adjust Same Height of Left Block and Right Block
     var leftHeight = $('#left-block').height();
     var rightHeight = $('#right-block').height();

     var width = $(window).width();
      if (width > 767) {
         if (leftHeight > rightHeight) {
            rightHeight = leftHeight;
         } else {
            leftHeight = rightHeight;
         }

         $('#left-block').css('height', rightHeight);
         $('#right-block').css('height', rightHeight);
      }

// Toggle Navigation
	 $(".menu a").click(function() {
		 $("nav").fadeToggle("slow", "linear");
		 $(".top-menu").toggleClass("top-animate");
		 $(".mid-menu").toggleClass("mid-animate");
		 $(".bottom-menu").toggleClass("bottom-animate");
		 return false;

	 });

// Ajax Subscription System for Home

	$(".newsletter-signup").ajaxChimp({
		callback: mailchimpResponse,
		url: "http://formspree.io/support@bluenation.co" // Replace your mailchimp post url inside double quote "".
	});

	function mailchimpResponse(resp) {
		 if(resp.result === 'success') {

			$('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

		} else if(resp.result === 'error') {
			$('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}
	};

 });