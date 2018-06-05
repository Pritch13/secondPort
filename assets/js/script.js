var typed = new Typed('#intro', {
    strings: ["Hello, I'm Sam Pritchard."],
    typeSpeed: 40,
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(document).ready(function(){
    $('.parallax').parallax();
  });


    window.sr = ScrollReveal();

    sr.reveal('.first', {
        duration: 1000,
        origin: 'left',
    });  
  
    sr.reveal('.about', {
        duration: 1000,
        origin: 'top',
    });  

    sr.reveal('p', {
        duration: 1000,
        origin: 'right',
        distance: '300px'
    }); 

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

  




