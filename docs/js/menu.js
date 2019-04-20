$(document).ready($('.profile').fadeIn(0));

// Show Menu
$('.show-nav').on('click',function(){
	$('nav').addClass('show');
	$('.fade').fadeIn(400);
});
// Fade Menu
$('.icon.icon-x').on('click', function(){
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});
// Show Content
$("#data").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.data').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});

$("#profile").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.profile').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});
$("#experience").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.experience').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});

$("#knowledge").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.knowledge').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});


$("#lang").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.lang').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});


$("#expertise").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.expertise').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});


$("#portfolio").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.portfolio').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});


$("#reference").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.reference').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});


$("#certification").on('click', function(){
	$(".info>section").fadeOut(0);
	$('.certification').fadeIn(400);
	$('nav').removeClass('show');
	$('.fade').fadeOut(500);
});

//end show content



// var fields = ['.data','.profile','.experience','.knowledge','.lang','.expertise','.portfolio','.reference','.certifications'];

// //show/hide

// for (field in fields){
// 	$(fields[field]).
// }

// function hideAll(){
// 	$('').removeClass('show');
// }
// $('.icon.icon-x').on('click', function(){
// 	$('nav').removeClass('show');
// 	$('.fade').fadeOut(500);
// });
