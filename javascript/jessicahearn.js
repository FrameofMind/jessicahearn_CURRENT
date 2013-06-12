//JessicaHearn.com Javascript & jQuery


$(function() {
		
	
	
	//Centers gallery images in gallery boxes
	$(".gallery-image").load(function(){
		$(this).css("margin-left", function(){
			return ($(this).parent(".gallery-box").width() *.5) - ($(this).width() * .5)
		});
	});
	
	
	

	//Prepares pages for navigation.
	$(window).load(function(){
		$(".page").hide();
		$(".page").css("visibility", "visible");
		$(".home").fadeIn('slow');
	}).delay(2000);
	
	
	

	//Navigation triggers	
	$(".page-link").click(function() {
		var i=$(this).index(".page-link");
		$(".page").hide();
		$(".page").eq(i).fadeIn('slow');
	});
	
	
	
	
	
	//Lightbox
	if (screen && screen.width > 640) {
		$(".gallery-image").click(
			function() {
				$(".lightbox").hide();
				$(this).siblings(".lightbox").fadeIn();
				$(this).siblings(".lightbox").css("top", function(){
					return ($(window).height() * .5) - ($(this).height() * .5)
				});
				$(this).siblings(".lightbox").css("left", function(){
					return ($(window).width() * .5) - ($(this).width() * .53)
				});
				$("#lightbox-shade").fadeIn();
			}
		);
		
		$(".lightbox").click(function() {
			$(".lightbox").fadeOut();
			$("#lightbox-shade").fadeOut();
		});
		
		$(window).resize(function() {
			$(".lightbox").css("top", function(){
				return ($(window).height() * .5) - ($(this).height() * .5)
			});
			$(".lightbox").css("left", function(){
				return ($(window).width() * .5) - ($(this).width() * .53)
			});
		});
	}
	
	
	
	
	//Mobile CSS
	mobileAdjustments = function() {
		if (screen && screen.width < 640) {
			
			$("#pagewrapper").css("min-width", "0px");
			$("#pagewrapper").css("padding-top", "50px");
			
			$(".contact").css("line-height", "1.2em");
			$(".contact-item").css("display", "block");
			$(".divider").hide();
			
			$("#logo").width("100%");
			$("#logo").css("margin", "30px 0px 30px 0px");
			
			$(".main-nav").css("border-bottom", "1px solid black");
			$(".main-nav li").css("float", "none");
			$(".main-nav li").css("text-align", "right");
			$(".main-nav li").css("padding", "20px 0px 20px 0px");
			
			$(".home h1").css("font-style", "italic");
			
			$("p").css("width", "100%");
			
			$("body").css("font-size", "40px");
			
			$(".gallery-box").width("100%");
			$(".gallery-box").height($(".gallery-box").width() * .58);
		}
	}
	
	mobileAdjustments();
	
	
	//The mobile settings break when I add a resize component. Play with this later...
	/*$(window).resize(function() {			
		if ($(window).width() < $(window).height()) {
			$(".gallery-box").width("100%");
			$(".gallery-box").height($(".gallery-box").width() * .6)
		}
		else {
			$(".gallery-box").height($(window).height() * .8);
			$(".gallery-box").width($(".gallery-box").height() * 1.88)
		}		
	});*/	
	



	
});