"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    }), state = ref[0], setState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        // Any status code that lie within the range of 2xx cause this function to trigger\n        // Do something with response data\n        return response;\n    }, function(error) {\n        // Any status codes that falls outside the range of 2xx cause this function to trigger\n        // Do something with response error\n        var res = error.response;\n        console.log(\"error handling --->\", res.config);\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        }\n    // return Promise.reject(error);\n    });\n    // axios.interceptors.response.use(\n    //   console.log(\"intersector engage\"),\n    //   function (response) {\n    //     return response;\n    //   },\n    //   function (error) {\n    //     console.log(\"test---\");\n    //     let res = error.response;\n    //     console.log(\"error handling --->\", res.config);\n    //     if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n    //       setState(null);\n    //       window.localStorage.removeItem(\"auth\");\n    //       router.push(\"/login\");\n    //     }\n    //     // return Promise.reject(error);\n    //   }\n    // );\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\context\\\\index.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserProvider, \"QD/uwx2uR6dZ5guTTGOMBbT8ivU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UserProvider;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNqQztBQUNjOzs7QUFFdkMsR0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxHQUFLLENBQUNLLFlBQVksR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM5QixHQUFLLENBQXFCUCxHQUd4QixHQUh3QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ2xDUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ1JDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQyxHQUhNQyxLQUFLLEdBQWNWLEdBR3hCLEtBSFlXLFFBQVEsR0FBSVgsR0FHeEI7SUFFRkUsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmUyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07SUFDeEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0MsTUFBTSxHQUFHYixzREFBUztJQUV4QkQsc0VBQStCLENBQzdCLFFBQVEsQ0FBRWdCLFFBQVEsRUFBRSxDQUFDO1FBQ25CLEVBQWtGO1FBQ2xGLEVBQWtDO1FBQ2xDLE1BQU0sQ0FBQ0EsUUFBUTtJQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFFRSxLQUFLLEVBQUUsQ0FBQztRQUNoQixFQUFzRjtRQUN0RixFQUFtQztRQUVuQyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRixRQUFRO1FBQ3hCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUYsR0FBRyxDQUFDRyxNQUFNO1FBQzdDLEVBQUUsRUFBRUgsR0FBRyxDQUFDSSxNQUFNLEtBQUssR0FBRyxJQUFJSixHQUFHLENBQUNHLE1BQU0sS0FBS0gsR0FBRyxDQUFDRyxNQUFNLENBQUNFLGdCQUFnQixFQUFFLENBQUM7WUFDckVoQixRQUFRLENBQUMsSUFBSTtZQUNiRyxNQUFNLENBQUNDLFlBQVksQ0FBQ2EsVUFBVSxDQUFDLENBQU07WUFDckNYLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLENBQVE7UUFDdEIsQ0FBQztJQUVELEVBQWdDO0lBQ2xDLENBQUM7SUFHSCxFQUFtQztJQUNuQyxFQUF1QztJQUN2QyxFQUEwQjtJQUMxQixFQUF1QjtJQUN2QixFQUFPO0lBQ1AsRUFBdUI7SUFDdkIsRUFBOEI7SUFDOUIsRUFBZ0M7SUFDaEMsRUFBc0Q7SUFDdEQsRUFBOEU7SUFDOUUsRUFBd0I7SUFDeEIsRUFBZ0Q7SUFDaEQsRUFBK0I7SUFDL0IsRUFBUTtJQUNSLEVBQXVDO0lBQ3ZDLEVBQU07SUFDTixFQUFLO0lBRUwsTUFBTSw2RUFDSHhCLFdBQVcsQ0FBQ3lCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNyQjtZQUFBQSxLQUFLO1lBQUVDLFFBQVE7UUFBQSxDQUFDO2tCQUMzQ0osUUFBUTs7Ozs7O0FBR2YsQ0FBQztHQXpES0QsWUFBWTs7UUFVREYsa0RBQVM7OztLQVZwQkUsWUFBWTtBQTJEbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxyXG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBkYXRhXHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gQW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZXJyb3JcclxuXHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBoYW5kbGluZyAtLS0+XCIsIHJlcy5jb25maWcpO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xyXG4gICAgICAgIHNldFN0YXRlKG51bGwpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaW50ZXJzZWN0b3IgZW5nYWdlXCIpLFxyXG4gIC8vICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgIHJldHVybiByZXNwb25zZTtcclxuICAvLyAgIH0sXHJcbiAgLy8gICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJ0ZXN0LS0tXCIpO1xyXG4gIC8vICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaGFuZGxpbmcgLS0tPlwiLCByZXMuY29uZmlnKTtcclxuICAvLyAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAvLyAgICAgICBzZXRTdGF0ZShudWxsKTtcclxuICAvLyAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gIC8vICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIC8vIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgLy8gICB9XHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwidG9rZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29uZmlnIiwic3RhdHVzIiwiX19pc1JldHJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});