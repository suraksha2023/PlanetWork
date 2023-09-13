/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./Components/Footer/Footer.tsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Menu/Menu */ \"./Components/Menu/Menu.tsx\");\n/* harmony import */ var _Components_Banner_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Banner/Banner */ \"./Components/Banner/Banner.tsx\");\n/* harmony import */ var _Components_FeaturedImage_FeaturedImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/FeaturedImage/FeaturedImage */ \"./Components/FeaturedImage/FeaturedImage.tsx\");\n/* harmony import */ var _Components_Info_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Info/Info */ \"./Components/Info/Info.tsx\");\n/* harmony import */ var _Components_Specialist_Specialist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Specialist/Specialist */ \"./Components/Specialist/Specialist.tsx\");\n/* harmony import */ var _Components_Partners_Partners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Partners/Partners */ \"./Components/Partners/Partners.tsx\");\n/* harmony import */ var _Components_InfrastructureServices_InfrastructureServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/InfrastructureServices/InfrastructureServices */ \"./Components/InfrastructureServices/InfrastructureServices.tsx\");\n/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer/Footer */ \"./Components/Footer/Footer.tsx\");\n/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n//import '/styles/global.scss'\n\n\n\n\n\n\n\n\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Banner_Banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_FeaturedImage_FeaturedImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Info_Info__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Specialist_Specialist__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Partners_Partners__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_InfrastructureServices_InfrastructureServices__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n                fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/PlanetWork/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNKO0FBRzFDLDhCQUE4QjtBQUNKO0FBRWlCO0FBQ007QUFDcUI7QUFDM0I7QUFDa0I7QUFDTjtBQUMwQztBQUNoRDtBQUdsQyxTQUFTUyxLQUFLQyxLQUFTO0lBR2xDLHFCQUNJLDhEQUFDQzs7MEJBRUcsOERBQUNWLDZEQUFJQTs7Ozs7MEJBQ0wsOERBQUNDLGlFQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLCtFQUFhQTs7Ozs7MEJBQ2QsOERBQUNDLDZEQUFJQTs7Ozs7MEJBQ0wsOERBQUNDLHlFQUFVQTs7Ozs7MEJBQ1gsOERBQUNDLHFFQUFRQTs7Ozs7MEJBQ1QsOERBQUNDLGtHQUFzQkE7Ozs7OzBCQUN2Qiw4REFBQ0MsbUVBQU1BOzs7Ozs7Ozs7OztBQU1uQjtLQW5Cd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuXG5cbi8vaW1wb3J0ICcvc3R5bGVzL2dsb2JhbC5zY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vQ29tcG9uZW50cy9BcHAvQXBwXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vQ29tcG9uZW50cy9NZW51L01lbnVcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvQmFubmVyL0Jhbm5lclwiO1xuaW1wb3J0IEZlYXR1cmVkSW1hZ2UgZnJvbSBcIi4uL0NvbXBvbmVudHMvRmVhdHVyZWRJbWFnZS9GZWF0dXJlZEltYWdlXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi4vQ29tcG9uZW50cy9JbmZvL0luZm9cIjtcbmltcG9ydCBTcGVjaWFsaXN0IGZyb20gXCIuLi9Db21wb25lbnRzL1NwZWNpYWxpc3QvU3BlY2lhbGlzdFwiO1xuaW1wb3J0IFBhcnRuZXJzIGZyb20gXCIuLi9Db21wb25lbnRzL1BhcnRuZXJzL1BhcnRuZXJzXCI7XG5pbXBvcnQgSW5mcmFzdHJ1Y3R1cmVTZXJ2aWNlcyBmcm9tICcuLi9Db21wb25lbnRzL0luZnJhc3RydWN0dXJlU2VydmljZXMvSW5mcmFzdHJ1Y3R1cmVTZXJ2aWNlcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczphbnkpXG5cbntcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8qIDxBcHAgLz4gKi99XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICAgICAgPEZlYXR1cmVkSW1hZ2UgLz5cbiAgICAgICAgICAgIDxJbmZvIC8+XG4gICAgICAgICAgICA8U3BlY2lhbGlzdCAvPlxuICAgICAgICAgICAgPFBhcnRuZXJzIC8+XG4gICAgICAgICAgICA8SW5mcmFzdHJ1Y3R1cmVTZXJ2aWNlcyAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkJhbm5lciIsIkZlYXR1cmVkSW1hZ2UiLCJJbmZvIiwiU3BlY2lhbGlzdCIsIlBhcnRuZXJzIiwiSW5mcmFzdHJ1Y3R1cmVTZXJ2aWNlcyIsIkZvb3RlciIsIkhvbWUiLCJwcm9wcyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});