// Init AOS
AOS.init({
    once: true,
    duration: 500,    
});
$(window).on('load', function() {
    aos_init();
});
// jQuery counterUp
$('.counter-up').counterUp({
    duration: 1000,
    delay: 16,
});
