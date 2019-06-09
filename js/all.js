$( function( ) {
console.log('hi');
// activate the close button
$(".close-button").click(function(){

	// hide the section
	$('.detail').hide();
	$(".content").css("visibility", "visible");


	// // hide the section
	// $('section.aboutinfo').hide();
	// $("#content-").css("visibility", "visible");

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
	$(".close").removeClass("invisible");

});



// $("#about").click(function(e){
//
//
// 	// use variables for readability
// 	var id = $(this).attr('id');
// 	$("#content-" + id).show();
//
// 	$("#content-" + id).css("top", $(document).scrollTop() + 50 );
//
// 	console.log( $(document).scrollTop() )
//
// 	$(".content").css("visibility", "visible");
// 	$(".close").removeClass("invisible");
//
// });






$("#contact").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");
	$(".close").removeClass("invisible");

});




$("#events").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");
	$(".close").removeClass("invisible");

});




$("#writings").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "visible");
	$(".close").removeClass("invisible");

});


$(".close").click(function(e){

	// hide the section
	$('.detail').hide();
	$(".content").css("visibility", "visible");

	//
	// // hide the section
	// $('section.aboutinfo').hide();
	// $("#content-").css("visibility", "visible");

	// hide the section
	$('section.contactinfo').hide();
	$("#content-").css("visibility", "visible");


	// hide the section
	$('section.eventsinfo').hide();
	$("#content-").css("visibility", "visible");


	// hide the section
	$('section.writingsinfo').hide();
	$("#content-").css("visibility", "visible");

	$(".close").addClass("invisible");

	$( '#coverimages' ).focus( );
	document.getElementById("coverimages").focus();
});


$("img.lazyload").lazyload();

} );

//
// ---writings page------


$(".navigation a").click(function(){

	console.log("clicked: " + $(this).attr('id'));

	showtext($(this).attr('id'))
});

function showtext(id) {
	// hide all content sections
	$(".word-item").hide();

	// show the one with  content-[id]
	$("#text-" + id).show();
}

// show the first content section
showtext('amsterdam');
