webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/carlos/Curso-React/NextJs-Course/pages/new-meetup/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar NewMeetupPage = function NewMeetupPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  function addMeetupHandler(_x) {\n    return _addMeetupHandler.apply(this, arguments);\n  }\n\n  function _addMeetupHandler() {\n    _addMeetupHandler = Object(_Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredMeetupData) {\n      var response, data;\n      return _Users_carlos_Curso_React_NextJs_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('/api/new-meetup', {\n                method: 'POST',\n                body: JSON.stringify(enteredMeetupData),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              });\n\n            case 2:\n              response = _context.sent;\n              _context.next = 5;\n              return response.json();\n\n            case 5:\n              data = _context.sent;\n              console.log(data);\n              router.push('/');\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _addMeetupHandler.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAddMeetup: addMeetupHandler\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcz84NDNhIl0sIm5hbWVzIjpbIk5ld01lZXR1cFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGRNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXR1cERhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR3QixXQUdUQyxnQkFIUztBQUFBO0FBQUE7O0FBQUE7QUFBQSxpVEFHeEIsaUJBQWdDQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJDLEtBQUssQ0FBQyxpQkFBRCxFQUFtQjtBQUMzQ0Msc0JBQU0sRUFBRSxNQURtQztBQUUzQ0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLGlCQUFmLENBRnFDO0FBRzNDTSx1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCO0FBRFg7QUFIa0MsZUFBbkIsQ0FEaEM7O0FBQUE7QUFDVUMsc0JBRFY7QUFBQTtBQUFBLHFCQVF1QkEsUUFBUSxDQUFDQyxJQUFULEVBUnZCOztBQUFBO0FBUVVDLGtCQVJWO0FBU0lDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBWixvQkFBTSxDQUFDZSxJQUFQLENBQVksR0FBWjs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUh3QjtBQUFBO0FBQUE7O0FBaUJ4QixzQkFBTyxxRUFBQyx5RUFBRDtBQUFXLGVBQVcsRUFBRWI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FsQkQ7O0dBQU1ILGE7VUFDYUUscUQ7OztLQURiRixhO0FBb0JTQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOZXdNZWV0dXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XG5cbmNvbnN0IE5ld01lZXR1cFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXR1cERhdGEpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9uZXctbWVldHVwJyx7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG5cbiAgICB9IFxuXG4gICAgcmV0dXJuIDxOZXdNZWV0dXAgb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n");

/***/ })

})