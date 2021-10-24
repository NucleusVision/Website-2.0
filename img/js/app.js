$(window).on('load', function () {
  
  $('#loader').fadeOut();
  $('#wrapper header').fadeIn();

  $('#home-loader').fadeOut();
  $('#headVideo').fadeIn();

  if (document.location.href.split("#")[1]){
    divid  = document.location.href.split("#")[1]
    var myElement = document.getElementById(divid);
    var topPos = myElement.offsetTop;
    $(document).scrollTop(topPos);
  }
});

var stickyNav = function () {
  var sticky = $('nav');
  var scroll = $(window).scrollTop();
  if (scroll >= 100) { 
      sticky.addClass('sticky-header');
     }
  else { 
    sticky.removeClass('sticky-header');
  }
};

stickyNav();

$(document).ready(function(){   



  if ($(window).width() > 991) {


    $('.videoFull').click(function(){
      $('nav, .header-content, .fixed-community-icons, header .overlay, .whitepaper-btn').fadeToggle();
    });
    
  }

  
  if($(window).width() > 991){
    $("#headVideo").html('<source src="img/header-video.mp4" type="video/mp4"></source>' );
  }else{
    $("#headVideo").html('<source src="img/header-video-v1.mp4" type="video/mp4"></source>' );
  }

  $("#nav-icon1, .explore-btn").click(function(event){
    event.preventDefault();
    $(".explore-dropdown").fadeIn();
  });
  
  $("#nav-icon2").click(function(){
    $(".explore-dropdown").fadeOut();
  });

  $("a.empty").click(function(event) {
    event.preventDefault(); 
  });

});

$(window).scroll(function() {
    stickyNav();
    $('nav, .header-content, .fixed-community-icons, header .overlay, .whitepaper-btn').show();
});