$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('#formsubmit').on('click', function() {
    if ($('#name').val()== "" || $('#email').val() === "" || $('#textarea2')== "") {
        event.preventDefault();
    }
});

var typed = new Typed('#intro', {
    strings: ["Hello, I'm Sam Pritchard."],
    typeSpeed: 40,
});

particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});


if (window.innerWidth > 720) {

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

    sr.reveal('.cardsAn', {
        duration: 2000,
        origin: 'bottom',
        distance: '500px',
        delay: 2
    });

    sr.reveal('#seemore', {
        duration: 2000,
        origin: 'left',
        distance: '200px'
    });

    sr.reveal('.row1', {
        duration: 1000,
        origin: 'left',
        distance: '200px'
    });

    sr.reveal('.row3', {
        duration: 1000,
        origin: 'left',
        distance: '200px'
    });

    sr.reveal('.row2', {
        duration: 1000,
        origin: 'right',
        distance: '200px'
    });

    sr.reveal('.row4', {
        duration: 1000,
        origin: 'right',
        distance: '200px'
    });
}


