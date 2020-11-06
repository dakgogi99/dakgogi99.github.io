$(function(){
  
  var swiper = new Swiper('.swiper-container-p', {
      slidesPerView: 1,
      spaceBetween: '200%',
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        639: {
          slidesPerView: 2,
//          slidesOffsetAfter: '500px',
          spaceBetween: "200%",
//          spaceBetween: "150px",
        },
        /*768: {
          slidesPerView: 3,
          spaceBetween: "5%",
        },*/
        1000: {
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