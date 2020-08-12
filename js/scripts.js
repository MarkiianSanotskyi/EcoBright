(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);

$(document).ready(function(){
 new WOW().init();
 
 });
	
jQuery(document).ready(function ($) {

        $('.top-shopping .top-search-inner, .top-search .top-search-inner ').on('click', '.top-buttons', function () {
            if (!$(this).attr('class') || $(this).attr('class') != 'active') {
                /* currently it's not been toggled, or it's been toggled to the 'off' state,
                 so now toggle to the 'on' state: */
                $(".top-shopping .top-search-inner .top-buttons, .top-search .top-search-inner .top-buttons").removeClass('active');
                $(this).addClass('active');
                // and do something...
            }
            else if ($(this).attr('class') == 'active') {

                /* currently it has been toggled, and toggled to the 'on' state,
                 so now turn off: */
                $(this).removeClass('active');
                // and do, or undo, something...

            }

        });
		
		


});

$(document).ready(function(){
   $('a[href*=#].footer-logo, .logo a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});

	/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 340,
        minHeight: 240,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/  


		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});
 $(".fancybox").fancybox({
        padding: [15, 15, 15, 15],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: false,
        fixed: false,
        autoCenter: false,
     
    });
	
	
	

	
   