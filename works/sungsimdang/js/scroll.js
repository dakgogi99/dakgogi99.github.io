$(function(){
  
  var winH = $(window).height(),
      $main = $('main'),
      $section = $main.find('.content'),
      $gnb = $('.side'),
      $li = $gnb.find('li'),
      $a = $li.find('a'),
      $span = $li.find('span'),
      
      sp = 1000,
      easing = 'easeOutExpo';
  
  
  //브라우저 높이값 == section 높이값
  $section.height(winH);
  //브라우저 크기가 바뀌면 == section 높이값
  /*$(window).on('resize', function(){
    $section.height($(window).height());
  });
  */
  $gnb.on('click', 'li a', function(e){
    
    var winH = $(window).height(),
        aIndex = $(this).parent().index(),
        posY = winH * aIndex;
    
    $('html, body').stop().animate({
      scrollTop: posY
    }, sp, easing)
    
  });
  
  //스크롤 시 위, 아래로 화면이동시키기
  $section.on('mousewheel', function(e, delta){
   e.preventDefault();
   
   var sIndex = $(this).index(),
       first = 0,
       last = $section.length - 1;
   
   if(delta > 0 && sIndex != first) {
     var before = $(this).prev().offset().top;
     
     $('html, body').stop().animate({
       scrollTop: before
     }, sp, easing)
         
   } else if(delta < 0 && sIndex != last) {
     var after = $(this).next().offset().top;
     
     $('html, body').stop().animate({
       scrollTop: after
     }, sp, easing)
     
   }
   
 });
  
  
  //스크롤바 상단 값에 해당하는 gnb 앵커 활성화
  $(window).on('scroll', function(){
    var winH = $(window).height(),
        scrollTop = $(window).scrollTop() + winH/2,
        count = $section.length;
    
    for(var i=0; i <count; i++){
      if(scrollTop >= winH * i && scrollTop < winH*(i+1)){
        $li.children().removeClass('on');
        $a.children().removeClass('on');
        $span.removeClass('on');
        
        $a.eq(i).children().addClass('on');
        $a.eq(i).siblings().addClass('on');
      }
    }
    
  });
  
  
  
});