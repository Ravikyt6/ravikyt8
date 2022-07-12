$(document).ready(function() {

   $('.nav-btn-reoder').click(function() {
      $('.navbarcs').css({ 'left': '0' });
      $('.nav-btn-reoder').css({ 'display': 'none' });

   });


   $('.nav-btn-remove').click(function() {
      $('.navbarcs').css({ 'left': '-70%' });
      $('.nav-btn-reoder').css({ 'display': 'block' });

   });
   
   $('.container').click(function() {
      $('.navbarcs').css({ 'left': '-70%' });
            $('.nav-btn-reoder').css({'display':'block'});
      
   });

$('.nav-btn-reoder').hover(function(){
   $('.navbarcs').css({'left':'0'});
   
});






});
