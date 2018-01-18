var controller = new ScrollMagic.Controller();

$(function() {
  
  var scrollMagicController = new ScrollMagic();

  var tween = TweenMax.staggerFrom('.figure-anim', 0.5, {
    scale: 0
  }, 0.2);
  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#trigger',
  })
  .setTween(tween)
  .addIndicators({name: "1 (duration: 0)"})
  .addTo(scrollMagicController);
  
   scene.addIndicators();
  
});
