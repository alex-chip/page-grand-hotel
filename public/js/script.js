(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var toggleMenu = function toggleMenu(navId, menuId, toggleB) {
    var nav = navId,
        menu = menuId,
        toggleButton = toggleB;

    function showNav() {
        nav.classList.toggle('is-active');
    }

    if (nav) {
        if (toggleButton) {
            toggleButton.addEventListener('click', showNav);
        } else {
            console.log('Not found ' + toggleButton);
        }
    } else {
        console.error('Not found ' + navId);
    }
};

var toggleB = document.getElementById('navId-toggle');
var menuId = document.getElementById('menuId');
var navId = document.getElementById('navId');

toggleMenu(navId, menuId, toggleB);

},{}],2:[function(require,module,exports){
'use strict';

var _navigation_off_canvas = require('./components/navigation_off_canvas');

var _navigation_off_canvas2 = _interopRequireDefault(_navigation_off_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./components/navigation_off_canvas":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uX29mZl9jYW52YXMuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sYUFBYSxTQUFiLFVBQWEsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixPQUFoQixFQUE0QjtBQUMzQyxRQUFJLE1BQU0sS0FBVjtBQUFBLFFBQ0ksT0FBTyxNQURYO0FBQUEsUUFFSSxlQUFlLE9BRm5COztBQUlBLGFBQVMsT0FBVCxHQUFtQjtBQUNmLFlBQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDSDs7QUFFRCxRQUFJLEdBQUosRUFBUztBQUNMLFlBQUcsWUFBSCxFQUFpQjtBQUNiLHlCQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLE9BQXZDO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsb0JBQVEsR0FBUixnQkFBeUIsWUFBekI7QUFDSDtBQUNKLEtBTkQsTUFNTztBQUNILGdCQUFRLEtBQVIsZ0JBQTJCLEtBQTNCO0FBQ0g7QUFDSixDQWxCRDs7QUFvQkEsSUFBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFoQjtBQUNBLElBQU0sU0FBUyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU0sUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDs7QUFFQSxXQUFXLEtBQVgsRUFBaUIsTUFBakIsRUFBd0IsT0FBeEI7Ozs7O0FDeEJBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHRvZ2dsZU1lbnUgPSAobmF2SWQsIG1lbnVJZCwgdG9nZ2xlQikgPT4ge1xuICAgIGxldCBuYXYgPSBuYXZJZCxcbiAgICAgICAgbWVudSA9IG1lbnVJZCxcbiAgICAgICAgdG9nZ2xlQnV0dG9uID0gdG9nZ2xlQlxuXG4gICAgZnVuY3Rpb24gc2hvd05hdigpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgfVxuXG4gICAgaWYgKG5hdikge1xuICAgICAgICBpZih0b2dnbGVCdXR0b24pIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOYXYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vdCBmb3VuZCAke3RvZ2dsZUJ1dHRvbn1gKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgTm90IGZvdW5kICR7bmF2SWR9YClcbiAgICB9XG59XG5cbmNvbnN0IHRvZ2dsZUIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2SWQtdG9nZ2xlJylcbmNvbnN0IG1lbnVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SWQnKVxuY29uc3QgbmF2SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2SWQnKVxuXG50b2dnbGVNZW51KG5hdklkLG1lbnVJZCx0b2dnbGVCKVxuIiwiaW1wb3J0IG5hdmlnYXRpb25PZmZDYW52YXMgZnJvbSAnLi9jb21wb25lbnRzL25hdmlnYXRpb25fb2ZmX2NhbnZhcydcbiJdfQ==
