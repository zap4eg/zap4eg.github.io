$(function() {
  $('.toggles button').click(function(){
   var get_id = this.id;
   var get_current = $('.posts .' + get_id);                           
 
   $('.post').not(get_current).hide(500);
   get_current.show(500);
  }); 
 $('#b1').click(function() {
  $('.post').show(500);
  });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:4
  });
});