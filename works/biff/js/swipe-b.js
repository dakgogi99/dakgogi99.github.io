$(function(){
    var swiper = new Swiper('.swiper-container-b', {
      slidesPerView: 1,
      spaceBetween: '5%',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // init: false,
      
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: '2%',
        },
        768: {
          slidesPerView: 3,
          spaceBetween: '25px',
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: '25px',
        },
      }
    });
    
    
});