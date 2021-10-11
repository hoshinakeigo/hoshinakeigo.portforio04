// JavaScript Document
$(function(){
    "use strict";
      $('a.scroll-link').on('click', function(event){
          event.preventDefault();
          
          var $this = $(this);
          var LinkTo = $this.attr('href');
          var $target = $(LinkTo);
          var pos = $target.offset().top;
          $('html,body').animate({scrollTop: pos}, 800);
      });
  });