"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/workspaces/xkcd-app/pages/index.js\";\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var lastestComics = _ref.lastestComics;\n  console.log(lastestComics);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: \"text-3xl font-bold text-center mb-10\",\n        children: \"Latest Comics\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n        className: \"grid grid-cols-1 gap-2 max-w-md m-auto sm:grid-cols-2\",\n        children: lastestComics.map(function (comic) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            href: \"/comic/\".concat(comic.id),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"mb-4 pb-4 m-auto\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-sm text-center\",\n                children: comic.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 13\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                width: 300,\n                height: 300,\n                layout: \"intrinsic\",\n                objectFit: \"contain\",\n                src: comic.img,\n                alt: comic.alt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 11\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }, _this)\n          }, comic.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUVlLFNBQVNJLElBQVQsT0FBK0I7RUFBQTs7RUFBQSxJQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCO0VBQzVDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWjtFQUNBLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx1QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUlFLDhEQUFDLDBEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKRixlQUtFO01BQUEsd0JBQ0U7UUFBSSxTQUFTLEVBQUMsc0NBQWQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQVMsU0FBUyxFQUFDLHVEQUFuQjtRQUFBLFVBQ0NBLGFBQWEsQ0FBQ0csR0FBZCxDQUFrQixVQUFBQyxLQUFLLEVBQUU7VUFDNUIsb0JBQ0ksOERBQUMsbURBQUQ7WUFBcUIsSUFBSSxtQkFBWUEsS0FBSyxDQUFDQyxFQUFsQixDQUF6QjtZQUFBLHVCQUNFO2NBQUssU0FBUyxFQUFDLGtCQUFmO2NBQUEsd0JBQ0E7Z0JBQUksU0FBUyxFQUFDLCtCQUFkO2dCQUFBLFVBQStDRCxLQUFLLENBQUNFO2NBQXJEO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsU0FEQSxlQUVGLDhEQUFDLG9EQUFEO2dCQUFPLEtBQUssRUFBRSxHQUFkO2dCQUFtQixNQUFNLEVBQUUsR0FBM0I7Z0JBQWdDLE1BQU0sRUFBQyxXQUF2QztnQkFBbUQsU0FBUyxFQUFDLFNBQTdEO2dCQUF1RSxHQUFHLEVBQUVGLEtBQUssQ0FBQ0csR0FBbEY7Z0JBQXVGLEdBQUcsRUFBRUgsS0FBSyxDQUFDSTtjQUFsRztnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFNBRkU7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREYsR0FBV0osS0FBSyxDQUFDQyxFQUFqQjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREo7UUFTRCxDQVZJO01BREQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBd0JEO0tBMUJ1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgZnMgZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgeyBJbWFnZSwgTGluayB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7bGFzdGVzdENvbWljc30pIHtcbiAgY29uc29sZS5sb2cobGFzdGVzdENvbWljcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi0xMCc+TGF0ZXN0IENvbWljczwvaDI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBnYXAtMiBtYXgtdy1tZCBtLWF1dG8gc206Z3JpZC1jb2xzLTInPlxuICAgICAgICB7bGFzdGVzdENvbWljcy5tYXAoY29taWM9PntcbiAgICAgIHJldHVybihcbiAgICAgICAgICA8TGluayBrZXk9e2NvbWljLmlkfSBocmVmPXtgL2NvbWljLyR7Y29taWMuaWR9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBwYi00IG0tYXV0byc+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1zbSB0ZXh0LWNlbnRlcic+e2NvbWljLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPEltYWdlIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSBsYXlvdXQ9J2ludHJpbnNpYycgb2JqZWN0Rml0PSdjb250YWluJyBzcmM9e2NvbWljLmltZ30gYWx0PXtjb21pYy5hbHR9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICBcbiAgICAgIClcbiAgICB9KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIoJy4vY29taWNzJyk7XG4gY29uc3QgbGFzdGVzdENvbWljc0ZpbGVzID0gZmlsZXMuc2xpY2UoLTgsIGZpbGVzLmxlbmd0aCk7XG4gY29uc3QgcHJvbWlzZXNSZWFkRmlsZXMgPSBsYXN0ZXN0Q29taWNzRmlsZXMubWFwKGFzeW5jKGZpbGUpPT57XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShgLi9jb21pY3MvJHtmaWxlfWAsICd1dGYtOCcpO1xuICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50KVxuIH0pXG5jb25zdCBsYXN0ZXN0Q29taWNzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXNSZWFkRmlsZXMpXG4gIHJldHVybntcbiAgICBwcm9wczp7XG4gICAgICBsYXN0ZXN0Q29taWNzXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkltYWdlIiwiTGluayIsIkhvbWUiLCJsYXN0ZXN0Q29taWNzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImNvbWljIiwiaWQiLCJ0aXRsZSIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});