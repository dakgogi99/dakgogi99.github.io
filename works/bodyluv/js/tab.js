(function($){
  
  $(function(){
    
    var $detail = $('.product-detail'),
        $tabMenu = $detail.find('.tabMenu'),
        $tabs = $tabMenu.find('.tabs'),
        $tab = $tabs.find('li'),
        $tabContents = $detail.find('.tabContents'),
        $conDetail = $tabContents.find('.tab-con');
    
    $tab.on('click', 'a', function(e){
      e.preventDefault();
      
      $tab.removeClass('on');
      $(this).parent().addClass('on');
      
      $conDetail.fadeOut();
      $($(this).attr('href')).fadeIn();
      
      /*var i = $(this).parent().index();
      
      $conDetail.removeClass('on');
      $conDetail.eq(i).addClass('on');*/
      
       
    }); 
      
//    $('.tabs li:first-child a').trigger('click');
    location.reload();
        
    });
  
})(jQuery);