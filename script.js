$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    $('#logo').addClass("sticky");
    $('.float-right').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('#logo').removeClass("sticky");
    $('.float-right').removeClass("sticky");
  }
});

$("#header-links a").click(function(e) {
    e.preventDefault();
    $('html, body').animate( {
      scrollTop:$(this.hash).offset().top
    },
    'slow');
  });
