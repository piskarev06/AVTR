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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const iconMenu = document.querySelector('.header__icon')\r\nconst menuBody = document.querySelector('.header__menu')\r\nif (iconMenu) {\r\n  iconMenu.addEventListener('click', function (e) {\r\n    document.body.classList.toggle('_lock')\r\n    iconMenu.classList.toggle('_active')\r\n    menuBody.classList.toggle('_active')\r\n  })\r\n}\r\n// End of Burger\r\n\r\nconst menuLinks = document.querySelectorAll('.nav__link[data-goto]')\r\nif (menuLinks.length > 0) {\r\n  menuLinks.forEach((el) => {\r\n    el.addEventListener('click', onMenuLinkClick)\r\n  })\r\n\r\n  function onMenuLinkClick(e) {\r\n    const menuLink = e.target\r\n    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {\r\n      const gotoBlock = document.querySelector(menuLink.dataset.goto)\r\n      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + 25\r\n\r\n      if (iconMenu.classList.contains('_active')) {\r\n        document.body.classList.remove('_lock')\r\n        iconMenu.classList.remove('_active')\r\n        menuBody.classList.remove('_active')\r\n      }\r\n\r\n      window.scrollTo({\r\n        top: gotoBlockValue,\r\n        behavior: 'smooth',\r\n      })\r\n      e.preventDefault()\r\n    }\r\n  }\r\n}\r\n// End of Scroll\r\n\r\nconst swiper = new Swiper('.swiper', {\r\n  // Optional parameters\r\n  loop: true,\r\n\r\n  // If we need pagination\r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n  },\r\n\r\n  // Navigation arrows\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n\r\n  // And if we need scrollbar\r\n  scrollbar: {\r\n    el: '.swiper-scrollbar',\r\n  },\r\n\r\n  slidesPerView: 4,\r\n  spaceBetween: 60,\r\n\r\n  breakpoints: {\r\n    480: {\r\n      slidesPerView: 1,\r\n      spaceBetween: 30,\r\n    },\r\n    640: {\r\n      slidesPerView: 2,\r\n      spaceBetween: 40,\r\n    },\r\n    992: {\r\n      slidesPerView: 3,\r\n      spaceBetween: 40,\r\n    },\r\n    1360: {\r\n      slidesPerView: 4,\r\n      spaceBetween: 60,\r\n    },\r\n  },\r\n})\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });