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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _property_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-card */ \"./components/property-card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PropertiesGridContainer = ()=>{\n    _s();\n    const client = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(\"https://wvnrjdtoqulmwoygofxw.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bnJqZHRvcXVsbXdveWdvZnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyMDQzMzcsImV4cCI6MjAwNzc4MDMzN30.2YM6UBNsBJUvRjvPpRNMukOdRfIwBa-jQh4iAlsHGtQ\");\n    const [properties, setProperties] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProperties = async ()=>{\n            const result = await client.from(\"properties\").select(\"*\");\n            setProperties(result.data);\n        };\n        fetchProperties();\n    }, []);\n    let items = properties;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5\",\n            children: [\n                properties.map((property)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"HIIII\"\n                    }, void 0, false, {\n                        fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined);\n                // <PropertyCard\n                //   key={property.id}\n                //   imgUrl={property.image}\n                //   name={property.name}\n                //   price={property.price}\n                //   />\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"HIIII\"\n                }, void 0, false, {\n                    fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: items.length\n                }, void 0, false, {\n                    fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/josephgoff/Desktop/realEstateApp/components/properties-grid-container.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PropertiesGridContainer, \"cpCUGR83xowmuASw1agY8N9Ptf8=\");\n_c = PropertiesGridContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertiesGridContainer);\nvar _c;\n$RefreshReg$(_c, \"PropertiesGridContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3BlcnRpZXMtZ3JpZC1jb250YWluZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQ1Q7QUFDRDtBQUUzQyxNQUFNSSwwQkFBMEI7O0lBQzlCLE1BQU1DLFNBQVNMLG1FQUFZQSxDQUN6Qk0sMENBQTJCLEVBQzNCQSxrTkFBMkI7SUFHN0IsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsa0JBQWtCO1lBQ3RCLE1BQU1DLFNBQVMsTUFBTVIsT0FBT1MsSUFBSSxDQUFDLGNBQWNDLE1BQU0sQ0FBQztZQUN0REosY0FBY0UsT0FBT0csSUFBSTtRQUMzQjtRQUNBSjtJQUNGLEdBQUUsRUFBRTtJQUVKLElBQUlLLFFBQVFQO0lBRVoscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7O2dCQUNaVCxXQUFXVSxHQUFHLENBQUMsQ0FBQ0M7a0NBQ2YsOERBQUNDO2tDQUFFOzs7Ozs7Z0JBQ0gsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLDRCQUE0QjtnQkFDNUIseUJBQXlCO2dCQUN6QiwyQkFBMkI7Z0JBQzNCLE9BQU87Z0JBQ1Q7OEJBQ0UsOERBQUNBOzhCQUFFOzs7Ozs7OEJBQ0gsOERBQUNBOzhCQUFHTCxNQUFNTSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQXBDTW5CO0tBQUFBO0FBc0NOLCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9wZXJ0aWVzLWdyaWQtY29udGFpbmVyLmpzP2U0MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCBQcm9wZXJ0eUNhcmQgZnJvbSBcIi4vcHJvcGVydHktY2FyZFwiO1xuXG5jb25zdCBQcm9wZXJ0aWVzR3JpZENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTCxcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19LRVlcbiAgKVxuXG4gIGNvbnN0IFtwcm9wZXJ0aWVzLCBzZXRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGZldGNoUHJvcGVydGllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5mcm9tKCdwcm9wZXJ0aWVzJykuc2VsZWN0KCcqJylcbiAgICAgIHNldFByb3BlcnRpZXMocmVzdWx0LmRhdGEpXG4gICAgfVxuICAgIGZldGNoUHJvcGVydGllcygpXG4gIH0sW10pXG5cbiAgbGV0IGl0ZW1zID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZi1zdHJldGNoIGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHRleHQtbGVmdCB0ZXh0LVsxNC41MXB4XSB0ZXh0LWdyYXktNzAwIGZvbnQtYm9keS1yZWd1bGFyLTYwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgZ2FwLVsxMnB4XSBweC0yLjVcIj5cbiAgICAgICAge3Byb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIDxwPkhJSUlJPC9wPlxuICAgICAgICAgIC8vIDxQcm9wZXJ0eUNhcmRcbiAgICAgICAgICAvLyAgIGtleT17cHJvcGVydHkuaWR9XG4gICAgICAgICAgLy8gICBpbWdVcmw9e3Byb3BlcnR5LmltYWdlfVxuICAgICAgICAgIC8vICAgbmFtZT17cHJvcGVydHkubmFtZX1cbiAgICAgICAgICAvLyAgIHByaWNlPXtwcm9wZXJ0eS5wcmljZX1cbiAgICAgICAgICAvLyAgIC8+XG4gICAgICAgIH0pfVxuICAgICAgICAgIDxwPkhJSUlJPC9wPlxuICAgICAgICAgIDxwPntpdGVtcy5sZW5ndGh9PC9wPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnRpZXNHcmlkQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvcGVydHlDYXJkIiwiUHJvcGVydGllc0dyaWRDb250YWluZXIiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMIiwiTkVYVF9QVUJMSUNfS0VZIiwicHJvcGVydGllcyIsInNldFByb3BlcnRpZXMiLCJmZXRjaFByb3BlcnRpZXMiLCJyZXN1bHQiLCJmcm9tIiwic2VsZWN0IiwiZGF0YSIsIml0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvcGVydHkiLCJwIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/properties-grid-container.js\n"));

/***/ })

});