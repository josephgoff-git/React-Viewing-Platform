"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/properties",{

/***/ "./components/properties-grid-container.js":
/*!*************************************************!*\
  !*** ./components/properties-grid-container.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _property_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-card */ \"./components/property-card.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst PropertiesGridContainer = (param)=>{\n    let { allProperties } = param;\n    _s();\n    console.log(allProperties);\n    const [allProperties2, setAllProperties2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    useEffect(()=>{\n        setAllProperties2(allProperties);\n    }, [\n        allProperties\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5\",\n            children: allProperties2.map((property)=>{\n                // <PropertyCard\n                //   key={property.id}\n                //   imgUrl={property.image}\n                //   name={property.name}\n                //   price={property.price}\n                //   />\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Hi!!!\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PropertiesGridContainer, \"MUd3gVS/S7qcUx6/OuYmHKch1Q8=\");\n_c = PropertiesGridContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertiesGridContainer);\nvar _c;\n$RefreshReg$(_c, \"PropertiesGridContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3BlcnRpZXMtZ3JpZC1jb250YWluZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDVTtBQUUzQyxNQUFNRSwwQkFBMEI7UUFBQyxFQUFDQyxhQUFhLEVBQUM7O0lBQzlDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxnQkFBaUJDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXhEUSxVQUFVO1FBQ1JELGtCQUFrQko7SUFDcEIsR0FBRTtRQUFDQTtLQUFjO0lBRWpCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaSixlQUFlSyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsc0JBQXNCO2dCQUN0Qiw0QkFBNEI7Z0JBQzVCLHlCQUF5QjtnQkFDekIsMkJBQTJCO2dCQUMzQixPQUFPOzhCQUNQLDhEQUFDQzs4QkFBRTs7Ozs7O1lBQ0w7Ozs7Ozs7Ozs7O0FBSVI7R0F2Qk1YO0tBQUFBO0FBeUJOLCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9wZXJ0aWVzLWdyaWQtY29udGFpbmVyLmpzP2U0MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wZXJ0eUNhcmQgZnJvbSBcIi4vcHJvcGVydHktY2FyZFwiO1xuXG5jb25zdCBQcm9wZXJ0aWVzR3JpZENvbnRhaW5lciA9ICh7YWxsUHJvcGVydGllc30pID0+IHtcbiAgY29uc29sZS5sb2coYWxsUHJvcGVydGllcylcbiAgY29uc3QgW2FsbFByb3BlcnRpZXMyICwgc2V0QWxsUHJvcGVydGllczJdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc2V0QWxsUHJvcGVydGllczIoYWxsUHJvcGVydGllcylcbiAgfSxbYWxsUHJvcGVydGllc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtc3RyZXRjaCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxlZnQgdGV4dC1bMTQuNTFweF0gdGV4dC1ncmF5LTcwMCBmb250LWJvZHktcmVndWxhci02MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGdhcC1bMTJweF0gcHgtMi41XCI+XG4gICAgICAgIHthbGxQcm9wZXJ0aWVzMi5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgLy8gPFByb3BlcnR5Q2FyZFxuICAgICAgICAgIC8vICAga2V5PXtwcm9wZXJ0eS5pZH1cbiAgICAgICAgICAvLyAgIGltZ1VybD17cHJvcGVydHkuaW1hZ2V9XG4gICAgICAgICAgLy8gICBuYW1lPXtwcm9wZXJ0eS5uYW1lfVxuICAgICAgICAgIC8vICAgcHJpY2U9e3Byb3BlcnR5LnByaWNlfVxuICAgICAgICAgIC8vICAgLz5cbiAgICAgICAgICA8cD5IaSEhITwvcD5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnRpZXNHcmlkQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUHJvcGVydHlDYXJkIiwiUHJvcGVydGllc0dyaWRDb250YWluZXIiLCJhbGxQcm9wZXJ0aWVzIiwiY29uc29sZSIsImxvZyIsImFsbFByb3BlcnRpZXMyIiwic2V0QWxsUHJvcGVydGllczIiLCJ1c2VFZmZlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9wZXJ0eSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/properties-grid-container.js\n"));

/***/ })

});