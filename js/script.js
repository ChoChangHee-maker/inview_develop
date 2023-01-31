$(function () {
  // document.body.style.cursor = 'none';
  // var myFullpage = new fullpage('#fullpage', {
  //   anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage'],
  //   /* navigation: true,*/
  //   responsiveWidth: 900,
  // });
  /*메인리뷰슬라이드*/
  var review_slide = new Swiper(".review_slide .mySwiper", {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    speed: 10000,
  });
  var hp_slide = new Swiper(".hompage_slide .mySwiper", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  TweenMax.to($('.more_pj'), .4, { y: -10, repeat: -1, yoyo: true });
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

//setInterval(() => render(), 500);
render();