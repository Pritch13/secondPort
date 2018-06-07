var typed = new Typed('#intro', {
    strings: ["Hello, I'm Sam Pritchard."],
    typeSpeed: 40,
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

    window.sr = ScrollReveal();

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
        origin: 'right',
        distance: '500px'
    }); 

    sr.reveal('#portTitle', {
        duration: 1500,
        origin: 'right',
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
        origin: 'left',
        distance: '500px',
        delay: 2
    }); 

    sr.reveal('nav', {
        duration: 1000,
        origin: 'top',
        distance: '300px'
    });  

    $('.seeWork').on('click', function(){
        $('nav').addClass('affix');
        sr.reveal('nav', {
            duration: 1000,
            origin: 'top',
            distance: '300px'
        });  

    })

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



            // $(window).scroll(function() {    
            //     var scroll = $(window).scrollTop();
            //     var stickyNavTop = $('nav').offset().top;
            //     var sticky = $('.sticky').offset().top;
            
            //     if (scroll > stickyNavTop) {

            //         $("nav").addClass("affix");
            //     }  else if (scroll < sticky) {
            //         $("nav").removeClass("affix");
            //     }
            // }); 


            function moveScroller() {
                var move = function() {
                    var st = $(window).scrollTop();
                    var ot = $("#scroller-anchor").offset().top;
                    var s = $("nav");
                    if(st > ot) {
                        $("nav").addClass("affix");
                    } else {
                        if(st <= ot) {
                            $("nav").removeClass("affix");
                        }
                    }
                };
                $(window).scroll(move);
                move();
            }
            moveScroller();