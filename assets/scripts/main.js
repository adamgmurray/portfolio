$(document).ready(function(){
$(window).scroll(function() {
if($(window).width() < 816)
   if ($(window).scrollTop()>50) { 
      $('.smile').css('width', '25%');
}   
if ($(window).scrollTop()>450) {
    $('.work').css('margin-left', '10px');
    $('.work').css('opacity', '1');
    $('.smile').css('width', '25%');
}
  if ($(window).scrollTop()>250) {
    $('.harley').css('color', 'rgb(234, 195, 146)');
}
    if ($(window).scrollTop()>250) {
    $('.henning').css('color', 'rgb(234, 195, 146)');
}
    if ($(window).scrollTop()>250) {
    $('.apple').css('color', 'rgb(234, 195, 146)');
}
     if ($(window).scrollTop()>250) {
    $('.reuters').css('color', 'rgb(234, 195, 146)');
}

});       
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}