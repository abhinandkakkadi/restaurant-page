/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const imageHolder = document.getElementById("image-holder");

  imageHolder.innerHTML = "";
  const contactHolder = document.createElement("div");
  contactHolder.id = "ContactHolder";

  const line1 = document.createElement("h2");
  line1.innerHTML = "Contact";
  line1.id = "contact1";

  const line2 = document.createElement("h2");
  line2.innerHTML = "Abhinand Kakkadi";
  line2.id = "abhinand";
  const line3 = document.createElement("p");
  line3.innerHTML = "9961088604";
  line3.id = "contact2";

  contactHolder.appendChild(line1);
  contactHolder.appendChild(line2);
  contactHolder.appendChild(line3);

  imageHolder.appendChild(contactHolder);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "head": () => (/* binding */ head),
/* harmony export */   "head1": () => (/* binding */ head1)
/* harmony export */ });
function head() {
  console.log(1000);
  // import { head } from "../src/home";
  // head();

  var ul = document.createElement("ul");

  // Create the li elements

  var div = document.createElement("div");
  div.id = "header";

  const anchor1 = document.createElement("a");
  anchor1.href = "#";
  anchor1.textContent = "Home";
  anchor1.id = "home";
  var li1 = document.createElement("li");
  li1.appendChild(anchor1);

  const anchor2 = document.createElement("a");
  anchor2.href = "#";
  anchor2.textContent = "Menu";
  anchor2.id = "menu";
  var li2 = document.createElement("li");
  li2.appendChild(anchor2);

  const anchor3 = document.createElement("a");
  anchor3.href = "#";
  anchor3.textContent = "Contact";
  anchor3.id = "contact";
  var li3 = document.createElement("li");
  li3.appendChild(anchor3);

  // Append the li elements to the ul element
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div.appendChild(ul);

  // Get a reference to the list container div

  // Append the ul element to the list container div
  const listContainer = document.getElementById("content");
  listContainer.appendChild(div);

  const body = document.createElement("div");
  body.setAttribute("class", "main");
  listContainer.appendChild(body);

  const heading = document.createElement("h1");
  heading.innerHTML = "Kakkadi Restaurant";
  body.appendChild(heading);

  const imageHolder = document.createElement("div");
  imageHolder.id = "image-holder";
  imageHolder.innerHTML = "";
  body.appendChild(imageHolder);

  const line1 = document.createElement("p");
  line1.innerHTML = "Best pizza in your country";
  line1.id = "line1";
  const line2 = document.createElement("p");
  line2.innerHTML = "Made with passion since 1908";
  line1.id = "line2";

  const image = document.createElement("img");
  image.src = "../src/cooks.jpeg";
  image.id = "image";

  imageHolder.appendChild(line1);
  imageHolder.appendChild(line2);
  imageHolder.appendChild(image);

  const footer = document.createElement("footer");
  footer.innerHTML = "Copyright 2023 abhinandkakkadi";

  listContainer.appendChild(footer);
}

function head1() {
  const imageHolder = document.getElementById("image-holder");

  imageHolder.innerHTML = "";
  const line1 = document.createElement("p");
  line1.innerHTML = "Best pizza in your country";
  line1.id = "line1";
  const line2 = document.createElement("p");
  line2.innerHTML = "Made with passion since 1908";
  line1.id = "line2";

  const image = document.createElement("img");
  image.src = "../src/cooks.jpeg";
  image.id = "image";

  imageHolder.appendChild(line1);
  imageHolder.appendChild(line2);
  imageHolder.appendChild(image);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replace": () => (/* binding */ replace)
/* harmony export */ });
/* harmony import */ var _src_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home */ "./src/home.js");

