$(function() {
  $('.intro').addClass('go');
  function reload() {
    $('.intro').removeClass('go').delay(100).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });
}
var myTimer = setInterval(reload, 4500);

})
