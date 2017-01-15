//JessicaHearn.com Javascript & jQuery


$(function() {
		
	
	
	//Centers gallery images in gallery boxes
	function imagePlacer() {
		if (screen && screen.width > 900) {
			$(".gallery-image").each(function(){
				$(this).css("margin-left", function(){
					return ($(this).parent(".gallery-box").width() *.5) - ($(this).width() * .5)
				});
			});
		}
	}
	
	
	
	

	
	//Smooth scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	
	
	
	
	
	
	
	
	
	//LIGHTBOX
	var lightboxIndex = 0;
	
	//Restricts lightbox to non-mobile version of the site
	if (screen && screen.width > 640) {
	
		//Function that sizes/resizes lightbox when called
		function lightboxSizing(displayItem) {
			displayItem.css("top", function(){
				return ($(window).height() * .5) - ($(this).height() * .5)
			});
			displayItem.css("left", function(){
				return ($(window).width() * .5) - ($(this).width() * .53)
			});
		}
		
		//Fades in lightbox, sizes image to window, and sets lightboxIndex
		$(".gallery-image").click(
			function() {
				$(".lightbox").hide();
				$(this).siblings(".lightbox").fadeIn();
				lightboxSizing($(this).siblings(".lightbox"));
				
				$("#lightbox-shade").fadeIn();
				$(".lightbox-nav").fadeIn();
				lightboxIndex = $(this).siblings(".lightbox").index(".lightbox");
			}
		);
		
		//Closes lightbox and resets lightboxIndex to 0
		$(".lightbox,#lightbox-shade").click(function() {
			$(".lightbox").fadeOut();
			$("#lightbox-shade").fadeOut();
			$(".lightbox-nav").fadeOut();
			lightboxIndex = 0;
		});
		
		//Makes lightbox responsive to window resize
		$(window).resize(function() {
			lightboxSizing($(".lightbox"));
		});
		
		//Lightbox navigation
		function lightboxPaging(toIndex) {
			$(".lightbox").hide();
			$(".lightbox").eq(toIndex).show();
			lightboxSizing($(".lightbox").eq(toIndex));
		}
		
		$("#lightbox-nav-left").click(function() {
			lightboxPaging(lightboxIndex - 1);
			lightboxIndex--
			if ((lightboxIndex == 0) || (lightboxIndex == ($("#professional .lightbox").length))) {
				$("#lightbox-nav-left").hide();
			}
			else {
				$(".lightbox-nav").show();
			}
		});
		
		$("#lightbox-nav-right").click(function() {
			lightboxPaging(lightboxIndex + 1);
			lightboxIndex++
			if ((lightboxIndex == ($("#professional .lightbox").length - 1)) || (lightboxIndex == ($(".lightbox").length - 1))) {
				$("#lightbox-nav-right").hide();
			}
			else {
				$(".lightbox-nav").show();
			}
		});
		
		//Fades lightbox paging arrows to opaque on hover
		$(".lightbox-nav img").hover(
			function() {
				$(this).fadeTo(600, 1);
			},
			function() {
				$(this).fadeTo(600, 0.5);
			}
		);
	}//END LIGHTBOX FUNCTIONS
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(window).resize(function() {
		imagePlacer();
	});
	
	$(window).load(function() {
		imagePlacer();
	});
	



	
});