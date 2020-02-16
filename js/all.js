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




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}





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
