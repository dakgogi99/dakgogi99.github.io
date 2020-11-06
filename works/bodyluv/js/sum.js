$(function(){
  
  $('.product-top').each(function(){
    
    var $contents = $('.product-top').find('.product-wrap'),
        $thums = $contents.find('.sum-list'),
        $thum = $thums.find('li'),
        $gallery = $contents.find('.sum-img'),
        $image = $gallery.find('div');
    
    var sp = 500,
        count = $thum.length;
    
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
      $thums.find('li').removeClass('on');
      $thums.find('li').eq(currentIndex).addClass('on');
    }
    
    $thum.on('click', function(e){
      e.preventDefault();
    });
    
    $thums.on('click', 'li', function(e){
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