$(function(){
  
  var $webWork = $('#web'),
      $works = $webWork.find('.work'),
      $webModal = $('.webmodal'),
      $wModal = $webModal.find('.w-modal'),
      $modaCon = $wModal.find('.modal-contents'),
      $close = $modaCon.find('.close');
  
  $works.on('click', function(){
    var i = $(this).index();
    $wModal.eq(i).fadeIn();
    $modaCon.fadeIn();
    $('body').css({overflowY: 'hidden'});
  });
  
  /*close*/
  $close.on('click', function(e){
    e.preventDefault();
    $modaCon.hide();
    $wModal.stop().animate({scrollTop: 0},0);
    $wModal.hide();
    $('body').css({overflowY: 'scroll'});
  });
  
  
  var $editWork = $('#edit'),
      $works = $editWork.find('.work'),
      $editModal = $('.editmodal'),
      $eModal = $editModal.find('.e-modal'),
      $modaCon = $eModal.find('.modal-contents'),
      $close = $modaCon.find('.close');
  
  $works.on('click', function(){
    var i = $(this).index();
    $eModal.eq(i).fadeIn();
    $modaCon.fadeIn();
    $('body').css({overflowY: 'hidden'});
  });
  
  /*close*/
  $close.on('click', function(e){
    e.preventDefault();
    $modaCon.hide();
    $eModal.stop().animate({scrollTop: 0},0);
    $eModal.hide();
    $('body').css({overflowY: 'scroll'});
  });
  
  
});