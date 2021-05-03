$(document).ready(function(){
let options = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: '-49.9% 0px',
  // threshold: .001
}
let observer = new IntersectionObserver(callback, options);

document.querySelectorAll('section').forEach(container => {
  observer.observe(container);
})
function callback(entries, observer){
  entries.forEach((item, i) => {
    if(item.intersectionRatio > 0){
      console.log(item.intersectionRatio);
 sectionRefrence = (item.target.classList);
      var activeSection = document.querySelectorAll( '.' + sectionRefrence);
      activeSection[0].classList.add('active');
      console.log('Watching: ', activeSection);
    }
 //    if(item.isIntersecting){
 //      console.log(item.intersectionRatio);
 // sectionRefrence = (item.target.classList);
 //      var activeSection = document.querySelectorAll( '.' + sectionRefrence);
 //      activeSection[0].classList.add('active');
 //      console.log('Watching: ', activeSection);
 //    }
    if(item.intersectionRatio == 0){
 sectionRefrence = (item.target.classList);
      var activeSection = document.querySelectorAll( '.' + sectionRefrence);
      activeSection[0].classList.remove('active');
    }
    // else{
    //   var activeSection = document.querySelectorAll( '.' + sectionRefrence);
    //   activeSection[0].classList.remove('active');
    // };
  });
}
// let callback = (entries, observer) => {
//   entries.forEach(entry => {
//     // Each entry describes an intersection change for one observed
//     // target element:
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//   });
// };
})

var didScroll;
$(window).scroll(function(event){
  didScroll = true;
});
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);function hasScrolled() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos != 0) {
      var element = document.querySelectorAll(".logoTail2");
      element[0].style.opacity = "0";
    }
    if (currentScrollPos == 0) {
      var element = document.querySelectorAll(".logoTail2");
      element[0].style.opacity = "1";
    }
    if (prevScrollpos > currentScrollPos) {
      var navbar = document.querySelectorAll(".menu.hero");
      navbar[0].style.top = "0";
    }
if (prevScrollpos < currentScrollPos) {
      var navbar = document.querySelectorAll(".menu.hero");
      navbar[0].style.top = "-85px";
    }
    prevScrollpos = currentScrollPos;
  }
}
