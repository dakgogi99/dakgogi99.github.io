(function($){
  $(function(){
   
  var $header = $('header'),
      $menu = $header.find('.btn-m'),
      $gnb = $header.find('.gnb');
   
  $menu.on('click', function(){
    $menu.toggleClass('on');
    $gnb.toggleClass('on');
  });  
  
  $gnb.on('click', 'a', function(){
    $menu.removeClass('on');
    $gnb.removeClass('on')
  });
   
  $(window).on('resize', function(){
    $menu.removeClass('on');
    $gnb.removeClass('on')
  }) 
    
  });
})(jQuery);




