window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

$(document).off().on("click", function () {
    //Navigation
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var init = function init() {
        body = $('body');
        menu = $('.menu_btn');
        menuItems = $('.nav__list-item');
        applyListeners();
      };
      var applyListeners = function applyListeners() {
        menu.off().click(function () {
            toggleClass(body, 'nav-active');
          });
      };
      var toggleClass = function toggleClass(element, stringClass) {
        if (element.hasClass(stringClass)) element.removeClass(stringClass);
        else element.addClass(stringClass);
      };
      init();
  });