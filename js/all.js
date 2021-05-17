$(function() {
    $('body').removeClass('fade-out');
});

function preloaderFadeOutInit(){
$('.preloader').fadeOut('slow');
$('body').attr('id','');
}
// Window load function
jQuery(window).on('load', function () {
(function ($) {
preloaderFadeOutInit();
})(jQuery);
});


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
// $(".portfolio-item").click(function(e){
//
// 	console.log("clicked: " + $(this).attr('id'));
//
// 	// use variables for readability
// 	var id = $(this).attr('id');
// 	$("#content-" + id).show();
//
// 	$("#content-" + id).css("top", $(document).scrollTop() + 50 );
//
// 	console.log( $(document).scrollTop() )
//
// 	$(".content").css("visibility", "hidden");
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




// <FILTER>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




function myFunction() {
  var x = document.getElementById("eventscontact");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
