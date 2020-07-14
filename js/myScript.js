$(document).ready(function () {
   // sticky top menu js
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        
        if(scrolling >= 200){
            sticky.addClass('nav-bg');
        }
        else{
            sticky.removeClass('nav-bg');
        }
    });
});
