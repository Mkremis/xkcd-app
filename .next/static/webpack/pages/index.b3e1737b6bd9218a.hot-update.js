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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/workspaces/xkcd-app/pages/index.js\";\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var lastestComics = _ref.lastestComics;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Head, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n        children: \"xkcd - Search Comics\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Comics for developers\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        className: \"text-3xl font-bold text-center mb-10\",\n        children: \"Latest Comics\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: \"grid grid-cols-1 gap-2 m-auto sm:grid-cols-2 md:grid-cols-3 items-baseline\",\n        children: lastestComics.map(function (comic) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n            href: \"/comic/\".concat(comic.id),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"mb-4 pb-4 m-auto\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-sm text-center pb-2\",\n                children: comic.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 13\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                width: comic.width,\n                height: comic.height,\n                src: comic.img,\n                alt: comic.alt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 11\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }, _this)\n          }, comic.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Footer__WEBPACK_IMPORTED_MODULE_0__.Footer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7OztBQUVlLFNBQVNHLElBQVQsT0FBK0I7RUFBQTs7RUFBQSxJQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCO0VBQzVDLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsSUFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFNLElBQUksRUFBQyxhQUFYO1FBQXlCLE9BQU8sRUFBQztNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFHRTtRQUFNLEdBQUcsRUFBQyxNQUFWO1FBQWlCLElBQUksRUFBQztNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFNRTtNQUFBLHdCQUNFO1FBQUksU0FBUyxFQUFDLHNDQUFkO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFTLFNBQVMsRUFBQyw0RUFBbkI7UUFBQSxVQUNDQSxhQUFhLENBQUNDLEdBQWQsQ0FBa0IsVUFBQUMsS0FBSyxFQUFFO1VBQzVCLG9CQUNJLDhEQUFDLG1EQUFEO1lBQXFCLElBQUksbUJBQVlBLEtBQUssQ0FBQ0MsRUFBbEIsQ0FBekI7WUFBQSx1QkFDRTtjQUFLLFNBQVMsRUFBQyxrQkFBZjtjQUFBLHdCQUNBO2dCQUFJLFNBQVMsRUFBQyxvQ0FBZDtnQkFBQSxVQUFvREQsS0FBSyxDQUFDRTtjQUExRDtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFNBREEsZUFFRiw4REFBQyxvREFBRDtnQkFBTyxLQUFLLEVBQUVGLEtBQUssQ0FBQ0csS0FBcEI7Z0JBQTJCLE1BQU0sRUFBRUgsS0FBSyxDQUFDSSxNQUF6QztnQkFBaUQsR0FBRyxFQUFFSixLQUFLLENBQUNLLEdBQTVEO2dCQUFpRSxHQUFHLEVBQUVMLEtBQUssQ0FBQ007Y0FBNUU7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQUZFO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGLEdBQVdOLEtBQUssQ0FBQ0MsRUFBakI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURKO1FBU0QsQ0FWSTtNQUREO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFORixlQXNCRSw4REFBQyxxREFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBdEJGO0VBQUEsZ0JBREY7QUEwQkQ7S0EzQnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGZzIGZyb20gXCJmcy9wcm9taXNlc1wiO1xuaW1wb3J0IHsgSW1hZ2UsIExpbmsgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2xhc3Rlc3RDb21pY3N9KSB7XG4gIHJldHVybiAoXG4gICAgPD4gXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnhrY2QgLSBTZWFyY2ggQ29taWNzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0NvbWljcyBmb3IgZGV2ZWxvcGVycycvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9JycvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi0xMCc+TGF0ZXN0IENvbWljczwvaDI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBnYXAtMiBtLWF1dG8gc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgaXRlbXMtYmFzZWxpbmUnPlxuICAgICAgICB7bGFzdGVzdENvbWljcy5tYXAoY29taWM9PntcbiAgICAgIHJldHVybihcbiAgICAgICAgICA8TGluayBrZXk9e2NvbWljLmlkfSBocmVmPXtgL2NvbWljLyR7Y29taWMuaWR9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBwYi00IG0tYXV0byc+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1zbSB0ZXh0LWNlbnRlciBwYi0yJz57Y29taWMudGl0bGV9PC9oMz5cbiAgICAgICAgICA8SW1hZ2Ugd2lkdGg9e2NvbWljLndpZHRofSBoZWlnaHQ9e2NvbWljLmhlaWdodH0gc3JjPXtjb21pYy5pbWd9IGFsdD17Y29taWMuYWx0fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgXG4gICAgICApXG4gICAgfSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIvPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIoJy4vY29taWNzJyk7XG4gY29uc3QgbGFzdGVzdENvbWljc0ZpbGVzID0gZmlsZXMuc2xpY2UoLTgsIGZpbGVzLmxlbmd0aCk7XG4gY29uc3QgcHJvbWlzZXNSZWFkRmlsZXMgPSBsYXN0ZXN0Q29taWNzRmlsZXMubWFwKGFzeW5jKGZpbGUpPT57XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmcy5yZWFkRmlsZShgLi9jb21pY3MvJHtmaWxlfWAsICd1dGYtOCcpO1xuICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50KVxuIH0pXG5jb25zdCBsYXN0ZXN0Q29taWNzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXNSZWFkRmlsZXMpXG4gIHJldHVybntcbiAgICBwcm9wczp7XG4gICAgICBsYXN0ZXN0Q29taWNzXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiRm9vdGVyIiwiSG9tZSIsImxhc3Rlc3RDb21pY3MiLCJtYXAiLCJjb21pYyIsImlkIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});