$(function(){
    new WOW().init();
});

$(function(){
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
          }

        // other options
      });

});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        item : 3,
        autoplay : true,
        smartspeed : 700

    });
  });