function replace() {
  const p = document.getElementById("menu");
  const listContainer = document.getElementById("image-holder");
  listContainer.innerHTML = "";

  const menuHolder = document.createElement("div");
  menuHolder.id = "menuHolder";

  const div1 = document.createElement("div");
  div1.id = "food1";
  const div2 = document.createElement("div");
  div2.id = "food2";
  const div3 = document.createElement("div");
  div3.id = "food3";
  const div4 = document.createElement("div");
  div4.id = "food4";

  menuHolder.appendChild(div1);
  menuHolder.appendChild(div2);
  menuHolder.appendChild(div3);
  menuHolder.appendChild(div4);

  listContainer.appendChild(menuHolder);

  const button2 = document.getElementById("home");
  button2.addEventListener("click", function () {
    (0,_src_home__WEBPACK_IMPORTED_MODULE_0__.head1)();
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home */ "./src/home.js");
/* harmony import */ var _src_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



(0,_src_home__WEBPACK_IMPORTED_MODULE_0__.head)();

const button = document.getElementById("menu");
button.addEventListener("click", function () {
  (0,_src_menu__WEBPACK_IMPORTED_MODULE_1__.replace)();
});

const button3 = document.getElementById("contact");
button3.addEventListener("click", function () {
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBLGNBQWMsT0FBTztBQUNyQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakdvQztBQUM3QjtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0RBQUs7QUFDVCxHQUFHO0FBQ0g7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0c7QUFDRjtBQUNwQywrQ0FBSTs7QUFFSjtBQUNBO0FBQ0EsRUFBRSxrREFBTztBQUNULENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsaURBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWhvbGRlclwiKTtcblxuICBpbWFnZUhvbGRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBjb250YWN0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEhvbGRlci5pZCA9IFwiQ29udGFjdEhvbGRlclwiO1xuXG4gIGNvbnN0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsaW5lMS5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgbGluZTEuaWQgPSBcImNvbnRhY3QxXCI7XG5cbiAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxpbmUyLmlubmVySFRNTCA9IFwiQWJoaW5hbmQgS2Fra2FkaVwiO1xuICBsaW5lMi5pZCA9IFwiYWJoaW5hbmRcIjtcbiAgY29uc3QgbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGluZTMuaW5uZXJIVE1MID0gXCI5OTYxMDg4NjA0XCI7XG4gIGxpbmUzLmlkID0gXCJjb250YWN0MlwiO1xuXG4gIGNvbnRhY3RIb2xkZXIuYXBwZW5kQ2hpbGQobGluZTEpO1xuICBjb250YWN0SG9sZGVyLmFwcGVuZENoaWxkKGxpbmUyKTtcbiAgY29udGFjdEhvbGRlci5hcHBlbmRDaGlsZChsaW5lMyk7XG5cbiAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhvbGRlcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGVhZCgpIHtcbiAgY29uc29sZS5sb2coMTAwMCk7XG4gIC8vIGltcG9ydCB7IGhlYWQgfSBmcm9tIFwiLi4vc3JjL2hvbWVcIjtcbiAgLy8gaGVhZCgpO1xuXG4gIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIGxpIGVsZW1lbnRzXG5cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgY29uc3QgYW5jaG9yMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhbmNob3IxLmhyZWYgPSBcIiNcIjtcbiAgYW5jaG9yMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBhbmNob3IxLmlkID0gXCJob21lXCI7XG4gIHZhciBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpMS5hcHBlbmRDaGlsZChhbmNob3IxKTtcblxuICBjb25zdCBhbmNob3IyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFuY2hvcjIuaHJlZiA9IFwiI1wiO1xuICBhbmNob3IyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGFuY2hvcjIuaWQgPSBcIm1lbnVcIjtcbiAgdmFyIGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkyLmFwcGVuZENoaWxkKGFuY2hvcjIpO1xuXG4gIGNvbnN0IGFuY2hvcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYW5jaG9yMy5ocmVmID0gXCIjXCI7XG4gIGFuY2hvcjMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgYW5jaG9yMy5pZCA9IFwiY29udGFjdFwiO1xuICB2YXIgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaTMuYXBwZW5kQ2hpbGQoYW5jaG9yMyk7XG5cbiAgLy8gQXBwZW5kIHRoZSBsaSBlbGVtZW50cyB0byB0aGUgdWwgZWxlbWVudFxuICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICB1bC5hcHBlbmRDaGlsZChsaTIpO1xuICB1bC5hcHBlbmRDaGlsZChsaTMpO1xuICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgbGlzdCBjb250YWluZXIgZGl2XG5cbiAgLy8gQXBwZW5kIHRoZSB1bCBlbGVtZW50IHRvIHRoZSBsaXN0IGNvbnRhaW5lciBkaXZcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2R5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpblwiKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IFwiS2Fra2FkaSBSZXN0YXVyYW50XCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZUhvbGRlci5pZCA9IFwiaW1hZ2UtaG9sZGVyXCI7XG4gIGltYWdlSG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2VIb2xkZXIpO1xuXG4gIGNvbnN0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxpbmUxLmlubmVySFRNTCA9IFwiQmVzdCBwaXp6YSBpbiB5b3VyIGNvdW50cnlcIjtcbiAgbGluZTEuaWQgPSBcImxpbmUxXCI7XG4gIGNvbnN0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxpbmUyLmlubmVySFRNTCA9IFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTkwOFwiO1xuICBsaW5lMS5pZCA9IFwibGluZTJcIjtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IFwiLi4vc3JjL2Nvb2tzLmpwZWdcIjtcbiAgaW1hZ2UuaWQgPSBcImltYWdlXCI7XG5cbiAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobGluZTEpO1xuICBpbWFnZUhvbGRlci5hcHBlbmRDaGlsZChsaW5lMik7XG4gIGltYWdlSG9sZGVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuaW5uZXJIVE1MID0gXCJDb3B5cmlnaHQgMjAyMyBhYmhpbmFuZGtha2thZGlcIjtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkMSgpIHtcbiAgY29uc3QgaW1hZ2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWhvbGRlclwiKTtcblxuICBpbWFnZUhvbGRlci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsaW5lMS5pbm5lckhUTUwgPSBcIkJlc3QgcGl6emEgaW4geW91ciBjb3VudHJ5XCI7XG4gIGxpbmUxLmlkID0gXCJsaW5lMVwiO1xuICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsaW5lMi5pbm5lckhUTUwgPSBcIk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MDhcIjtcbiAgbGluZTEuaWQgPSBcImxpbmUyXCI7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9jb29rcy5qcGVnXCI7XG4gIGltYWdlLmlkID0gXCJpbWFnZVwiO1xuXG4gIGltYWdlSG9sZGVyLmFwcGVuZENoaWxkKGxpbmUxKTtcbiAgaW1hZ2VIb2xkZXIuYXBwZW5kQ2hpbGQobGluZTIpO1xuICBpbWFnZUhvbGRlci5hcHBlbmRDaGlsZChpbWFnZSk7XG59XG4iLCJpbXBvcnQgeyBoZWFkMSB9IGZyb20gXCIuLi9zcmMvaG9tZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoKSB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWhvbGRlclwiKTtcbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IG1lbnVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SG9sZGVyLmlkID0gXCJtZW51SG9sZGVyXCI7XG5cbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjEuaWQgPSBcImZvb2QxXCI7XG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYyLmlkID0gXCJmb29kMlwiO1xuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2My5pZCA9IFwiZm9vZDNcIjtcbiAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjQuaWQgPSBcImZvb2Q0XCI7XG5cbiAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChkaXYxKTtcbiAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChkaXYyKTtcbiAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChkaXYzKTtcbiAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChkaXY0KTtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIb2xkZXIpO1xuXG4gIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBoZWFkMSgpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGVhZCB9IGZyb20gXCIuLi9zcmMvaG9tZVwiO1xuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gXCIuLi9zcmMvbWVudVwiO1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmhlYWQoKTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlcGxhY2UoKTtcbn0pO1xuXG5jb25zdCBidXR0b24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuYnV0dG9uMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjb250YWN0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==