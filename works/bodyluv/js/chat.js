(function($){
  $(function(){
    
    var $qnaFix = $('.qna-fix'),
        $chaton = $qnaFix.find('.chaton'),
        $chatoff = $qnaFix.find('.chatoff'),
        $chatList = $qnaFix.find('.chat-list'),
        $naver = $chatList.find('.naver'),
        $kakao = $chatList.find('.kakao'),
        $web = $chatList.find('.web');
    
    $chaton.on('click', function(){
      $chaton.toggleClass('on');
      $chatoff.toggleClass('on');
      $chatList.toggleClass('on');
      $naver.toggleClass('on');
      $kakao.toggleClass('on');
      $web.toggleClass('on');      
    });
    
    $chatoff.on('click', function(){
      $chaton.removeClass('on');
      $chatList.removeClass('on');
      $chatoff.removeClass('on');
      $naver.removeClass('on');
      $kakao.removeClass('on');
      $web.removeClass('on');
      
    });
    
    
    
  });  
})(jQuery);