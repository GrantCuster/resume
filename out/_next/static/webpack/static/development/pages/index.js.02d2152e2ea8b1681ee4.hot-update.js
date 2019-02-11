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
      layout: "web",
      render_info: null
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
      var render_info = bowser__WEBPACK_IMPORTED_MODULE_8__["getParser"](window.navigator.userAgent).parse();
      this.setState({
        render_info: render_info
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
          lineNumber: 116
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
          browser = _this$state.browser;
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Grant Custer \u2192 R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: " Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : "Auto layout"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Layout:", " ", layout === "web" ? "web" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setLayout("web");
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "web"), " ", layout === "print" ? "print" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setLayout("print");
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
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
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Work experience")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Designer\u2013Developer, Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, formatTime(new Date(2014, 7, 7), new Date())), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Designed and coded the front-end for nine product prototypes demonstrating the possibilities of emerging technologies."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Designed the Fast Forward Labs and brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "Managed two projects by FFL interns, where they scoped, created and released their own prototypes."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Designer\u2013Developer, Betaworks"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Designed and coded the interfaces for early-stage (under four-person) start-ups.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Designer\u2013Developer, Banters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Designed and coded interfaces for a start-up focused on capturing memorable conversations.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Code and software experience"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Code: Javascript, React, D3, three.js."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
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
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, links.map(function (l) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
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
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Email: grantcuster@gmail.com")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Generated from ", this.link("https://resume.grantcuster.com"), " on", " ", new Date().toLocaleString(), browser ? " with ".concat(browser.browser.name, " ").concat(browser.browser.version, " on ").concat(browser.os.name, " ").concat(broser.os.version, ".") : ".", "."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "531029063",
        css: "*{box-sizing:border-box;}html{font-size:".concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY292ZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1IyQixBQUdtQyxBQUdtQixBQUloQyxBQU9BLEFBSUcsQUFLUSxTQWZELEFBT3dCLEdBSXRCLFFBS0gsRUF2QnBCLE1BVXVDLEtBU2YsS0FLRixHQXJCcUIsV0FZM0MsR0FLQSxHQUtjLFlBQ0YsVUFDRCxFQXZCWCxPQXdCNEIsNERBQ0gsdUJBQ1IsR0FuQmpCLFlBb0JBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY292ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDMtdGltZVwiO1xuaW1wb3J0ICogYXMgZDNmIGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0ICogYXMgUGx1cmFsaXplIGZyb20gXCJwbHVyYWxpemVcIjtcbmltcG9ydCAqIGFzIEJvd3NlciBmcm9tIFwiYm93c2VyXCI7XG5cbmZ1bmN0aW9uIHAoeCwgeSkge1xuICByZXR1cm4gYCR7eH1weCAke3l9cHhgO1xufVxuXG5sZXQgZm9ybWF0ID0gZDNmLnRpbWVGb3JtYXQoXCIlQiAlWVwiKTtcblxuLy8gd2l0aCBkYXlzXG5mdW5jdGlvbiB0aW1lU3BlbnQoc3RhcnQsIGVuZCkge1xuICBsZXQgcmF3X21vbnRocyA9IGQzLnRpbWVNb250aC5jb3VudChzdGFydCwgZW5kKTtcbiAgbGV0IHllYXJzID0gTWF0aC5mbG9vcihyYXdfbW9udGhzIC8gMTIpO1xuICBsZXQgbW9udGhzID0geWVhcnMgPiAwID8gcmF3X21vbnRocyAlIHllYXJzIDogcmF3X21vbnRocztcbiAgbGV0IG1vbnRoc19lbmQgPSBkMy50aW1lTW9udGgub2Zmc2V0KHN0YXJ0LCByYXdfbW9udGhzKTtcbiAgbGV0IGRheXMgPSBkMy50aW1lRGF5LmNvdW50KG1vbnRoc19lbmQsIGVuZCk7XG4gIC8vIHJvdW5kIG1vbnRoc1xuICBpZiAoZGF5cyA+IDE1KSBtb250aHMrKztcbiAgbGV0IHZhbHVlcyA9IFtdO1xuICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2goeWVhcnMgKyBcIiBcIiArIFBsdXJhbGl6ZShcInllYXJcIiwgeWVhcnMpKTtcbiAgfVxuICBpZiAobW9udGhzID4gMCkge1xuICAgIHZhbHVlcy5wdXNoKG1vbnRocyArIFwiIFwiICsgUGx1cmFsaXplKFwibW9udGhcIiwgbW9udGhzKSk7XG4gIH1cbiAgaWYgKGRheXMgPiAwKSB7XG4gICAgLy8gdmFsdWVzLnB1c2goZGF5cyArIFwiIFwiICsgUGx1cmFsaXplKFwiZGF5XCIsIGRheXMpKTtcbiAgfVxuICByZXR1cm4gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoXG4gICAgZm9ybWF0KHN0YXJ0KSArXG4gICAgXCLigJNcIiArXG4gICAgKCtlbmQgPT09ICtuZXcgRGF0ZSgpID8gXCJub3dcIiA6IGZvcm1hdChlbmQpKSArXG4gICAgXCIswqBcIiArXG4gICAgdGltZVNwZW50KHN0YXJ0LCBlbmQpXG4gICk7XG59XG5cbmxldCBsaW5rcyA9IFtcbiAgW1wiaHR0cDovL2ZlZWQuZ3JhbnRjdXN0ZXIuY29tXCIsIFwiV29yayBhbmQgaW5zcGlyYXRpb24gaW4gcHJvZ3Jlc3MuXCJdLFxuICBbXG4gICAgXCJodHRwczovL3R1cmJvZmFuLmZhc3Rmb3J3YXJkbGFicy5jb21cIixcbiAgICBcIkEgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMgcHJvdG90eXBlIHRoYXQgcGxhY2VzIHlvdSBpbiB0aGUgcm9sZSBvZiB0dXJib2ZhbiBmYWN0b3J5IG93bmVyLlwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vZmFzdGZvcndhcmRsYWJzLmdpdGh1Yi5pby9wcm90b3R5cGUtdmlkZW9zXCIsXG4gICAgXCJBIHZpZGVvIG92ZXJ2aWV3IG9mIHRoZSBuaW5lIHByb3RvdHlwZXMgd2UndmUgYnVpbHQgYXQgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9iZXRhLm9ic2VydmFibGVocS5jb20vQGdyYW50Y3VzdGVyXCIsXG4gICAgXCJDb2RlIGFuZCBkZXNpZ24gZXhwZXJpbWVudHMgaW4gdGhlIGZvcm0gb2YgaW50ZXJhY3RpdmUgT2JzZXJ2YWJsZSBub3RlYm9va3MuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9ncmFudGN1c3Rlci5naXRodWIuaW8vdW1hcC1leHBsb3JlclwiLFxuICAgIFwiQSBwcm9vZi1vZi1jb25jZXB0IHRoYXQgdXNlcyB0aHJlZS5qcyB0byByZW5kZXIgdGVucyBvZiB0aG91c2FuZHMgb2YgZGF0YSBwb2ludHMgaW4gYW4gaW50ZXJhY3RpdmUgdmlzdWFsaXphdGlvblwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vc2NpZmkuZmFzdGZvcndhcmRsYWJzLmNvbVwiLFxuICAgIFwiQSBtaW5pLXNpdGUgc2hvd2Nhc2luZyB0aGUgc2NpZW5jZSBmaWN0aW9uIHN0b3JpZXMgaW5jbHVkZWQgaW4gZWFjaCBvZiB0aGUgRmFzdCBGb3J3YXJkIExhYnMgcmVwb3J0cy5cIlxuICBdXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiB7IHRlc3Q6IG51bGwgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBsYXlvdXQ6IFwid2ViXCIsXG4gICAgICByZW5kZXJfaW5mbzogbnVsbFxuICAgIH07XG4gICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRTaXplID0gXy5kZWJvdW5jZSh0aGlzLnNldFNpemUuYmluZCh0aGlzKSwgMTAwKTtcbiAgICB0aGlzLnNldExheW91dCA9IHRoaXMuc2V0TGF5b3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGVkOiB0cnVlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5zZXRTaXplKTtcbiAgICBsZXQgcmVuZGVyX2luZm8gPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KS5wYXJzZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJfaW5mbyB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuc2V0U2l6ZSk7XG4gIH1cblxuICBzZXRMYXlvdXQobGF5b3V0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxheW91dDogbGF5b3V0IH0pO1xuICB9XG5cbiAgbGluayhocmVmKSB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9PntocmVmfTwvYT47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbG9hZGVkLCB3aWR0aCwgaGVpZ2h0LCBsYXlvdXQsIGJyb3dzZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGZvbnRfc2l6ZSA9IDE2O1xuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNTtcbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0O1xuXG4gICAgbGV0IGNvbHVtbl90YXJnZXQgPSBncmVtICogMTQ7XG4gICAgbGV0IGNvbHVtbnMgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHdpZHRoIC8gY29sdW1uX3RhcmdldCkpO1xuICAgIGxldCBjb2x1bW5fd2lkdGggPSB3aWR0aCAvIGNvbHVtbnM7XG4gICAgbGV0IG1haW5fd2lkdGggPSBNYXRoLm1pbihjb2x1bW5zLCAyKSAqIGNvbHVtbl93aWR0aDtcbiAgICBsZXQgbWFpbl9tYXJnaW4gPVxuICAgICAgTWF0aC5mbG9vcigoY29sdW1ucyAtIE1hdGgubWluKGNvbHVtbnMsIDIpKSAvIDIpICogY29sdW1uX3dpZHRoO1xuXG4gICAgaWYgKGxheW91dCA9PT0gXCJwcmludFwiKSB7XG4gICAgICB3aWR0aCA9IG51bGw7XG4gICAgICBoZWlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh3aWR0aCA9PT0gbnVsbCkge1xuICAgICAgbWFpbl93aWR0aCA9IFwiYXV0b1wiO1xuICAgICAgbWFpbl9tYXJnaW4gPSAwO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+R3JhbnQgQ3VzdGVyIOKGkiBSw6lzdW3DqTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHR5cGU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT1cIlxuICAgICAgICAgICAgRGVzaWduZXIgYW5kIGZyb250LWVuZCBkZXZlbG9wZXIgaW50ZXJlc3RlZCBpbiBwcm9jZWR1cmFsXG4gICAgICAgICAgICBnZW5lcmF0aW9uLCBkYXRhIHZpc3VhbGl6YXRpb24sIHByb2R1Y3QgZGVzaWduIGFuZCByZXRoaW5raW5nIHRoaW5nc1xuICAgICAgICAgICAgZnJvbSBzY3JhdGNoLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICA8ZGl2PkdyYW50IEN1c3RlcjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5EZXNpZ27igJNDb2RlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7d2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBgJHt3aWR0aH14JHtoZWlnaHR9YFxuICAgICAgICAgICAgICAgIDogYEF1dG8gbGF5b3V0YH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+UsOpc3Vtw6k8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTGF5b3V0OntcIiBcIn1cbiAgICAgICAgICAgICAge2xheW91dCA9PT0gXCJ3ZWJcIiA/IChcbiAgICAgICAgICAgICAgICBcIndlYlwiXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExheW91dChcIndlYlwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgd2ViXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICB7bGF5b3V0ID09PSBcInByaW50XCIgPyAoXG4gICAgICAgICAgICAgICAgXCJwcmludFwiXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExheW91dChcInByaW50XCIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBwcmludFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBtYWluX3dpZHRoLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogbWFpbl9tYXJnaW5cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlc2lnbmVyIGFuZCBmcm9udC1lbmQgZGV2ZWxvcGVyIGludGVyZXN0ZWQgaW4gcHJvY2VkdXJhbFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb24sIGRhdGEgdmlzdWFsaXphdGlvbiwgcHJvZHVjdCBkZXNpZ24gYW5kIHJldGhpbmtpbmdcbiAgICAgICAgICAgICAgICB0aGluZ3MgZnJvbSBzY3JhdGNoLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Xb3JrIGV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTRGV2ZWxvcGVyLCBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFiczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTQsIDcsIDcpLCBuZXcgRGF0ZSgpKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCB0aGUgZnJvbnQtZW5kIGZvciBuaW5lIHByb2R1Y3QgcHJvdG90eXBlc1xuICAgICAgICAgICAgICAgICAgZGVtb25zdHJhdGluZyB0aGUgcG9zc2liaWxpdGllcyBvZiBlbWVyZ2luZyB0ZWNobm9sb2dpZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRGVzaWduZWQgdGhlIEZhc3QgRm9yd2FyZCBMYWJzIGFuZCBicmFuZCBhbmQgc3Vycm91bmRpbmdcbiAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLCBpbmNsdWRpbmcgbmluZSBwcmludGVkIHJlc2VhcmNoIHJlcG9ydHMsIHRoZVxuICAgICAgICAgICAgICAgICAgd2Vic2l0ZSwgdGhlIGJsb2csIGFuZCBpbnRlcm5hbCB0b29scy4gUG9zdC1DbG91ZGVyYVxuICAgICAgICAgICAgICAgICAgYWNxdWlzaXRpb24gKGluIDIwMTcpIEkndmUgYmVlbiB3b3JraW5nIHRvIGludGVncmF0ZSB0aGF0XG4gICAgICAgICAgICAgICAgICBicmFuZCBpbnRvIHRoZSBsYXJnZXIgQ2xvdWRlcmEgYnJhbmQgc3lzdGVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIE1hbmFnZWQgdHdvIHByb2plY3RzIGJ5IEZGTCBpbnRlcm5zLCB3aGVyZSB0aGV5IHNjb3BlZCxcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgYW5kIHJlbGVhc2VkIHRoZWlyIG93biBwcm90b3R5cGVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk0RldmVsb3BlciwgQmV0YXdvcmtzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxMiwgNiwgMTUpLCBuZXcgRGF0ZSgyMDE0LCA3LCAyOCkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIHRoZSBpbnRlcmZhY2VzIGZvciBlYXJseS1zdGFnZSAodW5kZXJcbiAgICAgICAgICAgICAgICBmb3VyLXBlcnNvbikgc3RhcnQtdXBzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk0RldmVsb3BlciwgQmFudGVyczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTEsIDExLCAxKSwgbmV3IERhdGUoMjAxMiwgNiwgMTUpKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCBpbnRlcmZhY2VzIGZvciBhIHN0YXJ0LXVwIGZvY3VzZWQgb25cbiAgICAgICAgICAgICAgICBjYXB0dXJpbmcgbWVtb3JhYmxlIGNvbnZlcnNhdGlvbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+Q29kZSBhbmQgc29mdHdhcmUgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgICA8cD5Db2RlOiBKYXZhc2NyaXB0LCBSZWFjdCwgRDMsIHRocmVlLmpzLjwvcD5cbiAgICAgICAgICAgICAgPHA+U29mdHdhcmU6IEZpZ21hLCBQaG90b3Nob3AsIElsbHVzdHJhdG9yLCBJbkRlc2lnbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtLCBtYXJnaW5Ub3A6IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+TGlua3M8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmsobFswXSl9IOKAk8Kge2xbMV19XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Db250YWN0PC9kaXY+XG4gICAgICAgICAgICAgIDxwPkVtYWlsOiBncmFudGN1c3RlckBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBncmVtIH19PlxuICAgICAgICAgICAgICBHZW5lcmF0ZWQgZnJvbSB7dGhpcy5saW5rKFwiaHR0cHM6Ly9yZXN1bWUuZ3JhbnRjdXN0ZXIuY29tXCIpfSBvbntcIiBcIn1cbiAgICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAge2Jyb3dzZXJcbiAgICAgICAgICAgICAgICA/IGAgd2l0aCAke2Jyb3dzZXIuYnJvd3Nlci5uYW1lfSAke1xuICAgICAgICAgICAgICAgICAgICBicm93c2VyLmJyb3dzZXIudmVyc2lvblxuICAgICAgICAgICAgICAgICAgfSBvbiAke2Jyb3dzZXIub3MubmFtZX0gJHticm9zZXIub3MudmVyc2lvbn0uYFxuICAgICAgICAgICAgICAgIDogYC5gfVxuICAgICAgICAgICAgICAuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaW5lX2hlaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsXG4gICAgICAgICAgICAgIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/cover/pages/index.js */"),
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
//# sourceMappingURL=index.js.02d2152e2ea8b1681ee4.hot-update.js.map