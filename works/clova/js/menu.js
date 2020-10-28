(function($){
  $(function(){
   
  var $header = $('header'),
      $menu = $header.find('.m-menu'),
      $gnb = $header.find('.gnb');
   
  $menu.on('click', function(){
    $menu.toggleClass('love');
    $gnb.toggleClass('on');
  });  
  
  $gnb.on('click', 'a', function(){
    $menu.removeClass('love');
    $gnb.removeClass('on')
  });
   
  $(window).on('resize', function(){
    $menu.removeClass('love');
    $gnb.removeClass('on')
  }) 
    
  });
})(jQuery);




