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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _property_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-card */ \"./components/property-card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PropertiesGridContainer = ()=>{\n    _s();\n    const client = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(\"https://wvnrjdtoqulmwoygofxw.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bnJqZHRvcXVsbXdveWdvZnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyMDQzMzcsImV4cCI6MjAwNzc4MDMzN30.2YM6UBNsBJUvRjvPpRNMukOdRfIwBa-jQh4iAlsHGtQ\");\n    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProperties = async ()=>{\n            const result = await client.from(\"properties\").select(\"*\");\n            setProperties(result.data);\n        };\n        fetchProperties();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5\",\n            children: [\n                properties.map((property)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"HIIII\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined);\n                // <PropertyCard\n                //   key={property.id}\n                //   imgUrl={property.image}\n                //   name={property.name}\n                //   price={property.price}\n                //   />\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"HIIII\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: properties.length\n                }, void 0, false, {\n                    fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PropertiesGridContainer, \"cpCUGR83xowmuASw1agY8N9Ptf8=\");\n_c = PropertiesGridContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertiesGridContainer);\nvar _c;\n$RefreshReg$(_c, \"PropertiesGridContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3BlcnRpZXMtZ3JpZC1jb250YWluZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQ1Q7QUFDRDtBQUUzQyxNQUFNSSwwQkFBMEI7O0lBQzlCLE1BQU1DLFNBQVNMLG1FQUFZQSxDQUN6Qk0sMENBQTJCLEVBQzNCQSxrTkFBMkI7SUFHN0IsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsa0JBQWtCO1lBQ3RCLE1BQU1DLFNBQVMsTUFBTVIsT0FBT1MsSUFBSSxDQUFDLGNBQWNDLE1BQU0sQ0FBQztZQUN0REosY0FBY0UsT0FBT0csSUFBSTtRQUMzQjtRQUNBSjtJQUNGLEdBQUUsRUFBRTtJQUVKLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOztnQkFDWlIsV0FBV1MsR0FBRyxDQUFDLENBQUNDO2tDQUNmLDhEQUFDQztrQ0FBRTs7Ozs7O2dCQUNILGdCQUFnQjtnQkFDaEIsc0JBQXNCO2dCQUN0Qiw0QkFBNEI7Z0JBQzVCLHlCQUF5QjtnQkFDekIsMkJBQTJCO2dCQUMzQixPQUFPO2dCQUNUOzhCQUNFLDhEQUFDQTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQTs4QkFBR1gsV0FBV1ksTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0FsQ01sQjtLQUFBQTtBQW9DTiwrREFBZUEsdUJBQXVCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvcGVydGllcy1ncmlkLWNvbnRhaW5lci5qcz9lNDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgXG5pbXBvcnQgUHJvcGVydHlDYXJkIGZyb20gXCIuL3Byb3BlcnR5LWNhcmRcIjtcblxuY29uc3QgUHJvcGVydGllc0dyaWRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudChcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkwsXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfS0VZXG4gIClcblxuICBjb25zdCBbcHJvcGVydGllcywgc2V0UHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQuZnJvbSgncHJvcGVydGllcycpLnNlbGVjdCgnKicpXG4gICAgICBzZXRQcm9wZXJ0aWVzKHJlc3VsdC5kYXRhKVxuICAgIH1cbiAgICBmZXRjaFByb3BlcnRpZXMoKVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0cmV0Y2ggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdGV4dC1sZWZ0IHRleHQtWzE0LjUxcHhdIHRleHQtZ3JheS03MDAgZm9udC1ib2R5LXJlZ3VsYXItNjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciBnYXAtWzEycHhdIHB4LTIuNVwiPlxuICAgICAgICB7cHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgPHA+SElJSUk8L3A+XG4gICAgICAgICAgLy8gPFByb3BlcnR5Q2FyZFxuICAgICAgICAgIC8vICAga2V5PXtwcm9wZXJ0eS5pZH1cbiAgICAgICAgICAvLyAgIGltZ1VybD17cHJvcGVydHkuaW1hZ2V9XG4gICAgICAgICAgLy8gICBuYW1lPXtwcm9wZXJ0eS5uYW1lfVxuICAgICAgICAgIC8vICAgcHJpY2U9e3Byb3BlcnR5LnByaWNlfVxuICAgICAgICAgIC8vICAgLz5cbiAgICAgICAgfSl9XG4gICAgICAgICAgPHA+SElJSUk8L3A+XG4gICAgICAgICAgPHA+e3Byb3BlcnRpZXMubGVuZ3RofTwvcD5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0aWVzR3JpZENvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3BlcnR5Q2FyZCIsIlByb3BlcnRpZXNHcmlkQ29udGFpbmVyIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTCIsIk5FWFRfUFVCTElDX0tFWSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwiZmV0Y2hQcm9wZXJ0aWVzIiwicmVzdWx0IiwiZnJvbSIsInNlbGVjdCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9wZXJ0eSIsInAiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/properties-grid-container.js\n"));

/***/ })

});