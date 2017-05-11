

// activate the close button
$(".close-button").click(function(){
	// hide the section
	$('.detail').hide();
	$(".content").css("visibility", "visible");

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

	$(".content").css("visibility", "hidden");

});

$(".close-button").click(function(){
	// hide the section
	$('.aboutinfo').hide();
	$("#content-").css("visibility", "visible");

	console.log('close')
});

$("#contact").click(function(e){


	// use variables for readability
	var id = $(this).attr('id');	
	$("#content-" + id).show();

	$("#content-" + id).css("top", $(document).scrollTop() + 50 );

	console.log( $(document).scrollTop() )

	$(".content").css("visibility", "hidden");

});

$(".close-button").click(function(){
	// hide the section
	$('.contactinfo').hide();
	$("#content-").css("visibility", "visible");

	console.log('close')
});


$("#home").click(function(e){

	//window.scrollTo(0,0);

	console.log('test')

});
