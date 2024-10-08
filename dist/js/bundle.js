/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sliderBrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sliderBrands */ "./src/js/sliderBrands.js");
/* harmony import */ var _sliderBrands__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sliderBrands__WEBPACK_IMPORTED_MODULE_1__);


console.log('Works!');

/***/ }),

/***/ "./src/js/sliderBrands.js":
/*!********************************!*\
  !*** ./src/js/sliderBrands.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Иници
var bottom = document.querySelector('.brands__button');

if (window.screen.width <= 500) {
  var _Swiper;

  new Swiper('.swiper-container', (_Swiper = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 1.4,
    spaceBetween: 16,
    width: 240
  }, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "scrtollbar", {
    hide: true
  }), _defineProperty(_Swiper, "centeredSlides", true), _Swiper));
  bottom.remove();
} else {
  var wrapper = document.querySelector('.swiper-wrapper');
  wrapper.classList.remove('swiper-wrapper');
  wrapper.classList.add('flex-conteiner');
  var swiperW = document.querySelector('.swiper-container');
  swiperW.classList.remove('swiper-container');
  var typeWrapper = document.querySelector('.types__swiper-wrapper');
  typeWrapper.classList.remove('swiper-wrapper');
  typeWrapper.classList.add('flex-conteiner');
  var typesSwiperC = document.querySelector('.types__swiper-container');
  typesSwiperC.classList.remove('swiper-container');
}

var show = bottom.querySelector('.button__show-more');
var hide = bottom.querySelector('.button__hide-some');
hide.remove();
var iter = 1;
var flexCon = document.querySelector('.flex-conteiner');
var arrowRotate = bottom.querySelector('.button__img');
bottom.addEventListener('click', function () {
  if (iter % 2 == 0) {
    bottom.appendChild(show);
    flexCon.classList.remove('show-brands');
    hide.remove();
    arrowRotate.classList.remove('button__img-show');
  } else {
    arrowRotate.classList.add('button__img-show');
    bottom.appendChild(hide);
    show.remove();
    flexCon.classList.add('show-brands');
  }

  iter = iter + 1;
  console.log(iter);
}); // menu

var menuParant = document.querySelector('.l-menu-block');
var menuBurger = document.querySelector('.burger__icon');
var menuBurgerH = menuParant.querySelector('.m-header__menu-burger');
var menuOverlay = document.querySelector('.menu__overlay');
menuBurger.addEventListener('click', function () {
  menuParant.classList.toggle('menu-trans');
  menuOverlay.classList.add('d-block');
});
menuBurgerH.addEventListener('click', function () {
  menuParant.classList.toggle('menu-trans');
  menuOverlay.classList.remove('d-block');
});
menuOverlay.addEventListener('click', function () {
  menuParant.classList.toggle('menu-trans');
  menuOverlay.classList.remove('d-block');
}); // = types
// let arrowRotate = bottom.querySelector('.button__img')

var typeBtn = document.querySelector('.types__btn');
var typesCon = document.querySelector('.types__conteiner');
typeBtn.addEventListener('click', function () {
  typesCon.classList.toggle('show-types');
});
var readMoreBtn = document.querySelector('.read-more');
var mainText = document.querySelector('.main-text');
var readMoreBtnText = readMoreBtn.querySelector('.read-more__text');
readMoreBtn.addEventListener('click', function () {
  mainText.classList.toggle('show-text');

  if (mainText.classList.contains('show-text')) {
    setTimeout(function () {
      readMoreBtnText.innerText = 'скрыть';
    }, 300);
  } else {
    setTimeout(function () {
      readMoreBtnText.innerText = 'Читать далее';
    }, 500);
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map