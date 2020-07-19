// Init AOS
    AOS.init({
      duration: 500
    //   once: true
    });
  $(window).on('load', function() {
    aos_init();
  });
// jQuery counterUp
$('.counter-up').counterUp({
    duration: 1000,
    delay: 16
  });