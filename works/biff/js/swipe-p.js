$(function(){
    var swiper = new Swiper('.swiper-container-p', {
      slidesPerView: 4,
      spaceBetween: '4%',
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});