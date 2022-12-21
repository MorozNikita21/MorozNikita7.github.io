$(function(){
    $('.slid').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 3500,
        responsive:[

            {
            breakpoint: 480,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
            }
            }
        ]
    });
})