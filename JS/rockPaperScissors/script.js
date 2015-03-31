$(document).ready(function() {
  $('#rock').click(function(e) {
    e.preventDefault();
    $('#rock img').addClass('checked');
    $('#paper img').removeClass('checked');
    $('#scissors img').removeClass('checked');
  });
  
  $('#paper').click(function(e) {
    e.preventDefault();
    $('#rock img').removeClass('checked');
    $('#paper img').addClass('checked');
    $('#scissors img').removeClass('checked');
  });
  
  $('#scissors').click(function(e) {
    e.preventDefault();
    $('#rock img').removeClass('checked');
    $('#paper img').removeClass('checked');
    $('#scissors img').addClass('checked');
  })
})