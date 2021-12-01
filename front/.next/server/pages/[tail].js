/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[tail]";
exports.ids = ["pages/[tail]"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8zYTNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/[tail].js":
/*!*************************!*\
  !*** ./pages/[tail].js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenge_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../challenge.json */ \"./challenge.json\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst GET_MY_TAILS = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\n  query GetTail($tail: String!) {\n    long_tails(where: { tail: { _eq: $tail } }) {\n      tail\n      json_id\n    }\n  }\n`;\nfunction Tail() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { tail  } = router.query;\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_MY_TAILS, {\n        variables: {\n            tail\n        }\n    });\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            __source: {\n                fileName: \"/home/dev/Work/testhasura/front/pages/[tail].js\",\n                lineNumber: 25,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"loading\"\n        }));\n    }\n    if (error) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            __source: {\n                fileName: \"/home/dev/Work/testhasura/front/pages/[tail].js\",\n                lineNumber: 29,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Try again later\"\n        }));\n    }\n    if (!(data === null || data === void 0 ? void 0 : data.long_tails.length)) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            __source: {\n                fileName: \"/home/dev/Work/testhasura/front/pages/[tail].js\",\n                lineNumber: 33,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Theres is no a such tail\"\n        }));\n    }\n    try {\n        const parsedJson = JSON.parse(JSON.stringify(_challenge_json__WEBPACK_IMPORTED_MODULE_2__));\n        const { json_id  } = data.long_tails[0];\n        const { title: tailTitle , description  } = parsedJson.find((el)=>el.id === json_id\n        );\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            __source: {\n                fileName: \"/home/dev/Work/testhasura/front/pages/[tail].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                tailTitle,\n                \" \",\n                description\n            ]\n        }));\n    } catch (err) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            __source: {\n                fileName: \"/home/dev/Work/testhasura/front/pages/[tail].js\",\n                lineNumber: 49,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Theres is no a such tail\"\n        }));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdGFpbF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSDtBQUNVO0FBRVY7QUFDaUI7QUFFckQsS0FBSyxDQUFDTSxZQUFZLEdBQUdILCtDQUFHLENBQUM7QUFTekIsTUFBTSxTQUFTLFFBQVEsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7SUFDOUIsS0FBSyxDQUFDQyxNQUFNLEdBQUdSLFNBQVM7SUFDeEIsS0FBSyxDQUFDO0lBQ04sS0FBSyxDQUFDLENBQUMsQ0FBQ1c7Ozs7QUFFUDtJQUVELEVBQUUsRUFBRUEsT0FBTyxFQUFFLENBQUM7UUFDWixNQUFNLG9CQUFFSSxDQUFHO1lBQUNDLFNBQVMsRUFBRWQsTUFBTSxDQUFDZSxJQUFJOzs7Ozs7O3NCQUFFLENBQU87O0lBQzdDLENBQUM7SUFFRCxFQUFFLEVBQUVMLEtBQUssRUFBRSxDQUFDO1FBQ1YsTUFBTTtZQUFNSTs7Ozs7OztzQkFBd0IsQ0FBZTs7SUFDckQsQ0FBQztJQUVELEVBQUUsSUFBR0gsSUFBSSxhQUFKQSxJQUFJO1FBQ1AsTUFBTTtZQUFNRzs7Ozs7OztzQkFBd0IsQ0FBd0I7O0lBQzlELENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0ksVUFBVSxHQUFHQyxJQUFJLENBQUNDO1FBQ3hCLEtBQUssQ0FBQztRQUNOLEtBQUssQ0FBQyxDQUFDLENBQUNHLEtBQUssRUFBRUM7O1FBSWY7Ozs7Ozs7OztnQkFFS0E7Z0JBQVUsQ0FBQztnQkFBQ0MsV0FBVzs7O0lBRzlCLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTTtZQUFNZixTQUFTLEVBQUVkOzs7Ozs7O3NCQUFhLENBQXdCOztJQUM5RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vcGFnZXMvW3RhaWxdLmpzP2Y3MDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGpzb24gZnJvbSAnLi4vY2hhbGxlbmdlLmpzb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgdXNlUXVlcnksIHdpdGhBcG9sbG8gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IEdFVF9NWV9UQUlMUyA9IGdxbGBcbiAgcXVlcnkgR2V0VGFpbCgkdGFpbDogU3RyaW5nISkge1xuICAgIGxvbmdfdGFpbHMod2hlcmU6IHsgdGFpbDogeyBfZXE6ICR0YWlsIH0gfSkge1xuICAgICAgdGFpbFxuICAgICAganNvbl9pZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFpbCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdGFpbCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfTVlfVEFJTFMsIHtcbiAgICB2YXJpYWJsZXM6IHsgdGFpbCB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PmxvYWRpbmc8L2Rpdj47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5UcnkgYWdhaW4gbGF0ZXI8L2Rpdj47XG4gIH1cblxuICBpZiAoIWRhdGE/LmxvbmdfdGFpbHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+VGhlcmVzIGlzIG5vIGEgc3VjaCB0YWlsPC9kaXY+O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWRKc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqc29uKSk7XG4gICAgY29uc3QgeyBqc29uX2lkIH0gPSBkYXRhLmxvbmdfdGFpbHNbMF07XG4gICAgY29uc3QgeyB0aXRsZTogdGFpbFRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gcGFyc2VkSnNvbi5maW5kKFxuICAgICAgKGVsKSA9PiBlbC5pZCA9PT0ganNvbl9pZFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge3RhaWxUaXRsZX0ge2Rlc2NyaXB0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+VGhlcmVzIGlzIG5vIGEgc3VjaCB0YWlsPC9kaXY+O1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwianNvbiIsInN0eWxlcyIsImdxbCIsInVzZVF1ZXJ5Iiwid2l0aEFwb2xsbyIsIkdFVF9NWV9UQUlMUyIsIlRhaWwiLCJyb3V0ZXIiLCJ0YWlsIiwicXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidmFyaWFibGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImxvbmdfdGFpbHMiLCJsZW5ndGgiLCJwYXJzZWRKc29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwianNvbl9pZCIsInRpdGxlIiwidGFpbFRpdGxlIiwiZGVzY3JpcHRpb24iLCJmaW5kIiwiZWwiLCJpZCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[tail].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "./challenge.json":
/*!************************!*\
  !*** ./challenge.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"title":"Hello","description":"World"},{"id":2,"title":"Hello 2","description":"World 2"},{"id":3,"title":"Hello 3","description":"World 3"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[tail].js"));
module.exports = __webpack_exports__;

})();