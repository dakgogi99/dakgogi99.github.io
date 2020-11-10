$(function(){
  
  var $main = $('body'),
      $visual = $main.find('.visual-con'),
      $menu = $main.find('.menu-con'),
      $brand = $main.find('.brand-con'),
      $community = $main.find('.community-con'),
      $family = $main.find('.family-con'),
      $side = $main.find('.side'),
      $logo = $main.find('.logo'),
      $gnb = $main.find('.gnb'),
      $hamBtn = $main.find('.ham-btn'),
      $rMenu = $main.find('.r-menu'),
      $topBtn = $main.find('.top-btn');

  
  //스크롤바 상단 값에 해당하는 gnb 앵커 활성화
  $(window).on('scroll', function(){
    var winH = $(window).height(),
        scrollTop = $(window).scrollTop() + winH/2,
        menuH = $menu.offset().top,
        brandH = $brand.offset().top,
        communityH = $community.offset().top,
        familyH = $family.offset().top;
    
    if(scrollTop >= menuH && scrollTop < brandH){
      $topBtn.fadeIn();
      $logo.addClass('black');
      $side.addClass('black');
      $gnb.addClass('black');
      $hamBtn.addClass('bgblack');
      $rMenu.addClass('bgblack');
      $topBtn.addClass('bgblack');
      } else if(scrollTop >= brandH && scrollTop < communityH) {
      $rMenu.removeClass('bgblack');
      $hamBtn.removeClass('bgblack');
      $topBtn.removeClass('bgblack');
      $logo.addClass('black');
      $side.addClass('black');
      $gnb.addClass('black');
      $rMenu.addClass('black'); 
      $hamBtn.addClass('black');
      $topBtn.fadeIn();
      $topBtn.addClass('black'); 
      } else if(scrollTop >= communityH && scrollTop < familyH) {
      $logo.addClass('black');
      $side.addClass('black');
      $gnb.addClass('black');
      $rMenu.addClass('bgblack');
      $hamBtn.addClass('bgblack');
      $topBtn.fadeOut();
      } else if(scrollTop >= familyH) {
        $side.removeClass('black');
        $logo.removeClass('black');
        $gnb.removeClass('black');
        $hamBtn.removeClass('black');
        $rMenu.removeClass('black');
        $topBtn.removeClass('black');
        $hamBtn.removeClass('bgblack');
        $rMenu.removeClass('bgblack');
        $topBtn.removeClass('bgblack');
        $topBtn.fadeIn();
      } else {
        $side.removeClass('black');
        $logo.removeClass('black');
        $gnb.removeClass('black');
        $hamBtn.removeClass('black');
        $rMenu.removeClass('black');
        $topBtn.removeClass('black');
        $hamBtn.removeClass('bgblack');
        $rMenu.removeClass('bgblack');
        $topBtn.removeClass('bgblack');
        $topBtn.fadeOut();
      }
    
  });
  
});
