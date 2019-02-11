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

var _jsxFileName = "/Users/grant.custer/Sites/cover/pages/index.js";


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

var links = [["http://feed.grantcuster.com", "Work and inspiration in progress."], ["https://turbofan.fastforwardlabs.com", "A Cloudera Fast Forward Labs prototype that places you in the role of turbofan factory owner."], ["https://fastforwardlabs.github.io/prototype-videos", "A video overview of the nine prototypes we've built at Cloudera Fast Forward Labs."], ["https://beta.observablehq.com/@grantcuster", "Code and design experiments in the form of interactive Observable notebooks."], ["https://grantcuster.github.io/umap-explorer", "A proof-of-concept that uses three.js to render tens of thousands of data points in an interactive visualization"], ["https://scifi.fastforwardlabs.com", "A mini-site showcasing the science fiction stories included in each of the Fast Forward Labs reports."]];

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
      layout: "web"
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
          lineNumber: 113
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
          layout = _this$state.layout;
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

      if (window) {
        var browser = bowser__WEBPACK_IMPORTED_MODULE_8__["getParser"](window.navigator.userAgent);

        var _browserInfo = browser.getBrowser();
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Grant Custer \u2192 R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: " Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : "Auto layout"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Layout:", " ", layout === "web" ? "web" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setLayout("web");
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "web"), " ", layout === "print" ? "print" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setLayout("print");
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "print"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          width: main_width,
          padding: grem / 2,
          marginLeft: main_margin
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Work experience")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Designer\u2013Developer, Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, formatTime(new Date(2014, 7, 7), new Date())), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Designed and coded the front-end for nine product prototypes demonstrating the possibilities of emerging technologies."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Designed the Fast Forward Labs and brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Managed two projects by FFL interns, where they scoped, created and released their own prototypes."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Designer\u2013Developer, Betaworks"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Designed and coded the interfaces for early-stage (under four-person) start-ups.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Designer\u2013Developer, Banters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Designed and coded interfaces for a start-up focused on capturing memorable conversations.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Code and software experience"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Code: Javascript, React, D3, three.js."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Software: Figma, Photoshop, Illustrator, InDesign.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem,
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, links.map(function (l) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, _this2.link(l[0]), " \u2013\xA0", l[1]);
      }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Email: grantcuster@gmail.com")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Generated from ", this.link("https://resume.grantcuster.com"), " on", " ", new Date().toLocaleString(), window ? "with ".concat(browserInfo.name) : null, "."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "531029063",
        css: "*{box-sizing:border-box;}html{font-size:".concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY292ZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbVIyQixBQUdtQyxBQUdtQixBQUloQyxBQU9BLEFBSUcsQUFLUSxTQWZELEFBT3dCLEdBSXRCLFFBS0gsRUF2QnBCLE1BVXVDLEtBU2YsS0FLRixHQXJCcUIsV0FZM0MsR0FLQSxHQUtjLFlBQ0YsVUFDRCxFQXZCWCxPQXdCNEIsNERBQ0gsdUJBQ1IsR0FuQmpCLFlBb0JBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY292ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDMtdGltZVwiO1xuaW1wb3J0ICogYXMgZDNmIGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0ICogYXMgUGx1cmFsaXplIGZyb20gXCJwbHVyYWxpemVcIjtcbmltcG9ydCAqIGFzIEJvd3NlciBmcm9tIFwiYm93c2VyXCI7XG5cbmZ1bmN0aW9uIHAoeCwgeSkge1xuICByZXR1cm4gYCR7eH1weCAke3l9cHhgO1xufVxuXG5sZXQgZm9ybWF0ID0gZDNmLnRpbWVGb3JtYXQoXCIlQiAlWVwiKTtcblxuLy8gd2l0aCBkYXlzXG5mdW5jdGlvbiB0aW1lU3BlbnQoc3RhcnQsIGVuZCkge1xuICBsZXQgcmF3X21vbnRocyA9IGQzLnRpbWVNb250aC5jb3VudChzdGFydCwgZW5kKTtcbiAgbGV0IHllYXJzID0gTWF0aC5mbG9vcihyYXdfbW9udGhzIC8gMTIpO1xuICBsZXQgbW9udGhzID0geWVhcnMgPiAwID8gcmF3X21vbnRocyAlIHllYXJzIDogcmF3X21vbnRocztcbiAgbGV0IG1vbnRoc19lbmQgPSBkMy50aW1lTW9udGgub2Zmc2V0KHN0YXJ0LCByYXdfbW9udGhzKTtcbiAgbGV0IGRheXMgPSBkMy50aW1lRGF5LmNvdW50KG1vbnRoc19lbmQsIGVuZCk7XG4gIC8vIHJvdW5kIG1vbnRoc1xuICBpZiAoZGF5cyA+IDE1KSBtb250aHMrKztcbiAgbGV0IHZhbHVlcyA9IFtdO1xuICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2goeWVhcnMgKyBcIiBcIiArIFBsdXJhbGl6ZShcInllYXJcIiwgeWVhcnMpKTtcbiAgfVxuICBpZiAobW9udGhzID4gMCkge1xuICAgIHZhbHVlcy5wdXNoKG1vbnRocyArIFwiIFwiICsgUGx1cmFsaXplKFwibW9udGhcIiwgbW9udGhzKSk7XG4gIH1cbiAgaWYgKGRheXMgPiAwKSB7XG4gICAgLy8gdmFsdWVzLnB1c2goZGF5cyArIFwiIFwiICsgUGx1cmFsaXplKFwiZGF5XCIsIGRheXMpKTtcbiAgfVxuICByZXR1cm4gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoXG4gICAgZm9ybWF0KHN0YXJ0KSArXG4gICAgXCLigJNcIiArXG4gICAgKCtlbmQgPT09ICtuZXcgRGF0ZSgpID8gXCJub3dcIiA6IGZvcm1hdChlbmQpKSArXG4gICAgXCIswqBcIiArXG4gICAgdGltZVNwZW50KHN0YXJ0LCBlbmQpXG4gICk7XG59XG5cbmxldCBsaW5rcyA9IFtcbiAgW1wiaHR0cDovL2ZlZWQuZ3JhbnRjdXN0ZXIuY29tXCIsIFwiV29yayBhbmQgaW5zcGlyYXRpb24gaW4gcHJvZ3Jlc3MuXCJdLFxuICBbXG4gICAgXCJodHRwczovL3R1cmJvZmFuLmZhc3Rmb3J3YXJkbGFicy5jb21cIixcbiAgICBcIkEgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMgcHJvdG90eXBlIHRoYXQgcGxhY2VzIHlvdSBpbiB0aGUgcm9sZSBvZiB0dXJib2ZhbiBmYWN0b3J5IG93bmVyLlwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vZmFzdGZvcndhcmRsYWJzLmdpdGh1Yi5pby9wcm90b3R5cGUtdmlkZW9zXCIsXG4gICAgXCJBIHZpZGVvIG92ZXJ2aWV3IG9mIHRoZSBuaW5lIHByb3RvdHlwZXMgd2UndmUgYnVpbHQgYXQgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9iZXRhLm9ic2VydmFibGVocS5jb20vQGdyYW50Y3VzdGVyXCIsXG4gICAgXCJDb2RlIGFuZCBkZXNpZ24gZXhwZXJpbWVudHMgaW4gdGhlIGZvcm0gb2YgaW50ZXJhY3RpdmUgT2JzZXJ2YWJsZSBub3RlYm9va3MuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9ncmFudGN1c3Rlci5naXRodWIuaW8vdW1hcC1leHBsb3JlclwiLFxuICAgIFwiQSBwcm9vZi1vZi1jb25jZXB0IHRoYXQgdXNlcyB0aHJlZS5qcyB0byByZW5kZXIgdGVucyBvZiB0aG91c2FuZHMgb2YgZGF0YSBwb2ludHMgaW4gYW4gaW50ZXJhY3RpdmUgdmlzdWFsaXphdGlvblwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vc2NpZmkuZmFzdGZvcndhcmRsYWJzLmNvbVwiLFxuICAgIFwiQSBtaW5pLXNpdGUgc2hvd2Nhc2luZyB0aGUgc2NpZW5jZSBmaWN0aW9uIHN0b3JpZXMgaW5jbHVkZWQgaW4gZWFjaCBvZiB0aGUgRmFzdCBGb3J3YXJkIExhYnMgcmVwb3J0cy5cIlxuICBdXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiB7IHRlc3Q6IG51bGwgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBsYXlvdXQ6IFwid2ViXCJcbiAgICB9O1xuICAgIHRoaXMubGluayA9IHRoaXMubGluay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2l6ZSA9IF8uZGVib3VuY2UodGhpcy5zZXRTaXplLmJpbmQodGhpcyksIDEwMCk7XG4gICAgdGhpcy5zZXRMYXlvdXQgPSB0aGlzLnNldExheW91dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFNpemUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRlZDogdHJ1ZVxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuc2V0U2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnNldFNpemUpO1xuICB9XG5cbiAgc2V0TGF5b3V0KGxheW91dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXlvdXQ6IGxheW91dCB9KTtcbiAgfVxuXG4gIGxpbmsoaHJlZikge1xuICAgIHJldHVybiA8YSBocmVmPXtocmVmfT57aHJlZn08L2E+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGxvYWRlZCwgd2lkdGgsIGhlaWdodCwgbGF5b3V0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBmb250X3NpemUgPSAxNjtcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjU7XG4gICAgbGV0IGdyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodDtcblxuICAgIGxldCBjb2x1bW5fdGFyZ2V0ID0gZ3JlbSAqIDE0O1xuICAgIGxldCBjb2x1bW5zID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAvIGNvbHVtbl90YXJnZXQpKTtcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gd2lkdGggLyBjb2x1bW5zO1xuICAgIGxldCBtYWluX3dpZHRoID0gTWF0aC5taW4oY29sdW1ucywgMikgKiBjb2x1bW5fd2lkdGg7XG4gICAgbGV0IG1haW5fbWFyZ2luID1cbiAgICAgIE1hdGguZmxvb3IoKGNvbHVtbnMgLSBNYXRoLm1pbihjb2x1bW5zLCAyKSkgLyAyKSAqIGNvbHVtbl93aWR0aDtcblxuICAgIGlmIChsYXlvdXQgPT09IFwicHJpbnRcIikge1xuICAgICAgd2lkdGggPSBudWxsO1xuICAgICAgaGVpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggPT09IG51bGwpIHtcbiAgICAgIG1haW5fd2lkdGggPSBcImF1dG9cIjtcbiAgICAgIG1haW5fbWFyZ2luID0gMDtcbiAgICB9XG5cbiAgICBpZiAod2luZG93KSB7XG4gICAgICBsZXQgYnJvd3NlciA9IEJvd3Nlci5nZXRQYXJzZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgbGV0IGJyb3dzZXJJbmZvID0gYnJvd3Nlci5nZXRCcm93c2VyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5HcmFudCBDdXN0ZXIg4oaSIFLDqXN1bcOpPC90aXRsZT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgdHlwZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHZhbHVlPVwiXG4gICAgICAgICAgICBEZXNpZ25lciBhbmQgZnJvbnQtZW5kIGRldmVsb3BlciBpbnRlcmVzdGVkIGluIHByb2NlZHVyYWxcbiAgICAgICAgICAgIGdlbmVyYXRpb24sIGRhdGEgdmlzdWFsaXphdGlvbiwgcHJvZHVjdCBkZXNpZ24gYW5kIHJldGhpbmtpbmcgdGhpbmdzXG4gICAgICAgICAgICBmcm9tIHNjcmF0Y2guXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgIDxkaXY+R3JhbnQgQ3VzdGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkRlc2lnbuKAk0NvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHt3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IGAke3dpZHRofXgke2hlaWdodH1gXG4gICAgICAgICAgICAgICAgOiBgQXV0byBsYXlvdXRgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5Sw6lzdW3DqTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBMYXlvdXQ6e1wiIFwifVxuICAgICAgICAgICAgICB7bGF5b3V0ID09PSBcIndlYlwiID8gKFxuICAgICAgICAgICAgICAgIFwid2ViXCJcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGF5b3V0KFwid2ViXCIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB3ZWJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgIHtsYXlvdXQgPT09IFwicHJpbnRcIiA/IChcbiAgICAgICAgICAgICAgICBcInByaW50XCJcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGF5b3V0KFwicHJpbnRcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHByaW50XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IG1haW5fd2lkdGgsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYWluX21hcmdpblxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZXIgYW5kIGZyb250LWVuZCBkZXZlbG9wZXIgaW50ZXJlc3RlZCBpbiBwcm9jZWR1cmFsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbiwgZGF0YSB2aXN1YWxpemF0aW9uLCBwcm9kdWN0IGRlc2lnbiBhbmQgcmV0aGlua2luZ1xuICAgICAgICAgICAgICAgIHRoaW5ncyBmcm9tIHNjcmF0Y2guXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PldvcmsgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNEZXZlbG9wZXIsIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxNCwgNywgNyksIG5ldyBEYXRlKCkpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIHRoZSBmcm9udC1lbmQgZm9yIG5pbmUgcHJvZHVjdCBwcm90b3R5cGVzXG4gICAgICAgICAgICAgICAgICBkZW1vbnN0cmF0aW5nIHRoZSBwb3NzaWJpbGl0aWVzIG9mIGVtZXJnaW5nIHRlY2hub2xvZ2llcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBEZXNpZ25lZCB0aGUgRmFzdCBGb3J3YXJkIExhYnMgYW5kIGJyYW5kIGFuZCBzdXJyb3VuZGluZ1xuICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsIGluY2x1ZGluZyBuaW5lIHByaW50ZWQgcmVzZWFyY2ggcmVwb3J0cywgdGhlXG4gICAgICAgICAgICAgICAgICB3ZWJzaXRlLCB0aGUgYmxvZywgYW5kIGludGVybmFsIHRvb2xzLiBQb3N0LUNsb3VkZXJhXG4gICAgICAgICAgICAgICAgICBhY3F1aXNpdGlvbiAoaW4gMjAxNykgSSd2ZSBiZWVuIHdvcmtpbmcgdG8gaW50ZWdyYXRlIHRoYXRcbiAgICAgICAgICAgICAgICAgIGJyYW5kIGludG8gdGhlIGxhcmdlciBDbG91ZGVyYSBicmFuZCBzeXN0ZW0uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTWFuYWdlZCB0d28gcHJvamVjdHMgYnkgRkZMIGludGVybnMsIHdoZXJlIHRoZXkgc2NvcGVkLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlZCBhbmQgcmVsZWFzZWQgdGhlaXIgb3duIHByb3RvdHlwZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTRGV2ZWxvcGVyLCBCZXRhd29ya3M8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDEyLCA2LCAxNSksIG5ldyBEYXRlKDIwMTQsIDcsIDI4KSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgdGhlIGludGVyZmFjZXMgZm9yIGVhcmx5LXN0YWdlICh1bmRlclxuICAgICAgICAgICAgICAgIGZvdXItcGVyc29uKSBzdGFydC11cHMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTRGV2ZWxvcGVyLCBCYW50ZXJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxMSwgMTEsIDEpLCBuZXcgRGF0ZSgyMDEyLCA2LCAxNSkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIGludGVyZmFjZXMgZm9yIGEgc3RhcnQtdXAgZm9jdXNlZCBvblxuICAgICAgICAgICAgICAgIGNhcHR1cmluZyBtZW1vcmFibGUgY29udmVyc2F0aW9ucy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Db2RlIGFuZCBzb2Z0d2FyZSBleHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICAgIDxwPkNvZGU6IEphdmFzY3JpcHQsIFJlYWN0LCBEMywgdGhyZWUuanMuPC9wPlxuICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZTogRmlnbWEsIFBob3Rvc2hvcCwgSWxsdXN0cmF0b3IsIEluRGVzaWduLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0sIG1hcmdpblRvcDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5MaW5rczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMubGluayhsWzBdKX0g4oCTwqB7bFsxXX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtIH19PlxuICAgICAgICAgICAgICA8ZGl2PkNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+RW1haWw6IGdyYW50Y3VzdGVyQGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIEdlbmVyYXRlZCBmcm9tIHt0aGlzLmxpbmsoXCJodHRwczovL3Jlc3VtZS5ncmFudGN1c3Rlci5jb21cIil9IG9ue1wiIFwifVxuICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICB7d2luZG93ID8gYHdpdGggJHticm93c2VySW5mby5uYW1lfWAgOiBudWxsfS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVfaGVpZ2h0fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICAgICAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICAgICAgICAgICAgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAke2dyZW19cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/cover/pages/index.js */"),
        dynamic: [font_size, line_height, grem],
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
//# sourceMappingURL=index.js.fed44b8a3c5a874dfae5.hot-update.js.map