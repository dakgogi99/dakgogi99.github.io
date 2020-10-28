$(function(){
  
  var $header = $('header'),
      $side = $header.find('.side'),
      $li = $side.find('li'),
      $a = $li.find('a'),
      $span = $li.find('span');
  
  //왼쪽 네비 
    /*$a.on('click', function(){
      
      $li.children().removeClass('on');
      $a.children().removeClass('on');
      
      $span.removeClass('on');
        
      $(this).children().addClass('on');
      $(this).siblings().addClass('on');
      
    });*/
  
  //사이드메뉴 토글
  var $header = $('header'),
      $hambtn = $header.find('.ham-btn'),
      $hammenu = $header.find('.ham-menu'),
      $a = $hambtn.find('a');
  
  
  $a.on('click', function(){
//    $hammenu.fadeToggle();
    $hambtn.toggleClass('kong');
    $hammenu.fadeToggle(300);
    
  });
  
  $('main').click(function(){
    $hambtn.removeClass('kong');
    $hammenu.fadeOut(100);
  });
    
  
});















