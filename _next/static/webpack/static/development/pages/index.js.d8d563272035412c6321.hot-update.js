webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/grant/dev/resume/pages/index.js";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









function p(x, y) {
  return "".concat(x, "px ").concat(y, "px");
}

var format = d3_time_format__WEBPACK_IMPORTED_MODULE_6__["timeFormat"]('%B %Y'); // with days

function timeSpent(start, end) {
  var raw_months = d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMonth"].count(start, end);
  var years = Math.floor(raw_months / 12);
  var months = years > 0 ? raw_months % years : raw_months;
  var months_end = d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMonth"].offset(start, raw_months);
  var days = d3_time__WEBPACK_IMPORTED_MODULE_5__["timeDay"].count(months_end, end); // round months

  if (days > 15) months++;
  var values = [];

  if (years > 0) {
    values.push(years + ' ' + pluralize__WEBPACK_IMPORTED_MODULE_7__('year', years));
  }

  if (months > 0) {
    values.push(months + ' ' + pluralize__WEBPACK_IMPORTED_MODULE_7__('month', months));
  }

  if (days > 0) {// values.push(days + " " + Pluralize("day", days));
  }

  return values.join(', ');
}

function formatTime(start, end) {
  return format(start) + '–' + (+end === +new Date() ? 'now' : format(end)) + ', ' + timeSpent(start, end);
}

var links = [['https://constraint.systems', 'A collection of experimental web-based creative tools that I designed and coded.'] // ['http://feed.grantcuster.com', 'Work and inspiration in progress.'],
// [
//   'https://turbofan.fastforwardlabs.com',
//   'A Cloudera Fast Forward Labs prototype that places you in the role of turbofan factory owner.',
// ],
// [
//   'https://fastforwardlabs.github.io/prototype-videos',
//   "A video overview of the nine prototypes we've built at Cloudera Fast Forward Labs.",
// ],
// [
//   'https://beta.observablehq.com/@grantcuster',
//   'Code and design experiments in the form of interactive Observable notebooks.',
// ],
// [
//   'https://grantcuster.github.io/umap-explorer',
//   'A proof-of-concept that uses three.js to render tens of thousands of data points in an interactive visualization',
// ],
// ['https://blog.fastforwardlabs.com', 'The Cloudera Fast Forward Labs blog.'],
// [
//   'https://scifi.fastforwardlabs.com',
//   'A mini-site showcasing the science fiction stories included in each of the Fast Forward Labs reports.',
// ],
];
var description = 'Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.';

