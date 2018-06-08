var typed = new Typed('#intro', {
    strings: ["Hello, I'm Sam Pritchard."],
    typeSpeed: 40,
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

    window.sr = ScrollReveal();

    sr.reveal('.leftoutscroll', {
        duration: 1000,
        delay: 800,
        origin: 'bottom',
        distance: '200px',
        rotate: { x: 0, y: 0, z: 30 },
    });

    sr.reveal('.leftinscroll', {
        duration: 1000,
        delay: 600,
        origin: 'bottom',
        distance: '200px',
        rotate: { x: 0, y: 0, z: 30 },
    });

    sr.reveal('.rightoutscroll', {
        duration: 1000,
        delay: 800,
        origin: 'bottom',
        distance: '200px',
        rotate: { x: 0, y: 0, z: -30 },
    });

    sr.reveal('.rightinscroll', {
        duration: 1000,
        delay: 600,
        origin: 'bottom',
        distance: '200px',
        rotate: { x: 0, y: 0, z: -30 },
    });

    sr.reveal('#intro', {
        duration: 1000,
        origin: 'left'
    });

    sr.reveal('.introBtn', {
        duration: 2000,
        origin: 'right',
        distance: '500px'
    });  
  
    sr.reveal('#abTitle', {
        duration: 1500,
        origin: 'left',
        distance: '500px'
    }); 

    sr.reveal('#portTitle', {
        duration: 1500,
        origin: 'left',
        distance: '500px'
    }); 

    sr.reveal('#contactTitle', {
        duration: 1500,
        origin: 'left',
        distance: '500px'
    }); 

    sr.reveal('#border', {
        duration: 2000,
        origin: 'right',
        distance: '500px',
        delay: 2
    }); 

    sr.reveal('#borderRPort', {
        duration: 2000,
        origin: 'right',
        distance: '500px',
        delay: 2
    }); 

    sr.reveal('#samPic', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        delay: 2
    }); 

    sr.reveal('#aboutPara', {
        duration: 2000,
        origin: 'left',
        distance: '500px',
        delay: 2
    }); 

    sr.reveal('#borderPort', {
        duration: 2000,
        origin: 'right',
        distance: '500px',
        delay: 2
    }); 

    sr.reveal('nav', {
        duration: 1000,
        origin: 'top',
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




