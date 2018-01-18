$(document).on 'click', '.popup-btn', ()->

  attr = $(this).attr('data-btn-attr')
  $('body').addClass('visible-popup')
  $('.popup-wrapper[data-form-attr="'+attr+'"]').addClass('visible')
  
$.clickOut('form',
  ()->
    $('.popup-wrapper').removeClass('visible')
    $('body').removeClass('visible-popup')
  {except: '.popup-btn, form'}
  )