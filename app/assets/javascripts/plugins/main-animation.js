
var tl = new TimelineLite();
tl.from(".fadeIn", 0.3, {scale: 0, opacity:0})
  .to(".left-to-right", 0.3, {x:0, y:"-50%", opacity:1, delay:0.2})
  .to(".left-to-right2", 0.3, {x:0, y:"-50%", opacity:1, delay:0.2})
  .from(".fadeBtn", 0.3, {scale:0, opacity:0, delay:0.3})

// TweenMax.from(".right-to-left", 0.5 {x:100, delay: 0.5})
// TweenMax.from(".top-to-bottom", 0.5 {y:100, delay: 0.5})

// TweenMax.from(".fadeIn", 0.5, {scale: 2, opacity:0})
// TweenMax.to(".left-to-right", 0.5, {x:0, y:"-50%", opacity:1, delay:0.5})
// TweenMax.to(".left-to-right2", 0.5, {x:0, y:"-50%", opacity:1, delay:0.7})
// TweenMax.from(".fadeBtn", 0.3, {scale:0, opacity:0, delay:1})

