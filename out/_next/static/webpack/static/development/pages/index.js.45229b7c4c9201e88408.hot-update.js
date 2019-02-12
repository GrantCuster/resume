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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "theme-color",
        content: "#efefef",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Grant Custer \u2192 R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: description,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:title",
        content: "Grant Custer \u2192 R\xE9sum\xE9",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:description",
        content: description,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:url",
        content: "http://resume.grantcuster.com",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          minHeight: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "R\xE9sum\xE9")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          width: main_width,
          padding: grem / 2,
          marginLeft: main_margin
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Work experience")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Designer\u2013developer, Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, formatTime(new Date(2014, 7, 7), new Date())), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Designed and coded the interfaces for nine product prototypes demonstrating the possibilities of emerging technologies."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Designed the Fast Forward Labs brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Managed two projects by FFL interns, where they scoped, created and released their own prototypes."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Designer\u2013developer, Betaworks"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Designed and coded the interfaces for early-stage (under four-person) start-ups.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Designer\u2013developer, Banters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Designed and coded interfaces for a start-up focused on capturing memorable conversations.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Code and software experience"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Code: Javascript, React, D3.js, three.js."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Software: Figma, Photoshop, Illustrator, InDesign.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem,
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, links.map(function (l) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, _this2.link(l[0]), " \u2013\xA0", l[1]);
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {},
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Email: grantcuster@gmail.com"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Twitter:", " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/GrantCuster",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "@GrantCuster")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Generated", origin !== null ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2377191319", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name, " ").concat(render_info.os.version) : null, ".")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2377191319",
        css: "@page{margin:calc(0.75in - ".concat(grem, "px);}*{box-sizing:border-box;}@media print{.content{width:auto !important;margin:auto !important;}}html{font-size:").concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvcmVzdW1lL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdRMkIsQUFHbUMsQUFHK0IsQUFJN0IsQUFLaUIsQUFJaEMsQUFPQSxBQUlHLEFBS1EsU0FmRCxBQU93QixHQUl0QixRQUtILEVBaENwQixBQU8yQixNQVlZLEtBU2YsS0FLRixHQXJCcUIsSUFKekMsT0FnQkYsQ0FyQkEsRUEwQkEsR0FLYyxZQUNGLFVBQ0QsRUF2QlgsT0F3QjRCLDREQUNILHVCQUNSLEdBbkJqQixZQW9CQSIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkMy10aW1lXCI7XG5pbXBvcnQgKiBhcyBkM2YgZnJvbSBcImQzLXRpbWUtZm9ybWF0XCI7XG5pbXBvcnQgKiBhcyBQbHVyYWxpemUgZnJvbSBcInBsdXJhbGl6ZVwiO1xuaW1wb3J0ICogYXMgQm93c2VyIGZyb20gXCJib3dzZXJcIjtcblxuZnVuY3Rpb24gcCh4LCB5KSB7XG4gIHJldHVybiBgJHt4fXB4ICR7eX1weGA7XG59XG5cbmxldCBmb3JtYXQgPSBkM2YudGltZUZvcm1hdChcIiVCICVZXCIpO1xuXG4vLyB3aXRoIGRheXNcbmZ1bmN0aW9uIHRpbWVTcGVudChzdGFydCwgZW5kKSB7XG4gIGxldCByYXdfbW9udGhzID0gZDMudGltZU1vbnRoLmNvdW50KHN0YXJ0LCBlbmQpO1xuICBsZXQgeWVhcnMgPSBNYXRoLmZsb29yKHJhd19tb250aHMgLyAxMik7XG4gIGxldCBtb250aHMgPSB5ZWFycyA+IDAgPyByYXdfbW9udGhzICUgeWVhcnMgOiByYXdfbW9udGhzO1xuICBsZXQgbW9udGhzX2VuZCA9IGQzLnRpbWVNb250aC5vZmZzZXQoc3RhcnQsIHJhd19tb250aHMpO1xuICBsZXQgZGF5cyA9IGQzLnRpbWVEYXkuY291bnQobW9udGhzX2VuZCwgZW5kKTtcbiAgLy8gcm91bmQgbW9udGhzXG4gIGlmIChkYXlzID4gMTUpIG1vbnRocysrO1xuICBsZXQgdmFsdWVzID0gW107XG4gIGlmICh5ZWFycyA+IDApIHtcbiAgICB2YWx1ZXMucHVzaCh5ZWFycyArIFwiIFwiICsgUGx1cmFsaXplKFwieWVhclwiLCB5ZWFycykpO1xuICB9XG4gIGlmIChtb250aHMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2gobW9udGhzICsgXCIgXCIgKyBQbHVyYWxpemUoXCJtb250aFwiLCBtb250aHMpKTtcbiAgfVxuICBpZiAoZGF5cyA+IDApIHtcbiAgICAvLyB2YWx1ZXMucHVzaChkYXlzICsgXCIgXCIgKyBQbHVyYWxpemUoXCJkYXlcIiwgZGF5cykpO1xuICB9XG4gIHJldHVybiB2YWx1ZXMuam9pbihcIiwgXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChcbiAgICBmb3JtYXQoc3RhcnQpICtcbiAgICBcIuKAk1wiICtcbiAgICAoK2VuZCA9PT0gK25ldyBEYXRlKCkgPyBcIm5vd1wiIDogZm9ybWF0KGVuZCkpICtcbiAgICBcIizCoFwiICtcbiAgICB0aW1lU3BlbnQoc3RhcnQsIGVuZClcbiAgKTtcbn1cblxubGV0IGxpbmtzID0gW1xuICBbXCJodHRwOi8vZmVlZC5ncmFudGN1c3Rlci5jb21cIiwgXCJXb3JrIGFuZCBpbnNwaXJhdGlvbiBpbiBwcm9ncmVzcy5cIl0sXG4gIFtcbiAgICBcImh0dHBzOi8vdHVyYm9mYW4uZmFzdGZvcndhcmRsYWJzLmNvbVwiLFxuICAgIFwiQSBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicyBwcm90b3R5cGUgdGhhdCBwbGFjZXMgeW91IGluIHRoZSByb2xlIG9mIHR1cmJvZmFuIGZhY3Rvcnkgb3duZXIuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9mYXN0Zm9yd2FyZGxhYnMuZ2l0aHViLmlvL3Byb3RvdHlwZS12aWRlb3NcIixcbiAgICBcIkEgdmlkZW8gb3ZlcnZpZXcgb2YgdGhlIG5pbmUgcHJvdG90eXBlcyB3ZSd2ZSBidWlsdCBhdCBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicy5cIlxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AZ3JhbnRjdXN0ZXJcIixcbiAgICBcIkNvZGUgYW5kIGRlc2lnbiBleHBlcmltZW50cyBpbiB0aGUgZm9ybSBvZiBpbnRlcmFjdGl2ZSBPYnNlcnZhYmxlIG5vdGVib29rcy5cIlxuICBdLFxuICBbXG4gICAgXCJodHRwczovL2dyYW50Y3VzdGVyLmdpdGh1Yi5pby91bWFwLWV4cGxvcmVyXCIsXG4gICAgXCJBIHByb29mLW9mLWNvbmNlcHQgdGhhdCB1c2VzIHRocmVlLmpzIHRvIHJlbmRlciB0ZW5zIG9mIHRob3VzYW5kcyBvZiBkYXRhIHBvaW50cyBpbiBhbiBpbnRlcmFjdGl2ZSB2aXN1YWxpemF0aW9uXCJcbiAgXSxcbiAgW1wiaHR0cHM6Ly9ibG9nLmZhc3Rmb3J3YXJkbGFicy5jb21cIiwgXCJUaGUgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMgYmxvZy5cIl0sXG4gIFtcbiAgICBcImh0dHBzOi8vc2NpZmkuZmFzdGZvcndhcmRsYWJzLmNvbVwiLFxuICAgIFwiQSBtaW5pLXNpdGUgc2hvd2Nhc2luZyB0aGUgc2NpZW5jZSBmaWN0aW9uIHN0b3JpZXMgaW5jbHVkZWQgaW4gZWFjaCBvZiB0aGUgRmFzdCBGb3J3YXJkIExhYnMgcmVwb3J0cy5cIlxuICBdXG5dO1xuXG5sZXQgZGVzY3JpcHRpb24gPVxuICBcIkRlc2lnbmVyIGFuZCBmcm9udC1lbmQgZGV2ZWxvcGVyIGludGVyZXN0ZWQgaW4gcHJvY2VkdXJhbCBnZW5lcmF0aW9uLCBkYXRhIHZpc3VhbGl6YXRpb24sIHByb2R1Y3QgZGVzaWduIGFuZCByZXRoaW5raW5nIHRoaW5ncyBmcm9tIHNjcmF0Y2guXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gICAgcmV0dXJuIHsgdGVzdDogbnVsbCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIGxheW91dDogXCJ3ZWJcIixcbiAgICAgIHJlbmRlcl9pbmZvOiBudWxsLFxuICAgICAgb3JpZ2luOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmxpbmsgPSB0aGlzLmxpbmsuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFNpemUgPSBfLmRlYm91bmNlKHRoaXMuc2V0U2l6ZS5iaW5kKHRoaXMpLCAxMDApO1xuICAgIHRoaXMuc2V0TGF5b3V0ID0gdGhpcy5zZXRMYXlvdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTaXplKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkZWQ6IHRydWVcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnNldFNpemUpO1xuICAgIGxldCByZW5kZXJfaW5mbyA9IEJvd3Nlci5nZXRQYXJzZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLnBhcnNlKClcbiAgICAgIC5wYXJzZWRSZXN1bHQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlcl9pbmZvLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5zZXRTaXplKTtcbiAgfVxuXG4gIHNldExheW91dChsYXlvdXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGF5b3V0OiBsYXlvdXQgfSk7XG4gIH1cblxuICBsaW5rKGhyZWYpIHtcbiAgICByZXR1cm4gPGEgaHJlZj17aHJlZn0+e2hyZWZ9PC9hPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBsb2FkZWQsIHdpZHRoLCBoZWlnaHQsIGxheW91dCwgcmVuZGVyX2luZm8sIG9yaWdpbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgZm9udF9zaXplID0gMTY7XG4gICAgbGV0IGxpbmVfaGVpZ2h0ID0gMS41O1xuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHQ7XG5cbiAgICBsZXQgY29sdW1uX3RhcmdldCA9IGdyZW0gKiAxNDtcbiAgICBsZXQgY29sdW1ucyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggLyBjb2x1bW5fdGFyZ2V0KSk7XG4gICAgbGV0IGNvbHVtbl93aWR0aCA9IHdpZHRoIC8gY29sdW1ucztcbiAgICBsZXQgbWFpbl93aWR0aCA9IE1hdGgubWluKGNvbHVtbnMsIDIpICogY29sdW1uX3dpZHRoO1xuICAgIGxldCBtYWluX21hcmdpbiA9XG4gICAgICBNYXRoLmZsb29yKChjb2x1bW5zIC0gTWF0aC5taW4oY29sdW1ucywgMikpIC8gMikgKiBjb2x1bW5fd2lkdGg7XG5cbiAgICBpZiAobGF5b3V0ID09PSBcInByaW50XCIpIHtcbiAgICAgIHdpZHRoID0gbnVsbDtcbiAgICAgIGhlaWdodCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoID09PSBudWxsKSB7XG4gICAgICBtYWluX3dpZHRoID0gXCJhdXRvXCI7XG4gICAgICBtYWluX21hcmdpbiA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZWZlZmVmXCIgLz5cbiAgICAgICAgICA8dGl0bGU+R3JhbnQgQ3VzdGVyIOKGkiBSw6lzdW3DqTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgdHlwZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiR3JhbnQgQ3VzdGVyIOKGkiBSw6lzdW3DqVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly9yZXN1bWUuZ3JhbnRjdXN0ZXIuY29tXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgIDxkaXY+R3JhbnQgQ3VzdGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkRlc2lnbuKAk0NvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWluSGVpZ2h0OiBncmVtIH19PlxuICAgICAgICAgICAgICB7d2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsID8gYCR7d2lkdGh9eCR7aGVpZ2h0fWAgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlLDqXN1bcOpPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogbWFpbl93aWR0aCxcbiAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IG1haW5fbWFyZ2luXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+R3JhbnQgQ3VzdGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PldvcmsgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNkZXZlbG9wZXIsIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxNCwgNywgNyksIG5ldyBEYXRlKCkpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIHRoZSBpbnRlcmZhY2VzIGZvciBuaW5lIHByb2R1Y3QgcHJvdG90eXBlc1xuICAgICAgICAgICAgICAgICAgZGVtb25zdHJhdGluZyB0aGUgcG9zc2liaWxpdGllcyBvZiBlbWVyZ2luZyB0ZWNobm9sb2dpZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRGVzaWduZWQgdGhlIEZhc3QgRm9yd2FyZCBMYWJzIGJyYW5kIGFuZCBzdXJyb3VuZGluZyBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyBuaW5lIHByaW50ZWQgcmVzZWFyY2ggcmVwb3J0cywgdGhlIHdlYnNpdGUsIHRoZVxuICAgICAgICAgICAgICAgICAgYmxvZywgYW5kIGludGVybmFsIHRvb2xzLiBQb3N0LUNsb3VkZXJhIGFjcXVpc2l0aW9uIChpbiAyMDE3KVxuICAgICAgICAgICAgICAgICAgSSd2ZSBiZWVuIHdvcmtpbmcgdG8gaW50ZWdyYXRlIHRoYXQgYnJhbmQgaW50byB0aGUgbGFyZ2VyXG4gICAgICAgICAgICAgICAgICBDbG91ZGVyYSBicmFuZCBzeXN0ZW0uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTWFuYWdlZCB0d28gcHJvamVjdHMgYnkgRkZMIGludGVybnMsIHdoZXJlIHRoZXkgc2NvcGVkLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlZCBhbmQgcmVsZWFzZWQgdGhlaXIgb3duIHByb3RvdHlwZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTZGV2ZWxvcGVyLCBCZXRhd29ya3M8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDEyLCA2LCAxNSksIG5ldyBEYXRlKDIwMTQsIDcsIDI4KSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgdGhlIGludGVyZmFjZXMgZm9yIGVhcmx5LXN0YWdlICh1bmRlclxuICAgICAgICAgICAgICAgIGZvdXItcGVyc29uKSBzdGFydC11cHMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTZGV2ZWxvcGVyLCBCYW50ZXJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxMSwgMTEsIDEpLCBuZXcgRGF0ZSgyMDEyLCA2LCAxNSkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIGludGVyZmFjZXMgZm9yIGEgc3RhcnQtdXAgZm9jdXNlZCBvblxuICAgICAgICAgICAgICAgIGNhcHR1cmluZyBtZW1vcmFibGUgY29udmVyc2F0aW9ucy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Db2RlIGFuZCBzb2Z0d2FyZSBleHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICAgIDxwPkNvZGU6IEphdmFzY3JpcHQsIFJlYWN0LCBEMy5qcywgdGhyZWUuanMuPC9wPlxuICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZTogRmlnbWEsIFBob3Rvc2hvcCwgSWxsdXN0cmF0b3IsIEluRGVzaWduLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0sIG1hcmdpblRvcDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5MaW5rczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMubGluayhsWzBdKX0g4oCTwqB7bFsxXX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgPGRpdj5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgIDxwPkVtYWlsOiBncmFudGN1c3RlckBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFR3aXR0ZXI6e1wiIFwifVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0dyYW50Q3VzdGVyXCI+QEdyYW50Q3VzdGVyPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgR2VuZXJhdGVkXG4gICAgICAgICAgICB7b3JpZ2luICE9PSBudWxsID8gKFxuICAgICAgICAgICAgICA8c3Bhbj4gZnJvbSB7dGhpcy5saW5rKG9yaWdpbil9PC9zcGFuPlxuICAgICAgICAgICAgKSA6IG51bGx9IG9uIHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICB7cmVuZGVyX2luZm8gIT09IG51bGxcbiAgICAgICAgICAgICAgPyBgIHdpdGggJHtyZW5kZXJfaW5mby5icm93c2VyLm5hbWV9ICR7XG4gICAgICAgICAgICAgICAgICByZW5kZXJfaW5mby5icm93c2VyLnZlcnNpb25cbiAgICAgICAgICAgICAgICB9IG9uICR7cmVuZGVyX2luZm8ub3MubmFtZX0gJHtyZW5kZXJfaW5mby5vcy52ZXJzaW9ufWBcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBwYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYygwLjc1aW4gLSAke2dyZW19cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7Zm9udF9zaXplfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGluZV9oZWlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICAgICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuICAgICAgICAgICAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6ICR7Z3JlbX1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/resume/pages/index.js */"),
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
//# sourceMappingURL=index.js.45229b7c4c9201e88408.hot-update.js.map