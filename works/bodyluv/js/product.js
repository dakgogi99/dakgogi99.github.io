$(function(){
  $('.btnM').click(function(){
    var $input = $(this).parent().find('input'),
        v = $input.val();
    
    if(!v)
      {v = 0;}
    else
      {v *= 1;}
    
    $input.val(v - 1);    
  });
  
  $('.btnP').click(function(){
    var $input = $(this).parent().find('input'),
        v = $input.val();
    
    if(!v)
      {v = 0;}
    else
      {v *= 1;}
    
    $input.val(v + 1);  
  });
  
});