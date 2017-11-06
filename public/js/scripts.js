

$( document ).ready(function() {


    document.querySelector('#labeltext').addEventListener('click', () => {
        $(".simple-text").focus()
    })
    
    $(".simple-text").each(function() {
 
      if ($(this).val() != "") {

        $(this).parent().addClass("animation");
      }
    });
  });
  
  //Add animation when input is focused
  $(".simple-text").focus(function(){
    $(this).parent().addClass("animation animation-color");
  });
  
  //Remove animation(s) when input is no longer focused
  $(".simple-text").focusout(function(){
    if($(this).val() === "")
      $(this).parent().removeClass("animation");
    $(this).parent().removeClass("animation-color");
  })