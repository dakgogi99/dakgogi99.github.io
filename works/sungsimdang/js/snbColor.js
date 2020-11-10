$(function(){
  
//  var winH = $(window).height(),
//      $main = $('main'),
//      $menu = $main.find('#menu'),
//      $brand = $main.find('#brand'),
//      $community = $main.find('#community'),
//      $family = $main.find('#family'),
//      $side = $main.find('.side'),
//      $logo = $main.find('.logo'),
//      $gnb = $main.find('.gnb'),
//      $hamBtn = $main.find('.ham-btn'),
//      $rMenu = $main.find('.r-menu'),
//      $topBtn = $main.find('.top-btn'),
//      $section = $main.find('.content'),
//      $menuH = $menu.offset().top,
//      $brandH = $brand.offset().top,
//      $communityH = $community.offset().top,
//      $familyH = $family.offset().top;
  
    var $main = $('main'),
        $menu = $main.find('#manu'),
        $brand = $main.find('#brand');
  
  $($menu).css({
    
    
    
  });
    
  /*$(window).ready(function(){
    
    $(wiindow).scroll(function(){
      
      var winH = $(window).height(),
      scrollTop = $(window).scrollTop() + winH / 2;
      
      if(scrollTop < $menuH ){
        $logo.fadeOut('black');
        $side.fadeOut('black');
        $hamBtn.fadeOut('black');
        $gnb.fadeOut('black');
        $rMenu.fadeOut('black');
        $topBtn.fadeOut('black');
        
      } else if (scrollTop < $familyH){
        $logo.addClass('black');
        $side.addClass('black');
        $hamBtn.addClass('black');
        $gnb.addClass('black');
        $rMenu.addClass('black');
        $topBtn.addClass('black');       
      } else {
      $logo.removeClass('black');
      $side.removeClass('black');
      $hamBtn.removeClassClass('black');
      $gnb.removeClass('black');
      $rMenu.removeClass('black');
      $topBtn.removeClass('black');
    }
    });
    
  });*/
  
  /*$(window).scroll(function(){
    
    var winH = $(window).height(),
      scrollTop = $(window).scrollTop() + winH / 2,
      count = $section.length;
    
    for (var i = 0; i < count, i > 1; i++) {
      if (winH * i <= scrollTop && winH * (i+1) > scrollTop) {
      $logo.addClass('black');
      $side.addClass('black');
      $hamBtn.addClass('black');
      $gnb.addClass('black');
      $rMenu.addClass('black');
      $topBtn.addClass('black');
      } else {
      $logo.removeClass('black');
      $side.removeClass('black');
      $hamBtn.removeClassClass('black');
      $gnb.removeClass('black');
      $rMenu.removeClass('black');
      $topBtn.removeClass('black');
      }
    }
        
  });*/
  
  
  
  
  /*$win.trigger('scroll');
    
  $(window).on('scroll', function(){
    
    if ($(window).scrollTop = ('#community')) {
      $logo.addClass('black');
      $gnb.addClass('black');
      $hamBtn.removeClass('black');
      $rMenu.removeClass('black');
      $topBtn.removeClass('black');
    } else {
      $logo.removeClass('black');
      $side.removeClass('black');
      $hamBtn.removeClassClass('black');
      $gnb.removeClass('black');
      $rMenu.removeClass('black');
      $topBtn.removeClass('black');
    }
    
  });*/
  
  
});