var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = _createSuper(_default);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                return _context.abrupt("return", {
                  test: null
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      loaded: false,
      width: null,
      height: null,
      layout: 'web',
      render_info: null,
      origin: null
    };
    _this.link = _this.link.bind(_assertThisInitialized(_this));
    _this.setSize = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.debounce(_this.setSize.bind(_assertThisInitialized(_this)), 100);
    _this.setLayout = _this.setLayout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "setSize",
    value: function setSize() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        loaded: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setSize();
      window.addEventListener('resize', this.setSize);
      var render_info = bowser__WEBPACK_IMPORTED_MODULE_8__["getParser"](window.navigator.userAgent).parse().parsedResult;
      this.setState({
        render_info: render_info,
        origin: window.location.href
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setSize);
    }
  }, {
    key: "setLayout",
    value: function setLayout(layout) {
      this.setState({
        layout: layout
      });
    }
  }, {
    key: "link",
    value: function link(href) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: href,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 12
        }
      }, href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          loaded = _this$state.loaded,
          width = _this$state.width,
          height = _this$state.height,
          layout = _this$state.layout,
          render_info = _this$state.render_info,
          origin = _this$state.origin;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var column_target = grem * 14;
      var columns = Math.max(1, Math.round(width / column_target));
      var column_width = width / columns;
      var main_width = Math.min(columns, 2) * column_width;
      var main_margin = Math.floor((columns - Math.min(columns, 2)) / 2) * column_width;

      if (layout === 'print') {
        width = null;
        height = null;
      }

      if (width === null) {
        main_width = 'auto';
        main_margin = 0;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "theme-color",
        content: "#efefef",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, "Grant Custer \u2192 R\xE9sum\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: description,
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:title",
        content: "Grant Custer \u2192 R\xE9sum\xE9",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:description",
        content: description,
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:url",
        content: "http://resume.grantcuster.com",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }
      }, ".js-no-flash { display: none }"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("noscript", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }
      }, ".js-no-flash { display: block }"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          display: loaded ? 'block' : null
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]) + " " + "js-no-flash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }
      }, "Grant Custer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, "Design\u2013Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          minHeight: grem
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]) + " " + "print-hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, "R\xE9sum\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          width: main_width,
          padding: grem / 2,
          marginLeft: main_margin
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }
      }, "Grant Custer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 15
        }
      }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 15
        }
      }, "Work experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Cloudera Fast Forward Labs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 15
        }
      }, formatTime(new Date(2014, 7, 7), new Date())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }, "Designed and coded the interfaces for nine product prototypes demonstrating the possibilities of emerging technologies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      }, "Designed the Fast Forward Labs brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, "Managed two projects by FFL interns, where they scoped, created and released their own prototypes."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Betaworks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 15
        }
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }, "Designed and coded the interfaces for early-stage (under four-person) start-ups.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Banters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 15
        }
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 15
        }
      }, "Designed and coded interfaces for a start-up focused on capturing memorable conversations.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }
      }, "Code and software experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }
      }, "Code: Javascript, React, D3.js, three.js, HTML, CSS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 15
        }
      }, "Software: Figma, Photoshop, Illustrator, InDesign.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem,
          marginTop: grem
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 15
        }
      }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 15
        }
      }, links.map(function (l) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          __self: _this2,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 19
          }
        }, _this2.link(l[0]), " \u2013\xA0", l[1]);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {},
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 15
        }
      }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 15
        }
      }, "Email: grantcuster@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 15
        }
      }, "Twitter:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/GrantCuster",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 17
        }
      }, "@GrantCuster")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }
      }, "Generated", origin !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 15
        }
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name) : null, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "365242223",
        css: "@page{margin:calc(0.75in - ".concat(grem, "px);}*{box-sizing:border-box;}@media print{.content{width:auto !important;margin:auto !important;}.print-hide{display:none;}}html{font-size:").concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Helvetica,Arial,sans-serif,'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol';}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L2Rldi9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1IyQixBQUdtQyxBQUcrQixBQUk3QixBQUlULEFBSTBCLEFBSWhDLEFBT0EsQUFJRyxBQUtRLFNBZkQsQUFPd0IsR0FJdEIsQ0FuQnJCLE9Bd0JrQixFQW5DcEIsQUFPMkIsTUFlWSxLQVNmLEtBS0YsR0FyQnFCLElBUHpDLE9BbUJGLENBeEJBLEVBNkJBLEdBS2MsWUFDRixVQUNELEVBdkJYLE9Bd0I0Qiw0REFDSCx1QkFDUixHQW5CakIsWUFvQkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvZGV2L3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzLXRpbWUnXG5pbXBvcnQgKiBhcyBkM2YgZnJvbSAnZDMtdGltZS1mb3JtYXQnXG5pbXBvcnQgKiBhcyBQbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuaW1wb3J0ICogYXMgQm93c2VyIGZyb20gJ2Jvd3NlcidcblxuZnVuY3Rpb24gcCh4LCB5KSB7XG4gIHJldHVybiBgJHt4fXB4ICR7eX1weGBcbn1cblxubGV0IGZvcm1hdCA9IGQzZi50aW1lRm9ybWF0KCclQiAlWScpXG5cbi8vIHdpdGggZGF5c1xuZnVuY3Rpb24gdGltZVNwZW50KHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJhd19tb250aHMgPSBkMy50aW1lTW9udGguY291bnQoc3RhcnQsIGVuZClcbiAgbGV0IHllYXJzID0gTWF0aC5mbG9vcihyYXdfbW9udGhzIC8gMTIpXG4gIGxldCBtb250aHMgPSB5ZWFycyA+IDAgPyByYXdfbW9udGhzICUgeWVhcnMgOiByYXdfbW9udGhzXG4gIGxldCBtb250aHNfZW5kID0gZDMudGltZU1vbnRoLm9mZnNldChzdGFydCwgcmF3X21vbnRocylcbiAgbGV0IGRheXMgPSBkMy50aW1lRGF5LmNvdW50KG1vbnRoc19lbmQsIGVuZClcbiAgLy8gcm91bmQgbW9udGhzXG4gIGlmIChkYXlzID4gMTUpIG1vbnRocysrXG4gIGxldCB2YWx1ZXMgPSBbXVxuICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2goeWVhcnMgKyAnICcgKyBQbHVyYWxpemUoJ3llYXInLCB5ZWFycykpXG4gIH1cbiAgaWYgKG1vbnRocyA+IDApIHtcbiAgICB2YWx1ZXMucHVzaChtb250aHMgKyAnICcgKyBQbHVyYWxpemUoJ21vbnRoJywgbW9udGhzKSlcbiAgfVxuICBpZiAoZGF5cyA+IDApIHtcbiAgICAvLyB2YWx1ZXMucHVzaChkYXlzICsgXCIgXCIgKyBQbHVyYWxpemUoXCJkYXlcIiwgZGF5cykpO1xuICB9XG4gIHJldHVybiB2YWx1ZXMuam9pbignLCAnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChcbiAgICBmb3JtYXQoc3RhcnQpICtcbiAgICAn4oCTJyArXG4gICAgKCtlbmQgPT09ICtuZXcgRGF0ZSgpID8gJ25vdycgOiBmb3JtYXQoZW5kKSkgK1xuICAgICcswqAnICtcbiAgICB0aW1lU3BlbnQoc3RhcnQsIGVuZClcbiAgKVxufVxuXG5sZXQgbGlua3MgPSBbXG4gIFsnaHR0cHM6Ly9jb25zdHJhaW50LnN5c3RlbXMnLCAnQSBjb2xsZWN0aW9uIG9mIGV4cGVyaW1lbnRhbCB3ZWItYmFzZWQgY3JlYXRpdmUgdG9vbHMgdGhhdCBJIGRlc2lnbmVkIGFuZCBjb2RlZC4nXVxuICAvLyBbJ2h0dHA6Ly9mZWVkLmdyYW50Y3VzdGVyLmNvbScsICdXb3JrIGFuZCBpbnNwaXJhdGlvbiBpbiBwcm9ncmVzcy4nXSxcbiAgLy8gW1xuICAvLyAgICdodHRwczovL3R1cmJvZmFuLmZhc3Rmb3J3YXJkbGFicy5jb20nLFxuICAvLyAgICdBIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzIHByb3RvdHlwZSB0aGF0IHBsYWNlcyB5b3UgaW4gdGhlIHJvbGUgb2YgdHVyYm9mYW4gZmFjdG9yeSBvd25lci4nLFxuICAvLyBdLFxuICAvLyBbXG4gIC8vICAgJ2h0dHBzOi8vZmFzdGZvcndhcmRsYWJzLmdpdGh1Yi5pby9wcm90b3R5cGUtdmlkZW9zJyxcbiAgLy8gICBcIkEgdmlkZW8gb3ZlcnZpZXcgb2YgdGhlIG5pbmUgcHJvdG90eXBlcyB3ZSd2ZSBidWlsdCBhdCBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicy5cIixcbiAgLy8gXSxcbiAgLy8gW1xuICAvLyAgICdodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AZ3JhbnRjdXN0ZXInLFxuICAvLyAgICdDb2RlIGFuZCBkZXNpZ24gZXhwZXJpbWVudHMgaW4gdGhlIGZvcm0gb2YgaW50ZXJhY3RpdmUgT2JzZXJ2YWJsZSBub3RlYm9va3MuJyxcbiAgLy8gXSxcbiAgLy8gW1xuICAvLyAgICdodHRwczovL2dyYW50Y3VzdGVyLmdpdGh1Yi5pby91bWFwLWV4cGxvcmVyJyxcbiAgLy8gICAnQSBwcm9vZi1vZi1jb25jZXB0IHRoYXQgdXNlcyB0aHJlZS5qcyB0byByZW5kZXIgdGVucyBvZiB0aG91c2FuZHMgb2YgZGF0YSBwb2ludHMgaW4gYW4gaW50ZXJhY3RpdmUgdmlzdWFsaXphdGlvbicsXG4gIC8vIF0sXG4gIC8vIFsnaHR0cHM6Ly9ibG9nLmZhc3Rmb3J3YXJkbGFicy5jb20nLCAnVGhlIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzIGJsb2cuJ10sXG4gIC8vIFtcbiAgLy8gICAnaHR0cHM6Ly9zY2lmaS5mYXN0Zm9yd2FyZGxhYnMuY29tJyxcbiAgLy8gICAnQSBtaW5pLXNpdGUgc2hvd2Nhc2luZyB0aGUgc2NpZW5jZSBmaWN0aW9uIHN0b3JpZXMgaW5jbHVkZWQgaW4gZWFjaCBvZiB0aGUgRmFzdCBGb3J3YXJkIExhYnMgcmVwb3J0cy4nLFxuICAvLyBdLFxuXVxuXG5sZXQgZGVzY3JpcHRpb24gPVxuICAnRGVzaWduZXIgYW5kIGZyb250LWVuZCBkZXZlbG9wZXIgaW50ZXJlc3RlZCBpbiBwcm9jZWR1cmFsIGdlbmVyYXRpb24sIGRhdGEgdmlzdWFsaXphdGlvbiwgcHJvZHVjdCBkZXNpZ24gYW5kIHJldGhpbmtpbmcgdGhpbmdzIGZyb20gc2NyYXRjaC4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgcmV0dXJuIHsgdGVzdDogbnVsbCB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBsYXlvdXQ6ICd3ZWInLFxuICAgICAgcmVuZGVyX2luZm86IG51bGwsXG4gICAgICBvcmlnaW46IG51bGwsXG4gICAgfVxuICAgIHRoaXMubGluayA9IHRoaXMubGluay5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTaXplID0gXy5kZWJvdW5jZSh0aGlzLnNldFNpemUuYmluZCh0aGlzKSwgMTAwKVxuICAgIHRoaXMuc2V0TGF5b3V0ID0gdGhpcy5zZXRMYXlvdXQuYmluZCh0aGlzKVxuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgbG9hZGVkOiB0cnVlLFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFNpemUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gICAgbGV0IHJlbmRlcl9pbmZvID0gQm93c2VyLmdldFBhcnNlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkucGFyc2UoKVxuICAgICAgLnBhcnNlZFJlc3VsdFxuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJfaW5mbywgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZiB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0U2l6ZSlcbiAgfVxuXG4gIHNldExheW91dChsYXlvdXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGF5b3V0OiBsYXlvdXQgfSlcbiAgfVxuXG4gIGxpbmsoaHJlZikge1xuICAgIHJldHVybiA8YSBocmVmPXtocmVmfT57aHJlZn08L2E+XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbG9hZGVkLCB3aWR0aCwgaGVpZ2h0LCBsYXlvdXQsIHJlbmRlcl9pbmZvLCBvcmlnaW4gfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgZm9udF9zaXplID0gMTZcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjVcbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBsZXQgY29sdW1uX3RhcmdldCA9IGdyZW0gKiAxNFxuICAgIGxldCBjb2x1bW5zID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAvIGNvbHVtbl90YXJnZXQpKVxuICAgIGxldCBjb2x1bW5fd2lkdGggPSB3aWR0aCAvIGNvbHVtbnNcbiAgICBsZXQgbWFpbl93aWR0aCA9IE1hdGgubWluKGNvbHVtbnMsIDIpICogY29sdW1uX3dpZHRoXG4gICAgbGV0IG1haW5fbWFyZ2luID1cbiAgICAgIE1hdGguZmxvb3IoKGNvbHVtbnMgLSBNYXRoLm1pbihjb2x1bW5zLCAyKSkgLyAyKSAqIGNvbHVtbl93aWR0aFxuXG4gICAgaWYgKGxheW91dCA9PT0gJ3ByaW50Jykge1xuICAgICAgd2lkdGggPSBudWxsXG4gICAgICBoZWlnaHQgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHdpZHRoID09PSBudWxsKSB7XG4gICAgICBtYWluX3dpZHRoID0gJ2F1dG8nXG4gICAgICBtYWluX21hcmdpbiA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNlZmVmZWZcIiAvPlxuICAgICAgICAgIDx0aXRsZT5HcmFudCBDdXN0ZXIg4oaSIFLDqXN1bcOpPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSB0eXBlPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJHcmFudCBDdXN0ZXIg4oaSIFLDqXN1bcOpXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL3Jlc3VtZS5ncmFudGN1c3Rlci5jb21cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICAgICAgPHN0eWxlPntgLmpzLW5vLWZsYXNoIHsgZGlzcGxheTogbm9uZSB9YH08L3N0eWxlPlxuICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgIDxzdHlsZT57YC5qcy1uby1mbGFzaCB7IGRpc3BsYXk6IGJsb2NrIH1gfTwvc3R5bGU+XG4gICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwianMtbm8tZmxhc2hcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRlZCA/ICdibG9jaycgOiBudWxsIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgPGRpdj5HcmFudCBDdXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RGVzaWdu4oCTQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5IZWlnaHQ6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW50LWhpZGVcIj5cbiAgICAgICAgICAgICAgICB7d2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IGAke3dpZHRofXgke2hlaWdodH1gXG4gICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Sw6lzdW3DqTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IG1haW5fd2lkdGgsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYWluX21hcmdpbixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5HcmFudCBDdXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtIH19PlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+V29yayBleHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk2RldmVsb3BlciwgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDE0LCA3LCA3KSwgbmV3IERhdGUoKSl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgdGhlIGludGVyZmFjZXMgZm9yIG5pbmUgcHJvZHVjdCBwcm90b3R5cGVzXG4gICAgICAgICAgICAgICAgICBkZW1vbnN0cmF0aW5nIHRoZSBwb3NzaWJpbGl0aWVzIG9mIGVtZXJnaW5nIHRlY2hub2xvZ2llcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBEZXNpZ25lZCB0aGUgRmFzdCBGb3J3YXJkIExhYnMgYnJhbmQgYW5kIHN1cnJvdW5kaW5nIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nIG5pbmUgcHJpbnRlZCByZXNlYXJjaCByZXBvcnRzLCB0aGUgd2Vic2l0ZSwgdGhlXG4gICAgICAgICAgICAgICAgICBibG9nLCBhbmQgaW50ZXJuYWwgdG9vbHMuIFBvc3QtQ2xvdWRlcmEgYWNxdWlzaXRpb24gKGluIDIwMTcpXG4gICAgICAgICAgICAgICAgICBJJ3ZlIGJlZW4gd29ya2luZyB0byBpbnRlZ3JhdGUgdGhhdCBicmFuZCBpbnRvIHRoZSBsYXJnZXJcbiAgICAgICAgICAgICAgICAgIENsb3VkZXJhIGJyYW5kIHN5c3RlbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2VkIHR3byBwcm9qZWN0cyBieSBGRkwgaW50ZXJucywgd2hlcmUgdGhleSBzY29wZWQsXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkIGFuZCByZWxlYXNlZCB0aGVpciBvd24gcHJvdG90eXBlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNkZXZlbG9wZXIsIEJldGF3b3JrczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTIsIDYsIDE1KSwgbmV3IERhdGUoMjAxNCwgNywgMjgpKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCB0aGUgaW50ZXJmYWNlcyBmb3IgZWFybHktc3RhZ2UgKHVuZGVyXG4gICAgICAgICAgICAgICAgZm91ci1wZXJzb24pIHN0YXJ0LXVwcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNkZXZlbG9wZXIsIEJhbnRlcnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDExLCAxMSwgMSksIG5ldyBEYXRlKDIwMTIsIDYsIDE1KSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgaW50ZXJmYWNlcyBmb3IgYSBzdGFydC11cCBmb2N1c2VkIG9uXG4gICAgICAgICAgICAgICAgY2FwdHVyaW5nIG1lbW9yYWJsZSBjb252ZXJzYXRpb25zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBncmVtIH19PlxuICAgICAgICAgICAgICA8ZGl2PkNvZGUgYW5kIHNvZnR3YXJlIGV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+Q29kZTogSmF2YXNjcmlwdCwgUmVhY3QsIEQzLmpzLCB0aHJlZS5qcywgSFRNTCwgQ1NTLjwvcD5cbiAgICAgICAgICAgICAgPHA+U29mdHdhcmU6IEZpZ21hLCBQaG90b3Nob3AsIElsbHVzdHJhdG9yLCBJbkRlc2lnbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtLCBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+TGlua3M8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMubGluayhsWzBdKX0g4oCTwqB7bFsxXX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgPGRpdj5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgIDxwPkVtYWlsOiBncmFudGN1c3RlckBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFR3aXR0ZXI6eycgJ31cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9HcmFudEN1c3RlclwiPkBHcmFudEN1c3RlcjwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgIEdlbmVyYXRlZFxuICAgICAgICAgICAge29yaWdpbiAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgPHNwYW4+IGZyb20ge3RoaXMubGluayhvcmlnaW4pfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfSBvbiB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAge3JlbmRlcl9pbmZvICE9PSBudWxsXG4gICAgICAgICAgICAgID8gYCB3aXRoICR7cmVuZGVyX2luZm8uYnJvd3Nlci5uYW1lfSAke3JlbmRlcl9pbmZvLmJyb3dzZXIudmVyc2lvbn0gb24gJHtyZW5kZXJfaW5mby5vcy5uYW1lfWBcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBwYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYygwLjc1aW4gLSAke2dyZW19cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmludC1oaWRlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7Zm9udF9zaXplfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGluZV9oZWlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gICAgICAgICAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsXG4gICAgICAgICAgICAgICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/grant/dev/resume/pages/index.js */"),
        dynamic: [grem, font_size, line_height, grem]
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d8d563272035412c6321.hot-update.js.map