function navfun() {
    document.getElementById("menu-bar").classList.toggle("end-0")
    document.body.classList.toggle("overflow_hidden")
    document.getElementById("menu-icon").classList.toggle("cross");
}

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    prevArrow: ".prev_arrow",
    nextArrow: ".next_arrow",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.my_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev_arrow1",
    nextArrow: ".next_arrow1",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

$('.new_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

// ----------------------------preloader--------------------
setTimeout(() => {
    console.log("Delayed for 4 second.");
    document.getElementById("preloader").classList.add("opacity-0")
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
}, 4000);
// -----------------------------back-to-top------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});