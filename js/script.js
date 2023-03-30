// mouse cusor disable
document.body.style.cursor = 'none';

// nav category toggle
$(document).on('click', '.nav__list-item.in_depth > p', function () {
  $(this).next("ul").slideToggle(200);
  $(this).parents().toggleClass("active");
  $(this).parent().siblings().removeClass("active").find("ul").slideUp(200);
});

// aos load event
AOS.init({
  easing: 'ease-out',
  duration: 700
});

// scroll event
$(window).on('scroll', function () {
  var headerHeight = $("header").outerHeight()
  if ($(this).scrollTop() >= headerHeight) {
    $("header").addClass("active")
  } else {
    $("header").removeClass("active")
  }
});

// mouse cusor custom
const mainBall = document.querySelector(".circle--1");
const followBall = document.querySelector(".circle--2");
const lerp = (from, to, ease) => (1 - ease) * from + ease * to;
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
let mainCircle = {
  lastX: currentX,
  lastY: currentY,
  size: mainBall.getBoundingClientRect()
};
let followCircle = {
  lastX: currentX,
  lastY: currentY,
  size: followBall.getBoundingClientRect()
};
window.addEventListener("mousemove", e => {
  currentX = e.pageX;
  currentY = e.pageY;
});
const circleMovement = (circle, ease, direction) => {
  if (direction === 'x') {
    return lerp(circle.lastX, currentX, ease);
  }
  return lerp(circle.lastY, currentY, ease);
};
const render = () => {
  mainCircle.lastX = circleMovement(mainCircle, 0.2, 'x');
  mainCircle.lastY = circleMovement(mainCircle, 0.2, 'y');
  mainBall.style.transform = `translate(${mainCircle.lastX - mainCircle.size.width / 2}px, ${mainCircle.lastY - mainCircle.size.height / 2}px)`;
  followCircle.lastX = circleMovement(followCircle, 0.1, 'x');
  followCircle.lastY = circleMovement(followCircle, 0.1, 'y');
  followBall.style.transform = `translate(${followCircle.lastX - followCircle.size.width / 2}px, ${followCircle.lastY - followCircle.size.height / 2}px)`;
  requestAnimationFrame(render);
};

setInterval(() => render(), 1000);
render();