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

var _jsxFileName = "/Users/grant.custer/Sites/resume/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









function p(x, y) {
  return "".concat(x, "px ").concat(y, "px");
}

var format = d3_time_format__WEBPACK_IMPORTED_MODULE_6__["timeFormat"]("%B %Y"); // with days

function timeSpent(start, end) {
  var raw_months = d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMonth"].count(start, end);
  var years = Math.floor(raw_months / 12);
  var months = years > 0 ? raw_months % years : raw_months;
  var months_end = d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMonth"].offset(start, raw_months);
  var days = d3_time__WEBPACK_IMPORTED_MODULE_5__["timeDay"].count(months_end, end); // round months

  if (days > 15) months++;
  var values = [];

  if (years > 0) {
    values.push(years + " " + pluralize__WEBPACK_IMPORTED_MODULE_7__("year", years));
  }

  if (months > 0) {
    values.push(months + " " + pluralize__WEBPACK_IMPORTED_MODULE_7__("month", months));
  }

  if (days > 0) {// values.push(days + " " + Pluralize("day", days));
  }

  return values.join(", ");
}

function formatTime(start, end) {
  return format(start) + "–" + (+end === +new Date() ? "now" : format(end)) + ", " + timeSpent(start, end);
}

var links = [["http://feed.grantcuster.com", "Work and inspiration in progress."], ["https://turbofan.fastforwardlabs.com", "A Cloudera Fast Forward Labs prototype that places you in the role of turbofan factory owner."], ["https://fastforwardlabs.github.io/prototype-videos", "A video overview of the nine prototypes we've built at Cloudera Fast Forward Labs."], ["https://beta.observablehq.com/@grantcuster", "Code and design experiments in the form of interactive Observable notebooks."], ["https://grantcuster.github.io/umap-explorer", "A proof-of-concept that uses three.js to render tens of thousands of data points in an interactive visualization"], ["https://blog.fastforwardlabs.com", "The Cloudera Fast Forward Labs blog."], ["https://scifi.fastforwardlabs.com", "A mini-site showcasing the science fiction stories included in each of the Fast Forward Labs reports."]];
var description = "Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.";

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
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
        }, _callee, this);
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      loaded: false,
      width: null,
      height: null,
      layout: "web",
      render_info: null,
      origin: null
    };
    _this.link = _this.link.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSize = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.debounce(_this.setSize.bind(_assertThisInitialized(_assertThisInitialized(_this))), 100);
    _this.setLayout = _this.setLayout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "setSize",
    value: function setSize() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setSize();
      this.setState({
        loaded: true
      });
      window.addEventListener("resize", this.setSize);
      var render_info = bowser__WEBPACK_IMPORTED_MODULE_8__["getParser"](window.navigator.userAgent).parse().parsedResult;
      this.setState({
        render_info: render_info,
        origin: window.location.href
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.setSize);
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
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
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

      if (layout === "print") {
        width = null;
        height = null;
      }

      if (width === null) {
        main_width = "auto";
        main_margin = 0;
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "theme-color",
        content: "#efefef",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Grant Custer \u2192 R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: description,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:title",
        content: "Grant Custer \u2192 R\xE9sum\xE9",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:description",
        content: description,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:url",
        content: "http://resume.grantcuster.com",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          minHeight: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]) + " " + "print-hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "R\xE9sum\xE9")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          width: main_width,
          padding: grem / 2,
          marginLeft: main_margin
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Work experience")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Designer\u2013developer, Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, formatTime(new Date(2014, 7, 7), new Date())), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Designed and coded the interfaces for nine product prototypes demonstrating the possibilities of emerging technologies."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Designed the Fast Forward Labs brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Managed two projects by FFL interns, where they scoped, created and released their own prototypes."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Designer\u2013developer, Betaworks"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Designed and coded the interfaces for early-stage (under four-person) start-ups.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Designer\u2013developer, Banters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "Designed and coded interfaces for a start-up focused on capturing memorable conversations.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Code and software experience"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Code: Javascript, React, D3.js, three.js."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Software: Figma, Photoshop, Illustrator, InDesign.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem,
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, links.map(function (l) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, _this2.link(l[0]), " \u2013\xA0", l[1]);
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Email: grantcuster@gmail.com"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Twitter:", " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/GrantCuster",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "@GrantCuster")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Generated", origin !== null ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3345371456", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name, " ").concat(render_info.os.version) : null, ".")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3345371456",
        css: "@page{margin:calc(0.75in - ".concat(grem, "px);}*{box-sizing:border-box;}@media print{.content{width:auto !important;margin:auto !important;}.print-hide{display:none;}}html{font-size:").concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRRMkIsQUFHbUMsQUFHK0IsQUFJN0IsQUFJVCxBQUkwQixBQUloQyxBQU9BLEFBSUcsQUFLUSxTQWZELEFBT3dCLEdBSXRCLENBbkJyQixPQXdCa0IsRUFuQ3BCLEFBTzJCLE1BZVksS0FTZixLQUtGLEdBckJxQixJQVB6QyxPQW1CRixDQXhCQSxFQTZCQSxHQUtjLFlBQ0YsVUFDRCxFQXZCWCxPQXdCNEIsNERBQ0gsdUJBQ1IsR0FuQmpCLFlBb0JBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzLXRpbWVcIjtcbmltcG9ydCAqIGFzIGQzZiBmcm9tIFwiZDMtdGltZS1mb3JtYXRcIjtcbmltcG9ydCAqIGFzIFBsdXJhbGl6ZSBmcm9tIFwicGx1cmFsaXplXCI7XG5pbXBvcnQgKiBhcyBCb3dzZXIgZnJvbSBcImJvd3NlclwiO1xuXG5mdW5jdGlvbiBwKHgsIHkpIHtcbiAgcmV0dXJuIGAke3h9cHggJHt5fXB4YDtcbn1cblxubGV0IGZvcm1hdCA9IGQzZi50aW1lRm9ybWF0KFwiJUIgJVlcIik7XG5cbi8vIHdpdGggZGF5c1xuZnVuY3Rpb24gdGltZVNwZW50KHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJhd19tb250aHMgPSBkMy50aW1lTW9udGguY291bnQoc3RhcnQsIGVuZCk7XG4gIGxldCB5ZWFycyA9IE1hdGguZmxvb3IocmF3X21vbnRocyAvIDEyKTtcbiAgbGV0IG1vbnRocyA9IHllYXJzID4gMCA/IHJhd19tb250aHMgJSB5ZWFycyA6IHJhd19tb250aHM7XG4gIGxldCBtb250aHNfZW5kID0gZDMudGltZU1vbnRoLm9mZnNldChzdGFydCwgcmF3X21vbnRocyk7XG4gIGxldCBkYXlzID0gZDMudGltZURheS5jb3VudChtb250aHNfZW5kLCBlbmQpO1xuICAvLyByb3VuZCBtb250aHNcbiAgaWYgKGRheXMgPiAxNSkgbW9udGhzKys7XG4gIGxldCB2YWx1ZXMgPSBbXTtcbiAgaWYgKHllYXJzID4gMCkge1xuICAgIHZhbHVlcy5wdXNoKHllYXJzICsgXCIgXCIgKyBQbHVyYWxpemUoXCJ5ZWFyXCIsIHllYXJzKSk7XG4gIH1cbiAgaWYgKG1vbnRocyA+IDApIHtcbiAgICB2YWx1ZXMucHVzaChtb250aHMgKyBcIiBcIiArIFBsdXJhbGl6ZShcIm1vbnRoXCIsIG1vbnRocykpO1xuICB9XG4gIGlmIChkYXlzID4gMCkge1xuICAgIC8vIHZhbHVlcy5wdXNoKGRheXMgKyBcIiBcIiArIFBsdXJhbGl6ZShcImRheVwiLCBkYXlzKSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlcy5qb2luKFwiLCBcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKFxuICAgIGZvcm1hdChzdGFydCkgK1xuICAgIFwi4oCTXCIgK1xuICAgICgrZW5kID09PSArbmV3IERhdGUoKSA/IFwibm93XCIgOiBmb3JtYXQoZW5kKSkgK1xuICAgIFwiLMKgXCIgK1xuICAgIHRpbWVTcGVudChzdGFydCwgZW5kKVxuICApO1xufVxuXG5sZXQgbGlua3MgPSBbXG4gIFtcImh0dHA6Ly9mZWVkLmdyYW50Y3VzdGVyLmNvbVwiLCBcIldvcmsgYW5kIGluc3BpcmF0aW9uIGluIHByb2dyZXNzLlwiXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly90dXJib2Zhbi5mYXN0Zm9yd2FyZGxhYnMuY29tXCIsXG4gICAgXCJBIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzIHByb3RvdHlwZSB0aGF0IHBsYWNlcyB5b3UgaW4gdGhlIHJvbGUgb2YgdHVyYm9mYW4gZmFjdG9yeSBvd25lci5cIlxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2Zhc3Rmb3J3YXJkbGFicy5naXRodWIuaW8vcHJvdG90eXBlLXZpZGVvc1wiLFxuICAgIFwiQSB2aWRlbyBvdmVydmlldyBvZiB0aGUgbmluZSBwcm90b3R5cGVzIHdlJ3ZlIGJ1aWx0IGF0IENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzLlwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vYmV0YS5vYnNlcnZhYmxlaHEuY29tL0BncmFudGN1c3RlclwiLFxuICAgIFwiQ29kZSBhbmQgZGVzaWduIGV4cGVyaW1lbnRzIGluIHRoZSBmb3JtIG9mIGludGVyYWN0aXZlIE9ic2VydmFibGUgbm90ZWJvb2tzLlwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vZ3JhbnRjdXN0ZXIuZ2l0aHViLmlvL3VtYXAtZXhwbG9yZXJcIixcbiAgICBcIkEgcHJvb2Ytb2YtY29uY2VwdCB0aGF0IHVzZXMgdGhyZWUuanMgdG8gcmVuZGVyIHRlbnMgb2YgdGhvdXNhbmRzIG9mIGRhdGEgcG9pbnRzIGluIGFuIGludGVyYWN0aXZlIHZpc3VhbGl6YXRpb25cIlxuICBdLFxuICBbXCJodHRwczovL2Jsb2cuZmFzdGZvcndhcmRsYWJzLmNvbVwiLCBcIlRoZSBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicyBibG9nLlwiXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9zY2lmaS5mYXN0Zm9yd2FyZGxhYnMuY29tXCIsXG4gICAgXCJBIG1pbmktc2l0ZSBzaG93Y2FzaW5nIHRoZSBzY2llbmNlIGZpY3Rpb24gc3RvcmllcyBpbmNsdWRlZCBpbiBlYWNoIG9mIHRoZSBGYXN0IEZvcndhcmQgTGFicyByZXBvcnRzLlwiXG4gIF1cbl07XG5cbmxldCBkZXNjcmlwdGlvbiA9XG4gIFwiRGVzaWduZXIgYW5kIGZyb250LWVuZCBkZXZlbG9wZXIgaW50ZXJlc3RlZCBpbiBwcm9jZWR1cmFsIGdlbmVyYXRpb24sIGRhdGEgdmlzdWFsaXphdGlvbiwgcHJvZHVjdCBkZXNpZ24gYW5kIHJldGhpbmtpbmcgdGhpbmdzIGZyb20gc2NyYXRjaC5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICByZXR1cm4geyB0ZXN0OiBudWxsIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgbGF5b3V0OiBcIndlYlwiLFxuICAgICAgcmVuZGVyX2luZm86IG51bGwsXG4gICAgICBvcmlnaW46IG51bGxcbiAgICB9O1xuICAgIHRoaXMubGluayA9IHRoaXMubGluay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2l6ZSA9IF8uZGVib3VuY2UodGhpcy5zZXRTaXplLmJpbmQodGhpcyksIDEwMCk7XG4gICAgdGhpcy5zZXRMYXlvdXQgPSB0aGlzLnNldExheW91dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFNpemUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRlZDogdHJ1ZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuc2V0U2l6ZSk7XG4gICAgbGV0IHJlbmRlcl9pbmZvID0gQm93c2VyLmdldFBhcnNlcih3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkucGFyc2UoKVxuICAgICAgLnBhcnNlZFJlc3VsdDtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyX2luZm8sIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnNldFNpemUpO1xuICB9XG5cbiAgc2V0TGF5b3V0KGxheW91dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXlvdXQ6IGxheW91dCB9KTtcbiAgfVxuXG4gIGxpbmsoaHJlZikge1xuICAgIHJldHVybiA8YSBocmVmPXtocmVmfT57aHJlZn08L2E+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGxvYWRlZCwgd2lkdGgsIGhlaWdodCwgbGF5b3V0LCByZW5kZXJfaW5mbywgb3JpZ2luIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBmb250X3NpemUgPSAxNjtcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjU7XG4gICAgbGV0IGdyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodDtcblxuICAgIGxldCBjb2x1bW5fdGFyZ2V0ID0gZ3JlbSAqIDE0O1xuICAgIGxldCBjb2x1bW5zID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAvIGNvbHVtbl90YXJnZXQpKTtcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gd2lkdGggLyBjb2x1bW5zO1xuICAgIGxldCBtYWluX3dpZHRoID0gTWF0aC5taW4oY29sdW1ucywgMikgKiBjb2x1bW5fd2lkdGg7XG4gICAgbGV0IG1haW5fbWFyZ2luID1cbiAgICAgIE1hdGguZmxvb3IoKGNvbHVtbnMgLSBNYXRoLm1pbihjb2x1bW5zLCAyKSkgLyAyKSAqIGNvbHVtbl93aWR0aDtcblxuICAgIGlmIChsYXlvdXQgPT09IFwicHJpbnRcIikge1xuICAgICAgd2lkdGggPSBudWxsO1xuICAgICAgaGVpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggPT09IG51bGwpIHtcbiAgICAgIG1haW5fd2lkdGggPSBcImF1dG9cIjtcbiAgICAgIG1haW5fbWFyZ2luID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNlZmVmZWZcIiAvPlxuICAgICAgICAgIDx0aXRsZT5HcmFudCBDdXN0ZXIg4oaSIFLDqXN1bcOpPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSB0eXBlPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJHcmFudCBDdXN0ZXIg4oaSIFLDqXN1bcOpXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL3Jlc3VtZS5ncmFudGN1c3Rlci5jb21cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgPGRpdj5HcmFudCBDdXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RGVzaWdu4oCTQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5IZWlnaHQ6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaW50LWhpZGVcIj5cbiAgICAgICAgICAgICAgICB7d2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IGAke3dpZHRofXgke2hlaWdodH1gXG4gICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Sw6lzdW3DqTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IG1haW5fd2lkdGgsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYWluX21hcmdpblxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PkdyYW50IEN1c3RlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Xb3JrIGV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTZGV2ZWxvcGVyLCBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFiczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTQsIDcsIDcpLCBuZXcgRGF0ZSgpKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCB0aGUgaW50ZXJmYWNlcyBmb3IgbmluZSBwcm9kdWN0IHByb3RvdHlwZXNcbiAgICAgICAgICAgICAgICAgIGRlbW9uc3RyYXRpbmcgdGhlIHBvc3NpYmlsaXRpZXMgb2YgZW1lcmdpbmcgdGVjaG5vbG9naWVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIERlc2lnbmVkIHRoZSBGYXN0IEZvcndhcmQgTGFicyBicmFuZCBhbmQgc3Vycm91bmRpbmcgbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICBpbmNsdWRpbmcgbmluZSBwcmludGVkIHJlc2VhcmNoIHJlcG9ydHMsIHRoZSB3ZWJzaXRlLCB0aGVcbiAgICAgICAgICAgICAgICAgIGJsb2csIGFuZCBpbnRlcm5hbCB0b29scy4gUG9zdC1DbG91ZGVyYSBhY3F1aXNpdGlvbiAoaW4gMjAxNylcbiAgICAgICAgICAgICAgICAgIEkndmUgYmVlbiB3b3JraW5nIHRvIGludGVncmF0ZSB0aGF0IGJyYW5kIGludG8gdGhlIGxhcmdlclxuICAgICAgICAgICAgICAgICAgQ2xvdWRlcmEgYnJhbmQgc3lzdGVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE1hbmFnZWQgdHdvIHByb2plY3RzIGJ5IEZGTCBpbnRlcm5zLCB3aGVyZSB0aGV5IHNjb3BlZCxcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgYW5kIHJlbGVhc2VkIHRoZWlyIG93biBwcm90b3R5cGVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk2RldmVsb3BlciwgQmV0YXdvcmtzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxMiwgNiwgMTUpLCBuZXcgRGF0ZSgyMDE0LCA3LCAyOCkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIHRoZSBpbnRlcmZhY2VzIGZvciBlYXJseS1zdGFnZSAodW5kZXJcbiAgICAgICAgICAgICAgICBmb3VyLXBlcnNvbikgc3RhcnQtdXBzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk2RldmVsb3BlciwgQmFudGVyczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTEsIDExLCAxKSwgbmV3IERhdGUoMjAxMiwgNiwgMTUpKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCBpbnRlcmZhY2VzIGZvciBhIHN0YXJ0LXVwIGZvY3VzZWQgb25cbiAgICAgICAgICAgICAgICBjYXB0dXJpbmcgbWVtb3JhYmxlIGNvbnZlcnNhdGlvbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+Q29kZSBhbmQgc29mdHdhcmUgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgICA8cD5Db2RlOiBKYXZhc2NyaXB0LCBSZWFjdCwgRDMuanMsIHRocmVlLmpzLjwvcD5cbiAgICAgICAgICAgICAgPHA+U29mdHdhcmU6IEZpZ21hLCBQaG90b3Nob3AsIElsbHVzdHJhdG9yLCBJbkRlc2lnbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtLCBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+TGlua3M8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmsobFswXSl9IOKAk8Kge2xbMV19XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgIDxkaXY+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICA8cD5FbWFpbDogZ3JhbnRjdXN0ZXJAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUd2l0dGVyOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9HcmFudEN1c3RlclwiPkBHcmFudEN1c3RlcjwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgIEdlbmVyYXRlZFxuICAgICAgICAgICAge29yaWdpbiAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgPHNwYW4+IGZyb20ge3RoaXMubGluayhvcmlnaW4pfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfSBvbiB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAge3JlbmRlcl9pbmZvICE9PSBudWxsXG4gICAgICAgICAgICAgID8gYCB3aXRoICR7cmVuZGVyX2luZm8uYnJvd3Nlci5uYW1lfSAke1xuICAgICAgICAgICAgICAgICAgcmVuZGVyX2luZm8uYnJvd3Nlci52ZXJzaW9uXG4gICAgICAgICAgICAgICAgfSBvbiAke3JlbmRlcl9pbmZvLm9zLm5hbWV9ICR7cmVuZGVyX2luZm8ub3MudmVyc2lvbn1gXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAcGFnZSB7XG4gICAgICAgICAgICBtYXJnaW46IGNhbGMoMC43NWluIC0gJHtncmVtfXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpbnQtaGlkZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVfaGVpZ2h0fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICAgICAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICAgICAgICAgICAgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/resume/pages/index.js */"),
        dynamic: [grem, font_size, line_height, grem],
        __self: this
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
//# sourceMappingURL=index.js.436fcbcd72fd9ecc3323.hot-update.js.map