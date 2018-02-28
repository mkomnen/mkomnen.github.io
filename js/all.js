
console.log('hi');
// activate the close button
$(".close-button").click(function(){

	// hide the section
	$('.detail').hide();
	$(".content").css("visibility", "visible");


	// hide the section
	$('section.aboutinfo').hide();
	$("#content-").css("visibility", "visible");

	// hide the section
	$('section.contactinfo').hide();
	$("#content-").css("visibility", "visible");


	// hide the section
	$('section.eventsinfo').hide();
	$("#content-").css("visibility", "visible");


	// hide the section
	$('section.writingsinfo').hide();
	$("#content-").css("visibility", "visible");

	console.log('close')
});




// activate the navigation links
$(".portfolio-item").click(function(e){

	console.log("clicked: " + $(this).attr('id'));

	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "hidden");

});



$("#about").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");

});






$("#contact").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");

});




$("#events").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");

});




$("#writings").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");

});


// $("body").click(function(e){
//
// console.log('Clicked bod');
// });
