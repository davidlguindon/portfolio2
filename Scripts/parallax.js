window.addEventListener('scroll', function(e){
  const target = document.querySelectorAll('.parallax')

  var scrolled = window.pageYOffset;

  var rate = scrolled * -1.5;

  target[0].style.transform = 'translate3d(0px, '+rate+'px, 0px)';
  // target[0].style.transform = 'translate3d('0px, '+rate+'px, '+rate+'px)';
});
