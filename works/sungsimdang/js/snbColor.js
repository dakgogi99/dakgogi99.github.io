$(function(){
  
  var winH = $(window).height(),
      $main = $('main'),
      $menu = $main.find('#menu'),
      $brand = $main.find('#brand'),
      $community = $main.find('#community'),
      $family = $main.find('#family'),
      $side = $main.find('.side'),
      $logo = $main.find('.logo'),
      $gnb = $main.find('.gnb'),
      $hamBtn = $main.find('.ham-btn'),
      $rMenu = $main.find('.r-menu'),
      $topBtn = $main.find('.top-btn'),
      $section = $main.find('.content'),
      $menuH = $menu.find(winH),
      $brandH = $brand.find(winH),
      $communityH = $community.find(winH),
      $familyH = $family.find(winH);
  
  $(window).on('scroll', function(){
    
    var scrollTop = $(window).scrollTop() + winH/2;
    
    if($(winH).scrollTop < menuH){
      $logo.addClass('black');
      $side.addClass('black');
      $hamBtn.addClass('black');
      $gnb.addClass('black');
      $rMenu.addClass('black');
      $topBtn.addClass('black');
    } else if($(winH).scrollTop < brandH) {
      $logo.addClass('black');
      $side.addClass('black');
      $hamBtn.addClass('black');
      $gnb.addClass('black');
      $rMenu.addClass('black');
      $topBtn.addClass('black');
    } else if($(winH).scrollTop < communityH) {
      $logo.addClass('black');
      $side.addClass('black');
      $gnb.addClass('black');
      $hamBtn.removeClass('black');
      $rMenu.removeClass('black');
      $topBtn.removeClass('black');
    } else if ($(winH).scrollTop < familyH) {
      $logo.removeClass('black');
      $side.removeClass('black');
      $gnb.removeClass('black');
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
    
  });
  
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
  
  
  
  
  $win.trigger('scroll');
    
  /*$(window).on('scroll', function(){
    
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
    
  });
  */
  
  /*$(window).on('scroll', function(){
    
    if ($(window).scrollTop = ('#family')) {
      $logo.removeClass('black');
      $gnb.removeClass('black');
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