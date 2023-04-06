document.addEventListener('DOMContentLoaded', function() {
  var allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
          if (!window.smsFormLoaded) {
            window.smsFormLoaded = true;
            smsForm();
          }
					// scroll
					var control = document.getElementById('control');
					var bar = document.querySelector('.bar');
					var RADIUS = 54;
					var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
					function progress(per) {
						const scrollTop = document.documentElement.scrollTop;
						const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
						const scrollWidth = (scrollTop / height) * 100;
						const perResult = scrollWidth / 100;
						var dashoffset = CIRCUMFERENCE * (1 - perResult);
						bar.style.strokeDashoffset = dashoffset;
					}
					bar.style.strokeDasharray = CIRCUMFERENCE;
					progress(0);
					const onScroll = () => {
						progress()
					}
					window.addEventListener('scroll', () => onScroll())
        }
      };
      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });
});

function smsForm(){
  var autoHypenPhone = function (str) {
    str = str.replace(/[^0-9]/g, "");
    var tmp = "";
    if (str.length < 4) {
      return str;
    } else if (str.length < 7) {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3);
      return tmp;
    } else if (str.length < 11) {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3, 3);
      tmp += "-";
      tmp += str.substr(6);
      return tmp;
    } else {
      tmp += str.substr(0, 3);
      tmp += "-";
      tmp += str.substr(3, 4);
      tmp += "-";
      tmp += str.substr(7);
      return tmp;
    }
    return str;
  };
  var phoneNum = document.getElementById("phoneNum");
  phoneNum.onkeyup = function () {
    this.value = autoHypenPhone(this.value);
  };
  var consentBtn = document.querySelector(".consentWrapper label");
  var sendBtn = document.querySelector(".sendBtn");
  var smsCompany = document.querySelector(".smsCompany");
  var smsHompage = document.querySelector(".smsHompage")
  var smsName = document.querySelector(".smsName");
  var smsState = document.querySelector(".smsState");
  var smsPhone = document.querySelector(".smsPhone");
  var smsEmail = document.querySelector(".smsEmail");
  var smsLocate = document.querySelector(".smsLocate");
  var smsConsent = document.querySelector("#smsConsent");
  var finalMsg = document.querySelector(".finalMsg");

  $(".consentWrapper label").click(function () {
    if (!smsConsent.checked) {
      smsConsent.checked = true;
    } else {
      smsConsent.checked = false;
    }
  });
  $(sendBtn).click(function () {
    if (!smsCompany.value) {
      alert("회사명을 입력해주세요.");
      smsCompany.focus();
      return;
    } else if (!smsName.value) {
      alert("성함을 입력해주세요.");
      smsName.focus();
      return;
    } else if (!smsPhone.value) {
      alert("전화번호를 입력해주세요.");
      smsPhone.focus();
      return;
    } else if (!smsLocate.value) {
      alert("문의내용을 입력해주세요.");
      smsLocate.focus();
      return;
    } else if (!smsConsent.checked) {
      alert("개인정보취급방침 동의에 체크해주세요.");
      return;
    } else {
      var combineMsg =
        "[I&V 문의]" +
        " 회사(단체)명:" +
        smsCompany.value +
        " 홈페이지:" +
        smsHompage.value +
        " 이름:" +
        smsName.value +
        " 직급:" +
        smsState.value +
        " 연락처:" +
        smsPhone.value +
        " 이메일:" +
        smsEmail.value +
        " 문의내용:" +
        smsLocate.value;
      finalMsg.value = combineMsg;
      alert("전송이 완료되었습니다!");
      document.nicesms.submit();
    }
  });
}

$(document).off().on("click", function () {
    //Navigation
      var body = undefined;
      var menu = undefined;
      var menu_inq = undefined;
      var menuItems = undefined;
      var init = function init() {
        body = $('body');
        menu = $('.menu.flex');
        menu_inq = $('.inq_ative_btn');
        menuItems = $('.nav__list-item');
        applyListeners();
        applyListeners02();
      };
      var applyListeners = function applyListeners() {
        menu.click(function () {
          $("body").addClass('nav-active');
        });
        $("body.nav-active").find(menu).click(function(){
          $("body").removeClass("nav-active inquiry-active")
        })
      };
      var applyListeners02 = function applyListeners02() {
        menu_inq.click(function () {
          $("body").addClass('inquiry-active');
        });
        $("body.inquiry-active").find(menu).click(function(){
          $("body").removeClass("nav-active inquiry-active")
        })
      };
      var toggleClass = function toggleClass(element, stringClass) {
        if (element.hasClass(stringClass)) element.removeClass(stringClass);
        else element.addClass(stringClass);
      };
      init();
  });