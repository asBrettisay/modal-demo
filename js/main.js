$(document).ready(function() {
  $('.curtain').hide();

  $('#modal-activator').on('click', function(e) {
    $('.curtain').show();
  })

  $('.modal').on('click', function(e) {
    e.stopPropagation();
  })

  $('#deactivate-modal').on('click', function(e) {
    $('.curtain').hide();
  })

  $('.curtain').on('click', function(e) {
    $('.curtain').hide();
  })

})
