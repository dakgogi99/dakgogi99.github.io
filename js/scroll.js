$(function(){
  
  var $header = $('header'),
      $inner = $header.find('.inner');
  
  /*var headerOffset = Math.floor($inner.offset().top);
  $offset.text(headerOffset);*/
  
  $(window).scroll(function(){
    
    var scrollTxt = Math.floor($(this).scrollTop());
    
//    $scroll.text(scrollTxt);
    
    if( 250 < scrollTxt) {
      $inner.addClass('on'); 
       } else {
        $inner.removeClass('on');
       }
    
  });
  
});