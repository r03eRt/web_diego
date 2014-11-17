$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 'slow', 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
/** }, 900, 'swing', function () {**/