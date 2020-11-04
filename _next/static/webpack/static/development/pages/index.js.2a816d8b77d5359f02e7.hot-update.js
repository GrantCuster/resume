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

var links = [['https://constraint.systems', 'An ongoing project where I design and code experimental web-based creative tools.'], ['https://activelearner.fastforwardlabs.com', 'A visualization of how you can use active learning to select training examples to label. I used three.js to render the points and animate the results of each training step.'], ['https://turbofan.fastforwardlabs.com/', 'Turbofan Tycoon illustrates the strengths of federated learning by letting you choose a maintenance strategy for your factory of turbofans. I had a lot of fun building a fast-moving turbofan dashboard.'], ['https://feed.grantcuster.com', 'Work and inspiration in progress.'], ['https://blog.fastforwardlabs.com', 'The Cloudera Fast Forward Labs blog. I maintain the blog and also do a lot of the design work you see on it.'] // [
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
          lineNumber: 132,
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
          lineNumber: 159,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "theme-color",
        content: "#efefef",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }
      }, "Grant Custer \u2192 R\xE9sum\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: description,
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:title",
        content: "Grant Custer \u2192 R\xE9sum\xE9",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:description",
        content: description,
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:url",
        content: "http://resume.grantcuster.com",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }
      }, ".js-no-flash { display: none }"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("noscript", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
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
          lineNumber: 177,
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
          lineNumber: 181,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }
      }, "Grant Custer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
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
          lineNumber: 184,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]) + " " + "print-hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 15
        }
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
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
          lineNumber: 193,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
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
          lineNumber: 202,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
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
          lineNumber: 205,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
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
          lineNumber: 208,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Cloudera Fast Forward Labs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }
      }, formatTime(new Date(2014, 7, 7), new Date())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, "Designed and coded the interfaces for nine product prototypes demonstrating the possibilities of emerging technologies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }
      }, "Designed the Fast Forward Labs brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
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
          lineNumber: 229,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Betaworks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 15
        }
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
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
          lineNumber: 239,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Banters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 15
        }
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
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
          lineNumber: 249,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 15
        }
      }, "Code and software experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 15
        }
      }, "Code: Javascript, React, D3.js, three.js, HTML, CSS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
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
          lineNumber: 254,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 15
        }
      }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 15
        }
      }, links.map(function (l) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          __self: _this2,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 19
          }
        }, _this2.link(l[0]), " \u2013\xA0", l[1]);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {},
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 15
        }
      }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 15
        }
      }, "Email: grantcuster@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 15
        }
      }, "Twitter:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/GrantCuster",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
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
          lineNumber: 273,
          columnNumber: 11
        }
      }, "Generated", origin !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 15
        }
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name) : null, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "365242223",
        css: "@page{margin:calc(0.75in - ".concat(grem, "px);}*{box-sizing:border-box;}@media print{.content{width:auto !important;margin:auto !important;}.print-hide{display:none;}}html{font-size:").concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Helvetica,Arial,sans-serif,'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol';}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L2Rldi9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMlIyQixBQUdtQyxBQUcrQixBQUk3QixBQUlULEFBSTBCLEFBSWhDLEFBT0EsQUFJRyxBQUtRLFNBZkQsQUFPd0IsR0FJdEIsQ0FuQnJCLE9Bd0JrQixFQW5DcEIsQUFPMkIsTUFlWSxLQVNmLEtBS0YsR0FyQnFCLElBUHpDLE9BbUJGLENBeEJBLEVBNkJBLEdBS2MsWUFDRixVQUNELEVBdkJYLE9Bd0I0Qiw0REFDSCx1QkFDUixHQW5CakIsWUFvQkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvZGV2L3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzLXRpbWUnXG5pbXBvcnQgKiBhcyBkM2YgZnJvbSAnZDMtdGltZS1mb3JtYXQnXG5pbXBvcnQgKiBhcyBQbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuaW1wb3J0ICogYXMgQm93c2VyIGZyb20gJ2Jvd3NlcidcblxuZnVuY3Rpb24gcCh4LCB5KSB7XG4gIHJldHVybiBgJHt4fXB4ICR7eX1weGBcbn1cblxubGV0IGZvcm1hdCA9IGQzZi50aW1lRm9ybWF0KCclQiAlWScpXG5cbi8vIHdpdGggZGF5c1xuZnVuY3Rpb24gdGltZVNwZW50KHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJhd19tb250aHMgPSBkMy50aW1lTW9udGguY291bnQoc3RhcnQsIGVuZClcbiAgbGV0IHllYXJzID0gTWF0aC5mbG9vcihyYXdfbW9udGhzIC8gMTIpXG4gIGxldCBtb250aHMgPSB5ZWFycyA+IDAgPyByYXdfbW9udGhzICUgeWVhcnMgOiByYXdfbW9udGhzXG4gIGxldCBtb250aHNfZW5kID0gZDMudGltZU1vbnRoLm9mZnNldChzdGFydCwgcmF3X21vbnRocylcbiAgbGV0IGRheXMgPSBkMy50aW1lRGF5LmNvdW50KG1vbnRoc19lbmQsIGVuZClcbiAgLy8gcm91bmQgbW9udGhzXG4gIGlmIChkYXlzID4gMTUpIG1vbnRocysrXG4gIGxldCB2YWx1ZXMgPSBbXVxuICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2goeWVhcnMgKyAnICcgKyBQbHVyYWxpemUoJ3llYXInLCB5ZWFycykpXG4gIH1cbiAgaWYgKG1vbnRocyA+IDApIHtcbiAgICB2YWx1ZXMucHVzaChtb250aHMgKyAnICcgKyBQbHVyYWxpemUoJ21vbnRoJywgbW9udGhzKSlcbiAgfVxuICBpZiAoZGF5cyA+IDApIHtcbiAgICAvLyB2YWx1ZXMucHVzaChkYXlzICsgXCIgXCIgKyBQbHVyYWxpemUoXCJkYXlcIiwgZGF5cykpO1xuICB9XG4gIHJldHVybiB2YWx1ZXMuam9pbignLCAnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChcbiAgICBmb3JtYXQoc3RhcnQpICtcbiAgICAn4oCTJyArXG4gICAgKCtlbmQgPT09ICtuZXcgRGF0ZSgpID8gJ25vdycgOiBmb3JtYXQoZW5kKSkgK1xuICAgICcswqAnICtcbiAgICB0aW1lU3BlbnQoc3RhcnQsIGVuZClcbiAgKVxufVxuXG5sZXQgbGlua3MgPSBbXG4gIFtcbiAgICAnaHR0cHM6Ly9jb25zdHJhaW50LnN5c3RlbXMnLFxuICAgICdBbiBvbmdvaW5nIHByb2plY3Qgd2hlcmUgSSBkZXNpZ24gYW5kIGNvZGUgZXhwZXJpbWVudGFsIHdlYi1iYXNlZCBjcmVhdGl2ZSB0b29scy4nLFxuICBdLFxuICBbXG4gICAgJ2h0dHBzOi8vYWN0aXZlbGVhcm5lci5mYXN0Zm9yd2FyZGxhYnMuY29tJyxcbiAgICAnQSB2aXN1YWxpemF0aW9uIG9mIGhvdyB5b3UgY2FuIHVzZSBhY3RpdmUgbGVhcm5pbmcgdG8gc2VsZWN0IHRyYWluaW5nIGV4YW1wbGVzIHRvIGxhYmVsLiBJIHVzZWQgdGhyZWUuanMgdG8gcmVuZGVyIHRoZSBwb2ludHMgYW5kIGFuaW1hdGUgdGhlIHJlc3VsdHMgb2YgZWFjaCB0cmFpbmluZyBzdGVwLicsXG4gIF0sXG4gIFtcbiAgICAnaHR0cHM6Ly90dXJib2Zhbi5mYXN0Zm9yd2FyZGxhYnMuY29tLycsXG4gICAgJ1R1cmJvZmFuIFR5Y29vbiBpbGx1c3RyYXRlcyB0aGUgc3RyZW5ndGhzIG9mIGZlZGVyYXRlZCBsZWFybmluZyBieSBsZXR0aW5nIHlvdSBjaG9vc2UgYSBtYWludGVuYW5jZSBzdHJhdGVneSBmb3IgeW91ciBmYWN0b3J5IG9mIHR1cmJvZmFucy4gSSBoYWQgYSBsb3Qgb2YgZnVuIGJ1aWxkaW5nIGEgZmFzdC1tb3ZpbmcgdHVyYm9mYW4gZGFzaGJvYXJkLicsXG4gIF0sXG4gIFsnaHR0cHM6Ly9mZWVkLmdyYW50Y3VzdGVyLmNvbScsICdXb3JrIGFuZCBpbnNwaXJhdGlvbiBpbiBwcm9ncmVzcy4nXSxcbiAgW1xuICAgICdodHRwczovL2Jsb2cuZmFzdGZvcndhcmRsYWJzLmNvbScsXG4gICAgJ1RoZSBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicyBibG9nLiBJIG1haW50YWluIHRoZSBibG9nIGFuZCBhbHNvIGRvIGEgbG90IG9mIHRoZSBkZXNpZ24gd29yayB5b3Ugc2VlIG9uIGl0LicsXG4gIF0sXG4gIC8vIFtcbiAgLy8gICAnaHR0cHM6Ly9mYXN0Zm9yd2FyZGxhYnMuZ2l0aHViLmlvL3Byb3RvdHlwZS12aWRlb3MnLFxuICAvLyAgIFwiQSB2aWRlbyBvdmVydmlldyBvZiB0aGUgbmluZSBwcm90b3R5cGVzIHdlJ3ZlIGJ1aWx0IGF0IENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzLlwiLFxuICAvLyBdLFxuICAvLyBbXG4gIC8vICAgJ2h0dHBzOi8vYmV0YS5vYnNlcnZhYmxlaHEuY29tL0BncmFudGN1c3RlcicsXG4gIC8vICAgJ0NvZGUgYW5kIGRlc2lnbiBleHBlcmltZW50cyBpbiB0aGUgZm9ybSBvZiBpbnRlcmFjdGl2ZSBPYnNlcnZhYmxlIG5vdGVib29rcy4nLFxuICAvLyBdLFxuICAvLyBbXG4gIC8vICAgJ2h0dHBzOi8vZ3JhbnRjdXN0ZXIuZ2l0aHViLmlvL3VtYXAtZXhwbG9yZXInLFxuICAvLyAgICdBIHByb29mLW9mLWNvbmNlcHQgdGhhdCB1c2VzIHRocmVlLmpzIHRvIHJlbmRlciB0ZW5zIG9mIHRob3VzYW5kcyBvZiBkYXRhIHBvaW50cyBpbiBhbiBpbnRlcmFjdGl2ZSB2aXN1YWxpemF0aW9uJyxcbiAgLy8gXSxcbiAgLy8gWydodHRwczovL2Jsb2cuZmFzdGZvcndhcmRsYWJzLmNvbScsICdUaGUgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMgYmxvZy4nXSxcbiAgLy8gW1xuICAvLyAgICdodHRwczovL3NjaWZpLmZhc3Rmb3J3YXJkbGFicy5jb20nLFxuICAvLyAgICdBIG1pbmktc2l0ZSBzaG93Y2FzaW5nIHRoZSBzY2llbmNlIGZpY3Rpb24gc3RvcmllcyBpbmNsdWRlZCBpbiBlYWNoIG9mIHRoZSBGYXN0IEZvcndhcmQgTGFicyByZXBvcnRzLicsXG4gIC8vIF0sXG5dXG5cbmxldCBkZXNjcmlwdGlvbiA9XG4gICdEZXNpZ25lciBhbmQgZnJvbnQtZW5kIGRldmVsb3BlciBpbnRlcmVzdGVkIGluIHByb2NlZHVyYWwgZ2VuZXJhdGlvbiwgZGF0YSB2aXN1YWxpemF0aW9uLCBwcm9kdWN0IGRlc2lnbiBhbmQgcmV0aGlua2luZyB0aGluZ3MgZnJvbSBzY3JhdGNoLidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICByZXR1cm4geyB0ZXN0OiBudWxsIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIGxheW91dDogJ3dlYicsXG4gICAgICByZW5kZXJfaW5mbzogbnVsbCxcbiAgICAgIG9yaWdpbjogbnVsbCxcbiAgICB9XG4gICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNpemUgPSBfLmRlYm91bmNlKHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpLCAxMDApXG4gICAgdGhpcy5zZXRMYXlvdXQgPSB0aGlzLnNldExheW91dC5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBsb2FkZWQ6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U2l6ZSgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0U2l6ZSlcbiAgICBsZXQgcmVuZGVyX2luZm8gPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KS5wYXJzZSgpXG4gICAgICAucGFyc2VkUmVzdWx0XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlcl9pbmZvLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICB9XG5cbiAgc2V0TGF5b3V0KGxheW91dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXlvdXQ6IGxheW91dCB9KVxuICB9XG5cbiAgbGluayhocmVmKSB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9PntocmVmfTwvYT5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBsb2FkZWQsIHdpZHRoLCBoZWlnaHQsIGxheW91dCwgcmVuZGVyX2luZm8sIG9yaWdpbiB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGxldCBjb2x1bW5fdGFyZ2V0ID0gZ3JlbSAqIDE0XG4gICAgbGV0IGNvbHVtbnMgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHdpZHRoIC8gY29sdW1uX3RhcmdldCkpXG4gICAgbGV0IGNvbHVtbl93aWR0aCA9IHdpZHRoIC8gY29sdW1uc1xuICAgIGxldCBtYWluX3dpZHRoID0gTWF0aC5taW4oY29sdW1ucywgMikgKiBjb2x1bW5fd2lkdGhcbiAgICBsZXQgbWFpbl9tYXJnaW4gPVxuICAgICAgTWF0aC5mbG9vcigoY29sdW1ucyAtIE1hdGgubWluKGNvbHVtbnMsIDIpKSAvIDIpICogY29sdW1uX3dpZHRoXG5cbiAgICBpZiAobGF5b3V0ID09PSAncHJpbnQnKSB7XG4gICAgICB3aWR0aCA9IG51bGxcbiAgICAgIGhlaWdodCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAod2lkdGggPT09IG51bGwpIHtcbiAgICAgIG1haW5fd2lkdGggPSAnYXV0bydcbiAgICAgIG1haW5fbWFyZ2luID0gMFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2VmZWZlZlwiIC8+XG4gICAgICAgICAgPHRpdGxlPkdyYW50IEN1c3RlciDihpIgUsOpc3Vtw6k8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIHR5cGU9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdyYW50IEN1c3RlciDihpIgUsOpc3Vtw6lcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwOi8vcmVzdW1lLmdyYW50Y3VzdGVyLmNvbVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICAgICAgICA8c3R5bGU+e2AuanMtbm8tZmxhc2ggeyBkaXNwbGF5OiBub25lIH1gfTwvc3R5bGU+XG4gICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgPHN0eWxlPntgLmpzLW5vLWZsYXNoIHsgZGlzcGxheTogYmxvY2sgfWB9PC9zdHlsZT5cbiAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJqcy1uby1mbGFzaFwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogbG9hZGVkID8gJ2Jsb2NrJyA6IG51bGwgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICA8ZGl2PkdyYW50IEN1c3RlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5EZXNpZ27igJNDb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpbnQtaGlkZVwiPlxuICAgICAgICAgICAgICAgIHt3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gYCR7d2lkdGh9eCR7aGVpZ2h0fWBcbiAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlLDqXN1bcOpPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogbWFpbl93aWR0aCxcbiAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IG1haW5fbWFyZ2luLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PkdyYW50IEN1c3RlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Xb3JrIGV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTZGV2ZWxvcGVyLCBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFiczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTQsIDcsIDcpLCBuZXcgRGF0ZSgpKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCB0aGUgaW50ZXJmYWNlcyBmb3IgbmluZSBwcm9kdWN0IHByb3RvdHlwZXNcbiAgICAgICAgICAgICAgICAgIGRlbW9uc3RyYXRpbmcgdGhlIHBvc3NpYmlsaXRpZXMgb2YgZW1lcmdpbmcgdGVjaG5vbG9naWVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIERlc2lnbmVkIHRoZSBGYXN0IEZvcndhcmQgTGFicyBicmFuZCBhbmQgc3Vycm91bmRpbmcgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICBpbmNsdWRpbmcgbmluZSBwcmludGVkIHJlc2VhcmNoIHJlcG9ydHMsIHRoZSB3ZWJzaXRlLCB0aGVcbiAgICAgICAgICAgICAgICAgIGJsb2csIGFuZCBpbnRlcm5hbCB0b29scy4gUG9zdC1DbG91ZGVyYSBhY3F1aXNpdGlvbiAoaW4gMjAxNylcbiAgICAgICAgICAgICAgICAgIEkndmUgYmVlbiB3b3JraW5nIHRvIGludGVncmF0ZSB0aGF0IGJyYW5kIGludG8gdGhlIGxhcmdlclxuICAgICAgICAgICAgICAgICAgQ2xvdWRlcmEgYnJhbmQgc3lzdGVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE1hbmFnZWQgdHdvIHByb2plY3RzIGJ5IEZGTCBpbnRlcm5zLCB3aGVyZSB0aGV5IHNjb3BlZCxcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgYW5kIHJlbGVhc2VkIHRoZWlyIG93biBwcm90b3R5cGVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk2RldmVsb3BlciwgQmV0YXdvcmtzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxMiwgNiwgMTUpLCBuZXcgRGF0ZSgyMDE0LCA3LCAyOCkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIHRoZSBpbnRlcmZhY2VzIGZvciBlYXJseS1zdGFnZSAodW5kZXJcbiAgICAgICAgICAgICAgICBmb3VyLXBlcnNvbikgc3RhcnQtdXBzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk2RldmVsb3BlciwgQmFudGVyczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTEsIDExLCAxKSwgbmV3IERhdGUoMjAxMiwgNiwgMTUpKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCBpbnRlcmZhY2VzIGZvciBhIHN0YXJ0LXVwIGZvY3VzZWQgb25cbiAgICAgICAgICAgICAgICBjYXB0dXJpbmcgbWVtb3JhYmxlIGNvbnZlcnNhdGlvbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+Q29kZSBhbmQgc29mdHdhcmUgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgICA8cD5Db2RlOiBKYXZhc2NyaXB0LCBSZWFjdCwgRDMuanMsIHRocmVlLmpzLCBIVE1MLCBDU1MuPC9wPlxuICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZTogRmlnbWEsIFBob3Rvc2hvcCwgSWxsdXN0cmF0b3IsIEluRGVzaWduLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0sIG1hcmdpblRvcDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5MaW5rczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGwpID0+IChcbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rKGxbMF0pfSDigJPCoHtsWzFdfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICA8ZGl2PkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+RW1haWw6IGdyYW50Y3VzdGVyQGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHdpdHRlcjp7JyAnfVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0dyYW50Q3VzdGVyXCI+QEdyYW50Q3VzdGVyPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgR2VuZXJhdGVkXG4gICAgICAgICAgICB7b3JpZ2luICE9PSBudWxsID8gKFxuICAgICAgICAgICAgICA8c3Bhbj4gZnJvbSB7dGhpcy5saW5rKG9yaWdpbil9PC9zcGFuPlxuICAgICAgICAgICAgKSA6IG51bGx9IG9uIHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICB7cmVuZGVyX2luZm8gIT09IG51bGxcbiAgICAgICAgICAgICAgPyBgIHdpdGggJHtyZW5kZXJfaW5mby5icm93c2VyLm5hbWV9ICR7cmVuZGVyX2luZm8uYnJvd3Nlci52ZXJzaW9ufSBvbiAke3JlbmRlcl9pbmZvLm9zLm5hbWV9YFxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQHBhZ2Uge1xuICAgICAgICAgICAgbWFyZ2luOiBjYWxjKDAuNzVpbiAtICR7Z3JlbX1weCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaW50LWhpZGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaW5lX2hlaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgICAgICAgICAgICAgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/grant/dev/resume/pages/index.js */"),
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
//# sourceMappingURL=index.js.2a816d8b77d5359f02e7.hot-update.js.map