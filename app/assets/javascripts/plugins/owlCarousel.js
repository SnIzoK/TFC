$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin:30,
    navContainer: '#customNav',
    nav: false,
    dots: false,
    rtl:true,
    responsive: {
      0: {
        items: 1.5
      },
      600: {
        items: 1.5
      },
      1200: {
        items: 2.5
      }
    }
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  $('.customPrevBtn').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
    })

});
// $(document).ready(function(){
//   $qnty = $('.owl-dot').length
//   $('.owl-dot').css("width","calc(100% / " + $qnty + ")")
// });