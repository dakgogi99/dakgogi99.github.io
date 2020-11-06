$(function(){
  
  $('.filmmarket').each(function(){
    
    var $contents = $('.filmmarket').find('.f-con2'),
        $tabs = $contents.find('.snb'),
        $tab = $tabs.find('a'),
        $images = $contents.find('.f-img'),
        $image = $images.find('a');
    
    var sp = 500,
        count = $tab.length;
    
    var currentIndex = 0,
        interval = 4000,
        timer;
    
    /*수정-스크립트*/
    $image.hide();
      
    function slideShow(love) {
      $image.fadeOut('slow');
      $image.eq(love).fadeIn('slow');
      
      currentIndex = love;
      upDate();
    }
    
    function upDate(){
      $tabs.find('a').removeClass('on');
      $tabs.find('a').eq(currentIndex).addClass('on');
    }
    
    $tab.on('click', function(e){
      e.preventDefault();
    });
    
    $tabs.on('click', 'a', function(e){
      e.preventDefault();
      slideShow($(this).index());
    });
    
    function startTimer () {
      timer = setInterval(function(){
        var nextIndex = (currentIndex+1) % count;
        
        slideShow(nextIndex);
      }, interval);
    }
    
    slideShow(currentIndex);
    startTimer();
    
  });
  
});