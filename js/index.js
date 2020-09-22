jQuery(document).ready(function($) {


	setTimeout(function() {
		$('h1.name-intro').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	}, 100);


	// main-background image fit height

	$('header').css({ 'height': $(window).height() });
	$(window).on('resize', function() {

		$('header').css({ 'height': $(window).height() });
		$('body').css({'width': $(window).width() })
	});



	$('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


	var sections = $("section");
	var navigation_wrap = $("#navigation #nav a");
	console.log(sections);

	sections.waypoint({
		handler: function(event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#navigation a[href="#' + active_section.attr("id") + '"]');
			navigation_wrap.parent().removeClass("current");
			active_link.parent().addClass('current');
		}, offset: '35%'
	});


	$(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#navigation');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});

	$('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });


    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });



    $('.confirmation').on('click', function () {
        $('.alert').show();
    });

    $('.closebtn').on('click', function(){
    	$('.alert').hide();;
    })



    $(document).ready(function(){
    $('.chocolat-parent').Chocolat();
	});









})