$(function(){
  
  var swiper = new Swiper('.swiper-container-p', {
      slidesPerView: 1,
      spaceBetween: '100%',
      // init: false,
      breakpoints: {
        639: {
          slidesPerView: 2,
//          slidesOffsetAfter: '500px',
          spaceBetween: "200%",
//          spaceBetween: "150px",
        },
        768: {
          slidesPerView: 2,
          spaceBetween: "200%",
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: "10%",
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: "44%",
        },
      }
    });
    
});