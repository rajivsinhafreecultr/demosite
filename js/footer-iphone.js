// JavaScript Document

//Footer Js For iphone

( function( $ ) {
$( document ).ready(function() {
$('.footer-iphone > ul > li > a').click(function() {
  $('.footer-iphone li').removeClass('active');
  $(this).closest('li a').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
	
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('.footer-iphone ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
	 $(this).closest('li').addClass('active');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );