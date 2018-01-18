$(document).ready ->
  
  $('.bxslider').bxSlider()

  clients_slider = $('.partners-slider').bxSlider
    speed: 1000
    captions: true
    pager: false
    controls: false
  $('.partners-wrap .buttons-square-box .prev-btn').click ->
    clients_slider.goToPrevSlide()
  $('.partners-wrap .buttons-square-box .next-btn').click ->
    clients_slider.goToNextSlide()


  # banner_slider = $('.banner-slider').bxSlider
  #   # controls: false
  #   pager: false
  #   speed: 1000
  #   pause: 5000
  #   # auto: true
  #   onSliderLoad: (currentIndex)->
  #   onSlideBefore: ($slideElement, oldIndex, newIndex)->
  #     $('.current-slide').text(banner_slider.getCurrentSlide()+1)
  # if banner_slider.getSlideCount
  #   $('.total-slide').text(banner_slider.getSlideCount())
  # $('.main-banner-wrapper .prev-slide').click ->
  #   current = banner_slider.getCurrentSlide()
  #   banner_slider.goToPrevSlide()
  # $('.main-banner-wrapper .next-slide').click ->
  #   current = banner_slider.getCurrentSlide()
  #   banner_slider.goToNextSlide()