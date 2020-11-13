$(function(){
  
  $('.slide-box').each(function(){
    
    var $slideBox = $(this),
        $slide = $slideBox.find('.slide-list'),
        $item = $slide.find('.slide'),
        $indicator = $slideBox.find('.indicator');
    
    var sp = 500,
        count = $item.length,
        indicatorHTML = '';
    
    var currentIndex = 0,
        interval = 4000,
        timer;
    
    //슬라이드 앵커요소($item) 갯수 만큼 반복실행
    //앵커(이미지) 배치 + 인디케이터 만들기
    $item.each(function(){
      indicatorHTML += '<a href="#"></a>'
    });
    //생성된 인디케이터 html요소로 삽입
    //html() append() prepend() : 자식요소로 삽입
    //before() after() : 동위(형제)요소로 삽입
    
    $('.indicator').html(indicatorHTML);
    
    $item.hide();
    
    /*슬라이드 함수 만들기*/
    function slideShow(love) {
      $item.fadeOut(sp);
      $item.eq(love).fadeIn(sp);
      
      currentIndex = love;
      upDate();
    }
    
    /*버튼, 인디케이터 업데이트 함수 만들기*/
    function upDate() {
      $indicator.find('a').removeClass();
      $indicator.find('a').eq(currentIndex).addClass('on');

      //첫 번째 앵커면? 'prev' 요소 숨김
      /*if (currentIndex == 0) {
        $btn.find('.prev').hide()
      } else {
        $btn.find('.prev').show()
      }

      //마지막 앵커면? 'next' 요소 숨김
      if (currentIndex == (count - 1)) {
        $btn.find('.next').hide()
      } else {
        $btn.find('.next').show()
      }*/
    }
    
    
    /*인디케이터 클릭하면==> 해당 앵커로 바로 이동*/ 
    $indicator.on('click', 'a', function(e){
      e.preventDefault();
      
      slideShow($(this).index());
    })
    
    /*일정한 시간마다 실행되는 함수 만들기*/    
    function startTimer () {
      timer = setInterval(function(){
        
        var nextIndex = (currentIndex+1) % count;
        
        slideShow(nextIndex);
        
      }, interval);
    }
    
    /*멈추게 하는 함수 만들기*/      
    /*function stopTimer () {
      clearInterval(timer)
    }
    $slideBox
      .on({
        mouseenter: stopTimer,
        mouseleave: startTimer
      })*/
    
    /*함수 실행(호출)*/
    slideShow(currentIndex);
    startTimer();
  });
  
  
  
  $('.slide-box3').each(function(){
    
    var $slideBox = $(this),
        $slide = $slideBox.find('.slide-list3'),
        $item = $slide.find('.slide3'),
        $indicator3 = $slideBox.find('.indicator3');
    
    var sp = 500,
        count = $item.length,
        indicatorHTML = '';
    
    var currentIndex = 0,
        interval = 4000,
        timer;
    
    //슬라이드 앵커요소($item) 갯수 만큼 반복실행
    //앵커(이미지) 배치 + 인디케이터 만들기
    $item.each(function(){
      indicatorHTML += '<a href="#"></a>'
    });
    //생성된 인디케이터 html요소로 삽입
    //html() append() prepend() : 자식요소로 삽입
    //before() after() : 동위(형제)요소로 삽입
    
    $('.indicator3').html(indicatorHTML);
    
    $item.hide();
    
    /*슬라이드 함수 만들기*/
    function slideShow(love) {
      $item.fadeOut(sp);
      $item.eq(love).fadeIn(sp);
      
      currentIndex = love;
      upDate();
    }
    
    /*버튼, 인디케이터 업데이트 함수 만들기*/
    function upDate() {
      $indicator3.find('a').removeClass();
      $indicator3.find('a').eq(currentIndex).addClass('on');

      //첫 번째 앵커면? 'prev' 요소 숨김
      /*if (currentIndex == 0) {
        $btn.find('.prev').hide()
      } else {
        $btn.find('.prev').show()
      }

      //마지막 앵커면? 'next' 요소 숨김
      if (currentIndex == (count - 1)) {
        $btn.find('.next').hide()
      } else {
        $btn.find('.next').show()
      }*/
    }
    
    
    /*인디케이터 클릭하면==> 해당 앵커로 바로 이동*/ 
    $indicator3.on('click', 'a', function(e){
      e.preventDefault();
      
      slideShow($(this).index());
    })
    
    /*일정한 시간마다 실행되는 함수 만들기*/    
    function startTimer () {
      timer = setInterval(function(){
        
        var nextIndex = (currentIndex+1) % count;
        
        slideShow(nextIndex);
        
      }, interval);
    }
    
    /*멈추게 하는 함수 만들기*/      
   /* function stopTimer () {
      clearInterval(timer)
    }
    $slideBox
      .on({
        mouseenter: stopTimer,
        mouseleave: startTimer
      })*/
    
    /*함수 실행(호출)*/
    slideShow(currentIndex);
    startTimer();
  });
  
  
  
  
  
  
  
});