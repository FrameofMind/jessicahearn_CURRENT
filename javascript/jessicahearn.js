//JessicaHearn.com Javascript & jQuery


$(function() {
		
	/*alert($("#professional .lightbox").length);*/
	
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
				/*alert(lightboxIndex);*/
				/*alert($(this).siblings(".lightbox").index("#personal .lightbox"));*/
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
			
			/*$(".lightbox").hide();
			$(".lightbox").eq(lightboxIndex - 1).show();
			lightboxSizing($(".lightbox").eq(lightboxIndex - 1));*/
			
			lightboxIndex--
			if ((lightboxIndex == 0) || (lightboxIndex == ($("#professional .lightbox").length))) {
				$("#lightbox-nav-left").hide();
			}
			/*else if (lightboxIndex == 0) {
				$("#lightbox-nav-left").hide();
			}*/
		});
		
		$("#lightbox-nav-right").click(function() {
		
			lightboxPaging(lightboxIndex + 1);
			
			/*$(".lightbox").hide();
			$(".lightbox").eq(lightboxIndex + 1).show();
			lightboxSizing($(".lightbox").eq(lightboxIndex + 1));*/
			
			lightboxIndex++
			if ((lightboxIndex == ($("#professional .lightbox").length - 1)) || (lightboxIndex == ($(".lightbox").length - 1))) {
				$("#lightbox-nav-right").hide();
			}
		});
	}
	
	
	
	
	
	
	//Expanded Lightbox TEST CASE
	//(work in progress...)
	/*$(".gallery-image").click(
		function() {
			$(".box").show();
		}
	);
	$(".close").click(
		function() {
			$(".box").hide();
		}
	);*/
	
	
	
	
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