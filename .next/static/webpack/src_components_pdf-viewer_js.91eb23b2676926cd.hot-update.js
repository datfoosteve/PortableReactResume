"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_pdf-viewer_js",{

/***/ "./src/components/pdf-viewer.js":
/*!**************************************!*\
  !*** ./src/components/pdf-viewer.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PDFViewer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\n/* harmony import */ var _pdf_worker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pdf-worker.js */ \"./pdf-worker.js\");\n/* harmony import */ var _pdf_worker_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pdf_worker_js__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// Set the workerSrc property of the GlobalWorkerOptions object to use a custom worker\nreact_pdf__WEBPACK_IMPORTED_MODULE_2__.pdfjs.GlobalWorkerOptions.workerSrc = (_pdf_worker_js__WEBPACK_IMPORTED_MODULE_3___default());\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.LinkAnnotation, {\n    source: {\n        type: \"URL\",\n        url: \"http://example.com\"\n    }\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n    lineNumber: 8,\n    columnNumber: 1\n}, undefined);\nfunction PDFViewer() {\n    _s();\n    // Declare state variables to store the file, the number of pages in the file, and the URL of the file\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUrl, setFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Declare a state variable to store the current PDF index\n    const [currentPdfIndex, setCurrentPdfIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Declare an event handler to set the file state variable when the file input changes\n    function onFileChange(event) {\n        setFile(event.target.files[0]);\n    }\n    // Use an effect to fetch the current PDF file and set the file state variable\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Determine the file to fetch based on the current PDF index\n        const fileToFetch = \"sample\".concat(currentPdfIndex + 1, \".pdf\");\n        fetch(fileToFetch).then((res)=>{\n            // Fetch the PDF file and convert it to an ArrayBuffer\n            res.arrayBuffer().then((buf)=>{\n                // Set the file state variable to the ArrayBuffer\n                setFile(buf);\n            });\n        });\n    }, [\n        currentPdfIndex\n    ]);\n    // Use an effect to create an object URL for the file and set the fileUrl state variable\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Create an object URL for the file\n        setFileUrl(URL.createObjectURL(new Blob([\n            file\n        ])));\n    }, [\n        file\n    ]);\n    // Declare an event handler to set the numPages state variable when the document is successfully loaded\n    function onDocumentLoadSuccess(param) {\n        let { numPages: nextNumPages  } = param;\n        setNumPages(nextNumPages);\n    }\n    // Declare an event handler to cycle through the PDFs when the button is clicked\n    function onNextPdfClick() {\n        // Increment the current PDF index, wrapping around to 0 when it reaches the end\n        setCurrentPdfIndex((currentPdfIndex + 1) % 4);\n    }\n    function onPrevPdfClick() {\n        // Decrement the current PDF index, wrapping around to 3 when it reaches 0\n        setCurrentPdfIndex((currentPdfIndex - 1 + 4) % 4);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Document, {\n                        file: file,\n                        onLoadSuccess: onDocumentLoadSuccess,\n                        children: [\n                            Array.from({\n                                length: numPages\n                            }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                                    className: \"border-4 border-slate-900\",\n                                    pageLayout: \"twoColumnLeft\",\n                                    pageNumber: index + 1,\n                                    renderAnnotationLayer: false,\n                                    renderInteractiveForms: true,\n                                    renderTextLayer: false,\n                                    customTextRenderer: false\n                                }, \"page_\".concat(index + 1), false, {\n                                    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onPrevPdfClick,\n                                children: \"Previous PDF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onNextPdfClick,\n                                children: \"Next PDF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    style: {\n                                        position: \"flex\",\n                                        width: \"100%\",\n                                        border: \"6px solid rgba(black, black, black, 0.1)\"\n                                    },\n                                    href: fileUrl,\n                                    download: \"myfile.pdf\",\n                                    children: \"Download PDF\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n            lineNumber: 63,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, this);\n}\n_s(PDFViewer, \"aTYT896KP3im7wb8bv5NepUux7g=\");\n_c = PDFViewer;\nvar _c;\n$RefreshReg$(_c, \"PDFViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cG9uZW50cy9wZGYtdmlld2VyLmpzP2ZlNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlua0Fubm90YXRpb24sIERvY3VtZW50LCBQYWdlLCBwZGZqcyB9IGZyb20gJ3JlYWN0LXBkZic7XHJcbmltcG9ydCB3b3JrZXJTcmMgZnJvbSAnLi4vLi4vcGRmLXdvcmtlci5qcyc7XHJcblxyXG4vLyBTZXQgdGhlIHdvcmtlclNyYyBwcm9wZXJ0eSBvZiB0aGUgR2xvYmFsV29ya2VyT3B0aW9ucyBvYmplY3QgdG8gdXNlIGEgY3VzdG9tIHdvcmtlclxyXG5wZGZqcy5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHdvcmtlclNyYztcclxuXHJcbjxMaW5rQW5ub3RhdGlvbiBzb3VyY2U9e3sgdHlwZTogXCJVUkxcIiwgdXJsOiBcImh0dHA6Ly9leGFtcGxlLmNvbVwiIH19ICAvPlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBERlZpZXdlcigpIHtcclxuICAgIC8vIERlY2xhcmUgc3RhdGUgdmFyaWFibGVzIHRvIHN0b3JlIHRoZSBmaWxlLCB0aGUgbnVtYmVyIG9mIHBhZ2VzIGluIHRoZSBmaWxlLCBhbmQgdGhlIFVSTCBvZiB0aGUgZmlsZVxyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZmlsZVVybCwgc2V0RmlsZVVybF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gRGVjbGFyZSBhIHN0YXRlIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBjdXJyZW50IFBERiBpbmRleFxyXG4gICAgY29uc3QgW2N1cnJlbnRQZGZJbmRleCwgc2V0Q3VycmVudFBkZkluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIC8vIERlY2xhcmUgYW4gZXZlbnQgaGFuZGxlciB0byBzZXQgdGhlIGZpbGUgc3RhdGUgdmFyaWFibGUgd2hlbiB0aGUgZmlsZSBpbnB1dCBjaGFuZ2VzXHJcbiAgICBmdW5jdGlvbiBvbkZpbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIGFuIGVmZmVjdCB0byBmZXRjaCB0aGUgY3VycmVudCBQREYgZmlsZSBhbmQgc2V0IHRoZSBmaWxlIHN0YXRlIHZhcmlhYmxlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZmlsZSB0byBmZXRjaCBiYXNlZCBvbiB0aGUgY3VycmVudCBQREYgaW5kZXhcclxuICAgICAgICBjb25zdCBmaWxlVG9GZXRjaCA9IGBzYW1wbGUke2N1cnJlbnRQZGZJbmRleCArIDF9LnBkZmA7XHJcblxyXG4gICAgICAgIGZldGNoKGZpbGVUb0ZldGNoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIFBERiBmaWxlIGFuZCBjb252ZXJ0IGl0IHRvIGFuIEFycmF5QnVmZmVyXHJcbiAgICAgICAgICAgIHJlcy5hcnJheUJ1ZmZlcigpLnRoZW4oKGJ1ZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBmaWxlIHN0YXRlIHZhcmlhYmxlIHRvIHRoZSBBcnJheUJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgc2V0RmlsZShidWYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtjdXJyZW50UGRmSW5kZXhdKTtcclxuXHJcbiAgICAvLyBVc2UgYW4gZWZmZWN0IHRvIGNyZWF0ZSBhbiBvYmplY3QgVVJMIGZvciB0aGUgZmlsZSBhbmQgc2V0IHRoZSBmaWxlVXJsIHN0YXRlIHZhcmlhYmxlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3QgVVJMIGZvciB0aGUgZmlsZVxyXG4gICAgICAgIHNldEZpbGVVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbZmlsZV0pKSk7XHJcbiAgICB9LCBbZmlsZV0pO1xyXG5cclxuICAgIC8vIERlY2xhcmUgYW4gZXZlbnQgaGFuZGxlciB0byBzZXQgdGhlIG51bVBhZ2VzIHN0YXRlIHZhcmlhYmxlIHdoZW4gdGhlIGRvY3VtZW50IGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWRcclxuICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkU3VjY2Vzcyh7IG51bVBhZ2VzOiBuZXh0TnVtUGFnZXMgfSkge1xyXG4gICAgICAgIHNldE51bVBhZ2VzKG5leHROdW1QYWdlcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIERlY2xhcmUgYW4gZXZlbnQgaGFuZGxlciB0byBjeWNsZSB0aHJvdWdoIHRoZSBQREZzIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICBmdW5jdGlvbiBvbk5leHRQZGZDbGljaygpIHtcclxuICAgICAgLy8gSW5jcmVtZW50IHRoZSBjdXJyZW50IFBERiBpbmRleCwgd3JhcHBpbmcgYXJvdW5kIHRvIDAgd2hlbiBpdCByZWFjaGVzIHRoZSBlbmRcclxuICAgICAgc2V0Q3VycmVudFBkZkluZGV4KChjdXJyZW50UGRmSW5kZXggKyAxKSAlIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUHJldlBkZkNsaWNrKCkge1xyXG4gICAgICAvLyBEZWNyZW1lbnQgdGhlIGN1cnJlbnQgUERGIGluZGV4LCB3cmFwcGluZyBhcm91bmQgdG8gMyB3aGVuIGl0IHJlYWNoZXMgMFxyXG4gICAgICBzZXRDdXJyZW50UGRmSW5kZXgoKGN1cnJlbnRQZGZJbmRleCAtIDEgKyA0KSAlIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgey8qIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTUwIHB5LTYgc206cHktMTJcIiAqL31cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgb3ZlcmZsb3d5OiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdzY3JvbGwnLCAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBjbGFzc05hbWU9XCJQREZDb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICBib3R0b206ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgbGVmdDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzZweCBzb2xpZCByZ2JhKGJsYWNrLCBibGFjaywgYmxhY2ssIDAuMSknXHJcbiAgICAgICAgICAgICAgICAgfX0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RG9jdW1lbnQgZmlsZT17ZmlsZX0gb25Mb2FkU3VjY2Vzcz17b25Eb2N1bWVudExvYWRTdWNjZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtUGFnZXMgfSwgKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlIGNsYXNzTmFtZT17XCJib3JkZXItNCBib3JkZXItc2xhdGUtOTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTGF5b3V0PXsndHdvQ29sdW1uTGVmdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BwYWdlXyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyPXtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBbm5vdGF0aW9uTGF5ZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW50ZXJhY3RpdmVGb3Jtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGV4dExheWVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVRleHRSZW5kZXJlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByZXZQZGZDbGlja30+UHJldmlvdXMgUERGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk5leHRQZGZDbGlja30+TmV4dCBQREY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnNnB4IHNvbGlkIHJnYmEoYmxhY2ssIGJsYWNrLCBibGFjaywgMC4xKScsXHJcbiAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2ZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZD1cIm15ZmlsZS5wZGZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEb3dubG9hZCBQREZcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRG9jdW1lbnQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSBcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmtBbm5vdGF0aW9uIiwiRG9jdW1lbnQiLCJQYWdlIiwicGRmanMiLCJ3b3JrZXJTcmMiLCJHbG9iYWxXb3JrZXJPcHRpb25zIiwic291cmNlIiwidHlwZSIsInVybCIsIlBERlZpZXdlciIsImZpbGUiLCJzZXRGaWxlIiwibnVtUGFnZXMiLCJzZXROdW1QYWdlcyIsImZpbGVVcmwiLCJzZXRGaWxlVXJsIiwiY3VycmVudFBkZkluZGV4Iiwic2V0Q3VycmVudFBkZkluZGV4Iiwib25GaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGVUb0ZldGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiYXJyYXlCdWZmZXIiLCJidWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwib25Eb2N1bWVudExvYWRTdWNjZXNzIiwibmV4dE51bVBhZ2VzIiwib25OZXh0UGRmQ2xpY2siLCJvblByZXZQZGZDbGljayIsImRpdiIsIm9uTG9hZFN1Y2Nlc3MiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJwYWdlTGF5b3V0IiwicGFnZU51bWJlciIsInJlbmRlckFubm90YXRpb25MYXllciIsInJlbmRlckludGVyYWN0aXZlRm9ybXMiLCJyZW5kZXJUZXh0TGF5ZXIiLCJjdXN0b21UZXh0UmVuZGVyZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYSIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImJvcmRlciIsImhyZWYiLCJkb3dubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pdf-viewer.js\n"));

/***/ })

});