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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/workspaces/xkcd-app/pages/index.js\";\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var lastestComics = _ref.lastestComics;\n  console.log(lastestComics);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: \"text-3xl font-bold text-center mb-10\",\n        children: \"Latest Comics\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n        className: \"grid grid-cols-1 gap-2 max-w-md m-auto sm:grid-cols-2\",\n        children: lastestComics.map(function (comic) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            href: \"/comic/\".concat(comic.id),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"mb-4 pb-4 m\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n                className: \"font-semibold text-sm text-center\",\n                children: comic.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 21,\n                columnNumber: 13\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                width: 300,\n                height: 300,\n                layout: \"intrinsic\",\n                objectFit: \"contain\",\n                src: comic.img,\n                alt: comic.alt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 11\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }, _this)\n          }, comic.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7OztBQUVlLFNBQVNJLElBQVQsT0FBK0I7RUFBQTs7RUFBQSxJQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCO0VBQzVDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWjtFQUNBLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx1QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUlFLDhEQUFDLDBEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKRixlQUtFO01BQUEsd0JBQ0U7UUFBSSxTQUFTLEVBQUMsc0NBQWQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQVMsU0FBUyxFQUFDLHVEQUFuQjtRQUFBLFVBQ0NBLGFBQWEsQ0FBQ0csR0FBZCxDQUFrQixVQUFBQyxLQUFLLEVBQUU7VUFDNUIsb0JBQ0ksOERBQUMsbURBQUQ7WUFBcUIsSUFBSSxtQkFBWUEsS0FBSyxDQUFDQyxFQUFsQixDQUF6QjtZQUFBLHVCQUNFO2NBQUssU0FBUyxFQUFDLGFBQWY7Y0FBQSx3QkFDQTtnQkFBSSxTQUFTLEVBQUMsbUNBQWQ7Z0JBQUEsVUFBbURELEtBQUssQ0FBQ0U7Y0FBekQ7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQURBLGVBRUYsOERBQUMsb0RBQUQ7Z0JBQU8sS0FBSyxFQUFFLEdBQWQ7Z0JBQW1CLE1BQU0sRUFBRSxHQUEzQjtnQkFBZ0MsTUFBTSxFQUFDLFdBQXZDO2dCQUFtRCxTQUFTLEVBQUMsU0FBN0Q7Z0JBQXVFLEdBQUcsRUFBRUYsS0FBSyxDQUFDRyxHQUFsRjtnQkFBdUYsR0FBRyxFQUFFSCxLQUFLLENBQUNJO2NBQWxHO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsU0FGRTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERixHQUFXSixLQUFLLENBQUNDLEVBQWpCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FESjtRQVNELENBVkk7TUFERDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUF3QkQ7S0ExQnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCB7IEltYWdlLCBMaW5rIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtsYXN0ZXN0Q29taWNzfSkge1xuICBjb25zb2xlLmxvZyhsYXN0ZXN0Q29taWNzKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTEwJz5MYXRlc3QgQ29taWNzPC9oMj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIGdhcC0yIG1heC13LW1kIG0tYXV0byBzbTpncmlkLWNvbHMtMic+XG4gICAgICAgIHtsYXN0ZXN0Q29taWNzLm1hcChjb21pYz0+e1xuICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxMaW5rIGtleT17Y29taWMuaWR9IGhyZWY9e2AvY29taWMvJHtjb21pYy5pZH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IHBiLTQgbSc+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIHRleHQtc20gdGV4dC1jZW50ZXInPntjb21pYy50aXRsZX08L2gzPlxuICAgICAgICAgIDxJbWFnZSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gbGF5b3V0PSdpbnRyaW5zaWMnIG9iamVjdEZpdD0nY29udGFpbicgc3JjPXtjb21pYy5pbWd9IGFsdD17Y29taWMuYWx0fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgXG4gICAgICApXG4gICAgfSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKCcuL2NvbWljcycpO1xuIGNvbnN0IGxhc3Rlc3RDb21pY3NGaWxlcyA9IGZpbGVzLnNsaWNlKC04LCBmaWxlcy5sZW5ndGgpO1xuIGNvbnN0IHByb21pc2VzUmVhZEZpbGVzID0gbGFzdGVzdENvbWljc0ZpbGVzLm1hcChhc3luYyhmaWxlKT0+e1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoYC4vY29taWNzLyR7ZmlsZX1gLCAndXRmLTgnKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoY29udGVudClcbiB9KVxuY29uc3QgbGFzdGVzdENvbWljcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzUmVhZEZpbGVzKVxuICByZXR1cm57XG4gICAgcHJvcHM6e1xuICAgICAgbGFzdGVzdENvbWljc1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkZXIiLCJJbWFnZSIsIkxpbmsiLCJIb21lIiwibGFzdGVzdENvbWljcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjb21pYyIsImlkIiwidGl0bGUiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});