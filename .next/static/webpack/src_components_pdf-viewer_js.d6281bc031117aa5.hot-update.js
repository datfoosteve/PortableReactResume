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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PDFViewer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\n/* harmony import */ var _pdf_worker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pdf-worker.js */ \"./pdf-worker.js\");\n/* harmony import */ var _pdf_worker_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pdf_worker_js__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// Set the workerSrc property of the GlobalWorkerOptions object to use a custom worker\nreact_pdf__WEBPACK_IMPORTED_MODULE_2__.pdfjs.GlobalWorkerOptions.workerSrc = (_pdf_worker_js__WEBPACK_IMPORTED_MODULE_3___default());\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.LinkAnnotation, {\n    source: {\n        type: \"URL\",\n        url: \"http://example.com\"\n    }\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n    lineNumber: 8,\n    columnNumber: 1\n}, undefined);\nfunction PDFViewer() {\n    _s();\n    // Declare state variables to store the file, the number of pages in the file, and the URL of the file\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUrl, setFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Declare a state variable to store the current PDF index\n    const [currentPdfIndex, setCurrentPdfIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Declare an event handler to set the file state variable when the file input changes\n    function onFileChange(event) {\n        setFile(event.target.files[0]);\n    }\n    // Use an effect to fetch the current PDF file and set the file state variable\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Determine the file to fetch based on the current PDF index\n        const fileToFetch = \"sample\".concat(currentPdfIndex + 1, \".pdf\");\n        fetch(fileToFetch).then((res)=>{\n            // Fetch the PDF file and convert it to an ArrayBuffer\n            res.arrayBuffer().then((buf)=>{\n                // Set the file state variable to the ArrayBuffer\n                setFile(buf);\n            });\n        });\n    }, [\n        currentPdfIndex\n    ]);\n    // Use an effect to create an object URL for the file and set the fileUrl state variable\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Create an object URL for the file\n        setFileUrl(URL.createObjectURL(new Blob([\n            file\n        ])));\n    }, [\n        file\n    ]);\n    // Declare an event handler to set the numPages state variable when the document is successfully loaded\n    function onDocumentLoadSuccess(param) {\n        let { numPages: nextNumPages  } = param;\n        setNumPages(nextNumPages);\n    }\n    // Declare an event handler to cycle through the PDFs when the button is clicked\n    function onNextPdfClick() {\n        // Increment the current PDF index, wrapping around to 0 when it reaches the end\n        setCurrentPdfIndex((currentPdfIndex + 1) % 4);\n    }\n    function onPrevPdfClick() {\n        // Decrement the current PDF index, wrapping around to 3 when it reaches 0\n        setCurrentPdfIndex((currentPdfIndex - 1 + 4) % 4);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"about\",\n        className: \"about bg-slate\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"title decoration-orange\",\n                children: \"Printable Resume\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto mt-12 mb-12 max-w-4xl md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Document, {\n                    file: file,\n                    onLoadSuccess: onDocumentLoadSuccess,\n                    children: [\n                        Array.from({\n                            length: numPages\n                        }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                                className: \"border-slate-900 border-4\",\n                                pageLayout: (\"twoPageLeft\", \"twocol\"),\n                                pageNumber: index + 1,\n                                renderAnnotationLayer: false,\n                                renderInteractiveForms: true,\n                                renderTextLayer: false,\n                                customTextRenderer: false\n                            }, \"page_\".concat(index + 1), false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"resumeDownload\",\n                            onClick: onPrevPdfClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"download\",\n                                children: \"Previous PDF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 76,\n                                columnNumber: 81\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"resumeDownload\",\n                                href: fileUrl,\n                                download: \"myfile.pdf\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"download\",\n                                    children: \"Download Pdf\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"resumeDownload\",\n                            onClick: onNextPdfClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"download\",\n                                children: \"Next PDF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 84,\n                                columnNumber: 81\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(PDFViewer, \"aTYT896KP3im7wb8bv5NepUux7g=\");\n_c = PDFViewer;\nvar _c;\n$RefreshReg$(_c, \"PDFViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU3BCO3NDQUFnQiw0RUFBQ007Z0NBQUlGLFdBQVU7MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlGLDhEQUFDRTs7Ozs7Ozs7Ozs7QUFHYixDQUFDO0dBaEZ1QjlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BkZi12aWV3ZXIuanM/ZmU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rQW5ub3RhdGlvbiwgRG9jdW1lbnQsIFBhZ2UsIHBkZmpzIH0gZnJvbSAncmVhY3QtcGRmJztcclxuaW1wb3J0IHdvcmtlclNyYyBmcm9tICcuLi8uLi9wZGYtd29ya2VyLmpzJztcclxuXHJcbi8vIFNldCB0aGUgd29ya2VyU3JjIHByb3BlcnR5IG9mIHRoZSBHbG9iYWxXb3JrZXJPcHRpb25zIG9iamVjdCB0byB1c2UgYSBjdXN0b20gd29ya2VyXHJcbnBkZmpzLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gd29ya2VyU3JjO1xyXG5cclxuPExpbmtBbm5vdGF0aW9uIHNvdXJjZT17eyB0eXBlOiAnVVJMJywgdXJsOiAnaHR0cDovL2V4YW1wbGUuY29tJyB9fSAvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBERlZpZXdlcigpIHtcclxuICAgIC8vIERlY2xhcmUgc3RhdGUgdmFyaWFibGVzIHRvIHN0b3JlIHRoZSBmaWxlLCB0aGUgbnVtYmVyIG9mIHBhZ2VzIGluIHRoZSBmaWxlLCBhbmQgdGhlIFVSTCBvZiB0aGUgZmlsZVxyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZmlsZVVybCwgc2V0RmlsZVVybF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gRGVjbGFyZSBhIHN0YXRlIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBjdXJyZW50IFBERiBpbmRleFxyXG4gICAgY29uc3QgW2N1cnJlbnRQZGZJbmRleCwgc2V0Q3VycmVudFBkZkluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIC8vIERlY2xhcmUgYW4gZXZlbnQgaGFuZGxlciB0byBzZXQgdGhlIGZpbGUgc3RhdGUgdmFyaWFibGUgd2hlbiB0aGUgZmlsZSBpbnB1dCBjaGFuZ2VzXHJcbiAgICBmdW5jdGlvbiBvbkZpbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBzZXRGaWxlKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIGFuIGVmZmVjdCB0byBmZXRjaCB0aGUgY3VycmVudCBQREYgZmlsZSBhbmQgc2V0IHRoZSBmaWxlIHN0YXRlIHZhcmlhYmxlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZmlsZSB0byBmZXRjaCBiYXNlZCBvbiB0aGUgY3VycmVudCBQREYgaW5kZXhcclxuICAgICAgICBjb25zdCBmaWxlVG9GZXRjaCA9IGBzYW1wbGUke2N1cnJlbnRQZGZJbmRleCArIDF9LnBkZmA7XHJcblxyXG4gICAgICAgIGZldGNoKGZpbGVUb0ZldGNoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIFBERiBmaWxlIGFuZCBjb252ZXJ0IGl0IHRvIGFuIEFycmF5QnVmZmVyXHJcbiAgICAgICAgICAgIHJlcy5hcnJheUJ1ZmZlcigpLnRoZW4oKGJ1ZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBmaWxlIHN0YXRlIHZhcmlhYmxlIHRvIHRoZSBBcnJheUJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgc2V0RmlsZShidWYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtjdXJyZW50UGRmSW5kZXhdKTtcclxuXHJcbiAgICAvLyBVc2UgYW4gZWZmZWN0IHRvIGNyZWF0ZSBhbiBvYmplY3QgVVJMIGZvciB0aGUgZmlsZSBhbmQgc2V0IHRoZSBmaWxlVXJsIHN0YXRlIHZhcmlhYmxlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3QgVVJMIGZvciB0aGUgZmlsZVxyXG4gICAgICAgIHNldEZpbGVVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbZmlsZV0pKSk7XHJcbiAgICB9LCBbZmlsZV0pO1xyXG5cclxuICAgIC8vIERlY2xhcmUgYW4gZXZlbnQgaGFuZGxlciB0byBzZXQgdGhlIG51bVBhZ2VzIHN0YXRlIHZhcmlhYmxlIHdoZW4gdGhlIGRvY3VtZW50IGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWRcclxuICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRMb2FkU3VjY2Vzcyh7IG51bVBhZ2VzOiBuZXh0TnVtUGFnZXMgfSkge1xyXG4gICAgICAgIHNldE51bVBhZ2VzKG5leHROdW1QYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVjbGFyZSBhbiBldmVudCBoYW5kbGVyIHRvIGN5Y2xlIHRocm91Z2ggdGhlIFBERnMgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgIGZ1bmN0aW9uIG9uTmV4dFBkZkNsaWNrKCkge1xyXG4gICAgICAgIC8vIEluY3JlbWVudCB0aGUgY3VycmVudCBQREYgaW5kZXgsIHdyYXBwaW5nIGFyb3VuZCB0byAwIHdoZW4gaXQgcmVhY2hlcyB0aGUgZW5kXHJcbiAgICAgICAgc2V0Q3VycmVudFBkZkluZGV4KChjdXJyZW50UGRmSW5kZXggKyAxKSAlIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUHJldlBkZkNsaWNrKCkge1xyXG4gICAgICAgIC8vIERlY3JlbWVudCB0aGUgY3VycmVudCBQREYgaW5kZXgsIHdyYXBwaW5nIGFyb3VuZCB0byAzIHdoZW4gaXQgcmVhY2hlcyAwXHJcbiAgICAgICAgc2V0Q3VycmVudFBkZkluZGV4KChjdXJyZW50UGRmSW5kZXggLSAxICsgNCkgJSA0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJhYm91dCBiZy1zbGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkZWNvcmF0aW9uLW9yYW5nZVwiPlByaW50YWJsZSBSZXN1bWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0xMiBtYi0xMiBtYXgtdy00eGwgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpzcGFjZS14LTggbWQ6cHgtOCB4bDptYXgtdy02eGxcIj5cclxuICAgICAgICAgICAgICAgIDxEb2N1bWVudCBmaWxlPXtmaWxlfSBvbkxvYWRTdWNjZXNzPXtvbkRvY3VtZW50TG9hZFN1Y2Nlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1QYWdlcyB9LCAoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2JvcmRlci1zbGF0ZS05MDAgYm9yZGVyLTQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUxheW91dD17J3R3b1BhZ2VMZWZ0JywndHdvY29sJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHBhZ2VfJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI9e2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckFubm90YXRpb25MYXllcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnRlcmFjdGl2ZUZvcm1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUZXh0TGF5ZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVGV4dFJlbmRlcmVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlc3VtZURvd25sb2FkXCIgb25DbGljaz17b25QcmV2UGRmQ2xpY2t9PjxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWRcIj5QcmV2aW91cyBQREY8L2Rpdj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXN1bWVEb3dubG9hZFwiIGhyZWY9e2ZpbGVVcmx9IGRvd25sb2FkPVwibXlmaWxlLnBkZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZFwiPkRvd25sb2FkIFBkZjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVzdW1lRG93bmxvYWRcIiBvbkNsaWNrPXtvbk5leHRQZGZDbGlja30+PGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZFwiPk5leHQgUERGPC9kaXY+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RvY3VtZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGlua0Fubm90YXRpb24iLCJEb2N1bWVudCIsIlBhZ2UiLCJwZGZqcyIsIndvcmtlclNyYyIsIkdsb2JhbFdvcmtlck9wdGlvbnMiLCJzb3VyY2UiLCJ0eXBlIiwidXJsIiwiUERGVmlld2VyIiwiZmlsZSIsInNldEZpbGUiLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwiZmlsZVVybCIsInNldEZpbGVVcmwiLCJjdXJyZW50UGRmSW5kZXgiLCJzZXRDdXJyZW50UGRmSW5kZXgiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwiZmlsZVRvRmV0Y2giLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJvbkRvY3VtZW50TG9hZFN1Y2Nlc3MiLCJuZXh0TnVtUGFnZXMiLCJvbk5leHRQZGZDbGljayIsIm9uUHJldlBkZkNsaWNrIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwic3BhbiIsImRpdiIsIm9uTG9hZFN1Y2Nlc3MiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJwYWdlTGF5b3V0IiwicGFnZU51bWJlciIsInJlbmRlckFubm90YXRpb25MYXllciIsInJlbmRlckludGVyYWN0aXZlRm9ybXMiLCJyZW5kZXJUZXh0TGF5ZXIiLCJjdXN0b21UZXh0UmVuZGVyZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiYSIsImhyZWYiLCJkb3dubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pdf-viewer.js\n"));

/***/ })

});