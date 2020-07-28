$(".toggle-nav").click(function(){
  $(".menu ul").toggleClass('active');
});

function UnSelectAll() {
  var items = document.getElementsByClassName('uncheck');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox')
    items[i].checked = false;
  }
}
function UnSelectAll2() {
  var items = document.getElementsByClassName('uncheck2');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox')
    items[i].checked = false;
  }
}
function UnSelectAll3() {
  var items = document.getElementsByClassName('uncheck3');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox')
    items[i].checked = false;
  }
}
function UnSelectAll4() {
  var items = document.getElementsByClassName('uncheck4');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox')
    items[i].checked = false;
  }
}
// Get the modal
// var modal = document.getElementById("myModal");
//
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// function moogle() {
//   modal.style.display = "block";
// }
//
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// Make the DIV element draggagle:
// dragElement(document.getElementById("modalcontent"));
//
// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }
//
//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }
//
//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }
//
//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// $("#bulbSVG").mouseover(function(){
//   var elements = document.getElementById('bulbOn1');
//   elements.beginElement();
// });
// $("#monitorSVG").mouseover(function(){
//   var elements = document.getElementById('monitorOn1');
//   elements.beginElement();
// });
// $("#houseSVG").mouseover(function(){
//   var elements = document.getElementById('houseOn1');
//   elements.beginElement();
// });

var mouseX;
var mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX;
   mouseY = e.pageY;
   // console.log(mouseX mouseY);
   // console.log('mouseworking');
});
// $(".section2").mouseover(function(){
//   var elements = document.getElementById('bulbOn');
//    setTimeout(function(){ elements.beginElement(); }, 500);
//   // $('#testid').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
//   // $('#testid').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
//   console.log(mouseY,'test',mouseX);
// });
$(document).ready(function(){
let options = {
  // root: document.querySelector('#scrollArea'),
  // rootMargin: '0px',
  threshold: 1
}
let observer = new IntersectionObserver(callback, options);

document.querySelectorAll('#bulbSVG').forEach(container => {
  observer.observe(container);
})
function callback(entries, observer){
  entries.forEach((item, i) => {
    if(item.isIntersecting){
      console.log('container activated', item.intersectionRatio);
        var elements = document.getElementById('bulbOn');
    setTimeout(function(){ elements.beginElement(); }, 00);
    }
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

$(document).ready(function(){
let options = {
  // root: document.querySelector('#scrollArea'),
  // rootMargin: '0px',
  threshold: .1
}
let observer = new IntersectionObserver(callback, options);

document.querySelectorAll('section').forEach(container => {
  observer.observe(container);
})
function callback(entries, observer){
  entries.forEach((item, i) => {
    if(item.isIntersecting){
 sectionRefrence = (item.target.classList);
      var activeSection = document.querySelectorAll( '.' + sectionRefrence);
      activeSection[0].classList.add('active');
      // console.log('Watching: ', activeSection);
    }
    if(item.intersectionRatio < .1){
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
