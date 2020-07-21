
$(document).ready(function(){
    // Video Pop up
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    // About Description Animation
    function aos_init() {
        AOS.init({
          duration: 1000,
          once: true
        });
      }
      $(window).on('load', function() {
        aos_init();
      });
      
      // jQuery counterUp
      $('.counter-up').counterUp({
        duration: 1000,
        delay: 16,
    });
});





