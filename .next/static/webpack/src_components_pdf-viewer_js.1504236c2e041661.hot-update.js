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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PDFViewer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\n/* harmony import */ var _pdf_worker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pdf-worker.js */ \"./pdf-worker.js\");\n/* harmony import */ var _pdf_worker_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pdf_worker_js__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// Set the workerSrc property of the GlobalWorkerOptions object to use a custom worker\nreact_pdf__WEBPACK_IMPORTED_MODULE_2__.pdfjs.GlobalWorkerOptions.workerSrc = (_pdf_worker_js__WEBPACK_IMPORTED_MODULE_3___default());\n/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.LinkAnnotation, {\n    source: {\n        type: \"URL\",\n        url: \"http://example.com\"\n    }\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n    lineNumber: 8,\n    columnNumber: 1\n}, undefined);\nfunction PDFViewer() {\n    _s();\n    // Declare state variables to store the file, the number of pages in the file, and the URL of the file\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [numPages, setNumPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fileUrl, setFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Declare a state variable to store the current PDF index\n    const [currentPdfIndex, setCurrentPdfIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Declare an event handler to set the file state variable when the file input changes\n    function onFileChange(event) {\n        setFile(event.target.files[0]);\n    }\n    // Use an effect to fetch the current PDF file and set the file state variable\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Determine the file to fetch based on the current PDF index\n        const fileToFetch = \"sample\".concat(currentPdfIndex + 1, \".pdf\");\n        fetch(fileToFetch).then((res)=>{\n            // Fetch the PDF file and convert it to an ArrayBuffer\n            res.arrayBuffer().then((buf)=>{\n                // Set the file state variable to the ArrayBuffer\n                setFile(buf);\n            });\n        });\n    }, [\n        currentPdfIndex\n    ]);\n    // Use an effect to create an object URL for the file and set the fileUrl state variable\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Create an object URL for the file\n        setFileUrl(URL.createObjectURL(new Blob([\n            file\n        ])));\n    }, [\n        file\n    ]);\n    // Declare an event handler to set the numPages state variable when the document is successfully loaded\n    function onDocumentLoadSuccess(param) {\n        let { numPages: nextNumPages  } = param;\n        setNumPages(nextNumPages);\n    }\n    // Declare an event handler to cycle through the PDFs when the button is clicked\n    function onNextPdfClick() {\n        // Increment the current PDF index, wrapping around to 0 when it reaches the end\n        setCurrentPdfIndex((currentPdfIndex + 1) % 4);\n    }\n    function onPrevPdfClick() {\n        // Decrement the current PDF index, wrapping around to 3 when it reaches 0\n        setCurrentPdfIndex((currentPdfIndex - 1 + 4) % 4);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"printableResume\",\n        className: \"printableResume\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"title decoration-orange\",\n                children: \"PrintAble Resume\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto mt-12 mb-12 max-w-4xl md:grid md:grid-cols-2 md:space-x-8 md:px-8 xl:max-w-6xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Document, {\n                    file: file,\n                    onLoadSuccess: onDocumentLoadSuccess,\n                    children: [\n                        Array.from({\n                            length: numPages\n                        }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_pdf__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                                className: \"border-4 border-slate-900\",\n                                pageLayout: \"twoColumnLeft\",\n                                pageNumber: index + 1,\n                                renderAnnotationLayer: false,\n                                renderInteractiveForms: true,\n                                renderTextLayer: false,\n                                customTextRenderer: false\n                            }, \"page_\".concat(index + 1), false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onPrevPdfClick,\n                            children: \"Previous PDF\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onNextPdfClick,\n                            children: \"Next PDF\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"resumeDownload\",\n                                href: fileUrl,\n                                download: \"myfile.pdf\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"download\",\n                                    children: \"Download Pdf\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 16\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n                lineNumber: 90,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\datfo\\\\repos\\\\stephen\\\\src\\\\components\\\\pdf-viewer.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(PDFViewer, \"aTYT896KP3im7wb8bv5NepUux7g=\");\n_c = PDFViewer;\nvar _c;\n$RefreshReg$(_c, \"PDFViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BkZi12aWV3ZXIuanM/ZmU2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rQW5ub3RhdGlvbiwgRG9jdW1lbnQsIFBhZ2UsIHBkZmpzIH0gZnJvbSAncmVhY3QtcGRmJztcclxuaW1wb3J0IHdvcmtlclNyYyBmcm9tICcuLi8uLi9wZGYtd29ya2VyLmpzJztcclxuXHJcbi8vIFNldCB0aGUgd29ya2VyU3JjIHByb3BlcnR5IG9mIHRoZSBHbG9iYWxXb3JrZXJPcHRpb25zIG9iamVjdCB0byB1c2UgYSBjdXN0b20gd29ya2VyXHJcbnBkZmpzLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gd29ya2VyU3JjO1xyXG5cclxuPExpbmtBbm5vdGF0aW9uIHNvdXJjZT17eyB0eXBlOiBcIlVSTFwiLCB1cmw6IFwiaHR0cDovL2V4YW1wbGUuY29tXCIgfX0gIC8+XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUERGVmlld2VyKCkge1xyXG4gICAgLy8gRGVjbGFyZSBzdGF0ZSB2YXJpYWJsZXMgdG8gc3RvcmUgdGhlIGZpbGUsIHRoZSBudW1iZXIgb2YgcGFnZXMgaW4gdGhlIGZpbGUsIGFuZCB0aGUgVVJMIG9mIHRoZSBmaWxlXHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW251bVBhZ2VzLCBzZXROdW1QYWdlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IHVzZVN0YXRlKCk7XHJcbiAgICAvLyBEZWNsYXJlIGEgc3RhdGUgdmFyaWFibGUgdG8gc3RvcmUgdGhlIGN1cnJlbnQgUERGIGluZGV4XHJcbiAgICBjb25zdCBbY3VycmVudFBkZkluZGV4LCBzZXRDdXJyZW50UGRmSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgLy8gRGVjbGFyZSBhbiBldmVudCBoYW5kbGVyIHRvIHNldCB0aGUgZmlsZSBzdGF0ZSB2YXJpYWJsZSB3aGVuIHRoZSBmaWxlIGlucHV0IGNoYW5nZXNcclxuICAgIGZ1bmN0aW9uIG9uRmlsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIHNldEZpbGUoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgYW4gZWZmZWN0IHRvIGZldGNoIHRoZSBjdXJyZW50IFBERiBmaWxlIGFuZCBzZXQgdGhlIGZpbGUgc3RhdGUgdmFyaWFibGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBmaWxlIHRvIGZldGNoIGJhc2VkIG9uIHRoZSBjdXJyZW50IFBERiBpbmRleFxyXG4gICAgICAgIGNvbnN0IGZpbGVUb0ZldGNoID0gYHNhbXBsZSR7Y3VycmVudFBkZkluZGV4ICsgMX0ucGRmYDtcclxuXHJcbiAgICAgICAgZmV0Y2goZmlsZVRvRmV0Y2gpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAvLyBGZXRjaCB0aGUgUERGIGZpbGUgYW5kIGNvbnZlcnQgaXQgdG8gYW4gQXJyYXlCdWZmZXJcclxuICAgICAgICAgICAgcmVzLmFycmF5QnVmZmVyKCkudGhlbigoYnVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGZpbGUgc3RhdGUgdmFyaWFibGUgdG8gdGhlIEFycmF5QnVmZmVyXHJcbiAgICAgICAgICAgICAgICBzZXRGaWxlKGJ1Zik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2N1cnJlbnRQZGZJbmRleF0pO1xyXG5cclxuICAgIC8vIFVzZSBhbiBlZmZlY3QgdG8gY3JlYXRlIGFuIG9iamVjdCBVUkwgZm9yIHRoZSBmaWxlIGFuZCBzZXQgdGhlIGZpbGVVcmwgc3RhdGUgdmFyaWFibGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIG9iamVjdCBVUkwgZm9yIHRoZSBmaWxlXHJcbiAgICAgICAgc2V0RmlsZVVybChVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtmaWxlXSkpKTtcclxuICAgIH0sIFtmaWxlXSk7XHJcblxyXG4gICAgLy8gRGVjbGFyZSBhbiBldmVudCBoYW5kbGVyIHRvIHNldCB0aGUgbnVtUGFnZXMgc3RhdGUgdmFyaWFibGUgd2hlbiB0aGUgZG9jdW1lbnQgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxyXG4gICAgZnVuY3Rpb24gb25Eb2N1bWVudExvYWRTdWNjZXNzKHsgbnVtUGFnZXM6IG5leHROdW1QYWdlcyB9KSB7XHJcbiAgICAgICAgc2V0TnVtUGFnZXMobmV4dE51bVBhZ2VzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRGVjbGFyZSBhbiBldmVudCBoYW5kbGVyIHRvIGN5Y2xlIHRocm91Z2ggdGhlIFBERnMgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgIGZ1bmN0aW9uIG9uTmV4dFBkZkNsaWNrKCkge1xyXG4gICAgICAvLyBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgUERGIGluZGV4LCB3cmFwcGluZyBhcm91bmQgdG8gMCB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuZFxyXG4gICAgICBzZXRDdXJyZW50UGRmSW5kZXgoKGN1cnJlbnRQZGZJbmRleCArIDEpICUgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25QcmV2UGRmQ2xpY2soKSB7XHJcbiAgICAgIC8vIERlY3JlbWVudCB0aGUgY3VycmVudCBQREYgaW5kZXgsIHdyYXBwaW5nIGFyb3VuZCB0byAzIHdoZW4gaXQgcmVhY2hlcyAwXHJcbiAgICAgIHNldEN1cnJlbnRQZGZJbmRleCgoY3VycmVudFBkZkluZGV4IC0gMSArIDQpICUgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cInByaW50YWJsZVJlc3VtZVwiIGNsYXNzTmFtZT1cInByaW50YWJsZVJlc3VtZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBkZWNvcmF0aW9uLW9yYW5nZVwiPlByaW50QWJsZSBSZXN1bWU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0xMiBtYi0xMiBtYXgtdy00eGwgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpzcGFjZS14LTggbWQ6cHgtOCB4bDptYXgtdy02eGxcIj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RG9jdW1lbnQgZmlsZT17ZmlsZX0gb25Mb2FkU3VjY2Vzcz17b25Eb2N1bWVudExvYWRTdWNjZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtUGFnZXMgfSwgKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlIGNsYXNzTmFtZT17XCJib3JkZXItNCBib3JkZXItc2xhdGUtOTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTGF5b3V0PXsndHdvQ29sdW1uTGVmdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BwYWdlXyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtYmVyPXtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJBbm5vdGF0aW9uTGF5ZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW50ZXJhY3RpdmVGb3Jtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGV4dExheWVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVRleHRSZW5kZXJlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByZXZQZGZDbGlja30+UHJldmlvdXMgUERGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk5leHRQZGZDbGlja30+TmV4dCBQREY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVzdW1lRG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICBocmVmPXtmaWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ9XCJteWZpbGUucGRmXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25sb2FkXCI+RG93bmxvYWQgUGRmPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RvY3VtZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn0gXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rQW5ub3RhdGlvbiIsIkRvY3VtZW50IiwiUGFnZSIsInBkZmpzIiwid29ya2VyU3JjIiwiR2xvYmFsV29ya2VyT3B0aW9ucyIsInNvdXJjZSIsInR5cGUiLCJ1cmwiLCJQREZWaWV3ZXIiLCJmaWxlIiwic2V0RmlsZSIsIm51bVBhZ2VzIiwic2V0TnVtUGFnZXMiLCJmaWxlVXJsIiwic2V0RmlsZVVybCIsImN1cnJlbnRQZGZJbmRleCIsInNldEN1cnJlbnRQZGZJbmRleCIsIm9uRmlsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlVG9GZXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsIm9uRG9jdW1lbnRMb2FkU3VjY2VzcyIsIm5leHROdW1QYWdlcyIsIm9uTmV4dFBkZkNsaWNrIiwib25QcmV2UGRmQ2xpY2siLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJzcGFuIiwiZGl2Iiwib25Mb2FkU3VjY2VzcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsInBhZ2VMYXlvdXQiLCJwYWdlTnVtYmVyIiwicmVuZGVyQW5ub3RhdGlvbkxheWVyIiwicmVuZGVySW50ZXJhY3RpdmVGb3JtcyIsInJlbmRlclRleHRMYXllciIsImN1c3RvbVRleHRSZW5kZXJlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsImRvd25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pdf-viewer.js\n"));

/***/ })

});