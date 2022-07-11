$(document).ready(function(){
   
   $('.nav-btn-reoder').click(function(){
      $('.navbarcs').css({'left':'0'});
         $('.nav-btn-reoder').css({'display':'none'});
      
   });
   
      
   $('.nav-btn-remove').click(function(){
      $('.navbarcs').css({'left':'-70%'});
      $('.nav-btn-reoder').css({'display':'block'});
      
   });
   
   
   
  /* $('.nav-btn-remove').click(function(){
      $('.navbarcs').animate({'width':'70%'});
      $('.nav-btn-remove').show();
   });
   $('.nav-btn-remove').click(function(){
      $('.nav-btn-reoder').show();
      
   });*/
});






