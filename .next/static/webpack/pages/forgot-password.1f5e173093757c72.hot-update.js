"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./components/forms/ForgotPasswordForm.js":
/*!************************************************!*\
  !*** ./components/forms/ForgotPasswordForm.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ForgotPasswordForm(param) {\n    var handleSubmit = param.handleSubmit, email = param.email, setEmail = param.setEmail, newPassword = param.newPassword, setNewPassword = param.setNewPassword, secret = param.secret, setSecret = param.setSecret, loading = param.loading;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted\",\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Enter email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted\",\n                            children: \"New password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: newPassword,\n                        onChange: function(e) {\n                            return setNewPassword(e.target.value);\n                        },\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Enter new password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-muted\",\n                                    children: \"Pick a question\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"form-control\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"What is your favorite color?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"What is your best friend's name?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: \"What city were you born in?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                className: \"form-text text-muted\",\n                                children: \"You can use this to reset your password if forgotten!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: secret,\n                            onChange: function(e) {\n                                return setSecret(e.target.value);\n                            },\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Write your answer here!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: !email || !newPassword || !secret || loading,\n                    className: \"btn btn-primary col-12\",\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.SyncOutlined, {\n                        spin: true,\n                        className: \"py-1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 73,\n                        columnNumber: 22\n                    }, this) : \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\VCode\\\\merncamp\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_c = ForgotPasswordForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPasswordForm);\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7U0FFdkNDLGtCQUFrQixDQUFDLEtBUzNCLEVBQUUsQ0FBQztRQVJGQyxZQUFZLEdBRGMsS0FTM0IsQ0FSQ0EsWUFBWSxFQUNaQyxLQUFLLEdBRnFCLEtBUzNCLENBUENBLEtBQUssRUFDTEMsUUFBUSxHQUhrQixLQVMzQixDQU5DQSxRQUFRLEVBQ1JDLFdBQVcsR0FKZSxLQVMzQixDQUxDQSxXQUFXLEVBQ1hDLGNBQWMsR0FMWSxLQVMzQixDQUpDQSxjQUFjLEVBQ2RDLE1BQU0sR0FOb0IsS0FTM0IsQ0FIQ0EsTUFBTSxFQUNOQyxTQUFTLEdBUGlCLEtBUzNCLENBRkNBLFNBQVMsRUFDVEMsT0FBTyxHQVJtQixLQVMzQixDQURDQSxPQUFPO0lBRVAsTUFBTSw2RUFDSEMsQ0FBSTtRQUFDQyxRQUFRLEVBQUVULFlBQVk7O3dGQUN6QlUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWdCOztnR0FDNUJDLENBQUs7OEdBQ0hDLENBQUs7NEJBQUNGLFNBQVMsRUFBQyxDQUFZO3NDQUFDLENBQWE7Ozs7Ozs7Ozs7O2dHQUU1Q0csQ0FBSzt3QkFDSkMsS0FBSyxFQUFFZCxLQUFLO3dCQUNaZSxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLZixNQUFNLENBQU5BLFFBQVEsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7O3dCQUN4Q0ksSUFBSSxFQUFDLENBQU87d0JBQ1pSLFNBQVMsRUFBQyxDQUFjO3dCQUN4QlMsV0FBVyxFQUFDLENBQWE7Ozs7Ozs7Ozs7Ozt3RkFJNUJWLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQjs7Z0dBQzVCQyxDQUFLOzhHQUNIQyxDQUFLOzRCQUFDRixTQUFTLEVBQUMsQ0FBWTtzQ0FBQyxDQUFZOzs7Ozs7Ozs7OztnR0FFM0NHLENBQUs7d0JBQ0pDLEtBQUssRUFBRVosV0FBVzt3QkFDbEJhLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7NEJBQUtiLE1BQU0sQ0FBTkEsY0FBYyxDQUFDYSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7d0JBQzlDSSxJQUFJLEVBQUMsQ0FBVTt3QkFDZlIsU0FBUyxFQUFDLENBQWM7d0JBQ3hCUyxXQUFXLEVBQUMsQ0FBb0I7Ozs7Ozs7Ozs7Ozs7O2dHQUtqQ1YsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWdCOzt3R0FDNUJDLENBQUs7c0hBQ0hDLENBQUs7b0NBQUNGLFNBQVMsRUFBQyxDQUFZOzhDQUFDLENBQWU7Ozs7Ozs7Ozs7O3dHQUU5Q1UsQ0FBTTtnQ0FBQ1YsU0FBUyxFQUFDLENBQWM7O2dIQUM3QlcsQ0FBTTtrREFBQyxDQUE0Qjs7Ozs7O2dIQUNuQ0EsQ0FBTTtrREFBQyxDQUFnQzs7Ozs7O2dIQUN2Q0EsQ0FBTTtrREFBQyxDQUEyQjs7Ozs7Ozs7Ozs7O3dHQUdwQ1YsQ0FBSztnQ0FBQ0QsU0FBUyxFQUFDLENBQXNCOzBDQUFDLENBRXhDOzs7Ozs7Ozs7Ozs7Z0dBR0RELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFnQjs4R0FDNUJHLENBQUs7NEJBQ0pDLEtBQUssRUFBRVYsTUFBTTs0QkFDYlcsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztnQ0FBS1gsTUFBTSxDQUFOQSxTQUFTLENBQUNXLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs0QkFDekNJLElBQUksRUFBQyxDQUFNOzRCQUNYUixTQUFTLEVBQUMsQ0FBYzs0QkFDeEJTLFdBQVcsRUFBQyxDQUF5Qjs7Ozs7Ozs7Ozs7Ozt3RkFLMUNWLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQjtzR0FDNUJZLENBQU07b0JBQ0xDLFFBQVEsR0FBR3ZCLEtBQUssS0FBS0UsV0FBVyxLQUFLRSxNQUFNLElBQUlFLE9BQU87b0JBQ3RESSxTQUFTLEVBQUMsQ0FBd0I7OEJBRWpDSixPQUFPLCtFQUFJVCwyREFBWTt3QkFBQzJCLElBQUk7d0JBQUNkLFNBQVMsRUFBQyxDQUFNOzs7OzsrQkFBTSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RSxDQUFDO0tBM0VRWixrQkFBa0I7QUE2RTNCLCtEQUFlQSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5qcz8wZTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN5bmNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gRm9yZ290UGFzc3dvcmRGb3JtKHtcclxuICBoYW5kbGVTdWJtaXQsXHJcbiAgZW1haWwsXHJcbiAgc2V0RW1haWwsXHJcbiAgbmV3UGFzc3dvcmQsXHJcbiAgc2V0TmV3UGFzc3dvcmQsXHJcbiAgc2VjcmV0LFxyXG4gIHNldFNlY3JldCxcclxuICBsb2FkaW5nLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcC0yXCI+XHJcbiAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TmV3IHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlBpY2sgYSBxdWVzdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPG9wdGlvbj5XaGF0IGlzIHlvdXIgZmF2b3JpdGUgY29sb3I/PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+V2hhdCBpcyB5b3VyIGJlc3QgZnJpZW5kJ3MgbmFtZT88L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj5XaGF0IGNpdHkgd2VyZSB5b3UgYm9ybiBpbj88L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICBZb3UgY2FuIHVzZSB0aGlzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQgaWYgZm9yZ290dGVuIVxyXG4gICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWNyZXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VjcmV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgYW5zd2VyIGhlcmUhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXshZW1haWwgfHwgIW5ld1Bhc3N3b3JkIHx8ICFzZWNyZXQgfHwgbG9hZGluZ31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBjb2wtMTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gPFN5bmNPdXRsaW5lZCBzcGluIGNsYXNzTmFtZT1cInB5LTFcIiAvPiA6IFwiU3VibWl0XCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuIl0sIm5hbWVzIjpbIlN5bmNPdXRsaW5lZCIsIkZvcmdvdFBhc3N3b3JkRm9ybSIsImhhbmRsZVN1Ym1pdCIsImVtYWlsIiwic2V0RW1haWwiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwibG9hZGluZyIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsInNtYWxsIiwibGFiZWwiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJzcGluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/ForgotPasswordForm.js\n");

/***/ })

});