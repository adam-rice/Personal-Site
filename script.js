$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    $('#logo').addClass("sticky");
    $('.nav').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('#logo').removeClass("sticky");
    $('.nav').removeClass("sticky");
  }
});
