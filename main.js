$(document).ready(function() {

   $('.nav-btn-reoder').click(function() {
      $('.navbarcs').css({ 'left': '0' });
      $('.nav-btn-reoder').css({ 'display': 'none' });
      $('.container,.logocs').addClass('blur');
   });


   $('.nav-btn-remove , .container').click(function() {
      $('.navbarcs').css({ 'left': '-70%' });
      $('.nav-btn-reoder').css({ 'display': 'block' });
      $('.container,.logocs').removeClass('blur');
   });

   $('.container').click(function() {
      $('.navbarcs').css({ 'left': '-70%' });
      $('.nav-btn-reoder').css({ 'display': 'block' });

   });

   $('.nav-btn-reoder').hover(function() {
      $('.navbarcs').css({ 'left': '0' });
   });


});

/*|||||||||type momvent||||||||*/



/*
$(function() {
   $(".typed").typed({
      strings: ["First sentence.", "Second sentence."],
      typeSpeed: 60,
      backspace: 60,
      loop : true
      
   });
});
*/
