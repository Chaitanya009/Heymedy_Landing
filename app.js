$(window).scroll(function(){
    if($(window).scrollTop() <= 1000){
      $('.ani-1').addClass(' animated slideInLeft');
      $('.ani-2').addClass(' animated fadeInUp');
      $('.ani-3').addClass(' animated fadeInRight');
      $('.ani-5').addClass(' animated fadeIn');
      //progress bar timing
      setTimeout(function(){
         $('#bar-2').addClass('');
      }, 10000)
    } else if($(window).scrollTop() <= 1250){
      $('.ani-4').addClass(' animated');
    }else {
      $('.ani-4').removeClass(' animated fadeInUp');
    }

});
