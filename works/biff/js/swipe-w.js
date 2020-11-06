$(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: '5%',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: '2%',
        },
        768: {
          slidesPerView: 2,
          spaceBetween: '1%',
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: '270%',
        },
      }
    });
    
});
