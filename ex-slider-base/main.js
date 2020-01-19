$(document).ready(
  function(){
    $('.next').click(
      function () {
        clicNext();
      }
    );
    $('.prev').click(
      function () {
        clicPrev();
      }
    );
  }
);
function clicNext() {
  // alert('clic Next');
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
  var circleActive = $('i.active');
  var circleNext = circleActive.next();
  // console.log(imageActive);
  // console.log(imageNext);
  if (imageActive.hasClass('.last') == true) {
    imageActive.removeClass('active');
    $('img.first').addClass('active');
    circleActive.removeClass('active');
    $('i.first').addClass('active');
}
  else {
    imageActive.removeClass('active');
    imageNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
}
}


function clicPrev() {
  // alert('clic Prev');
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();
  if (imageActive.hasClass('.first') == true) {
    imageActive.removeClass('active');
    $('img.last').addClass('active');
    circleActive.removeClass('active');
    $('i.last').addClass('active');
  }
  else {
    imageActive.removeClass('active');
    imagePrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
// Bonus
