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
      var render_info = bowser__WEBPACK_IMPORTED_MODULE_8__["getParser"](window.navigator.userAgent).parse().parsedResult;
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
          lineNumber: 117
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
          render_info = _this$state.render_info;
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

      console.log(render_info);
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Grant Custer \u2192 R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: " Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Grant Custer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Design\u2013Code"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : "Auto layout"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "R\xE9sum\xE9"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Layout:", " ", layout === "web" ? "web" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setLayout("web");
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "web"), " ", layout === "print" ? "print" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setLayout("print");
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
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
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Designer and front-end developer interested in procedural generation, data visualization, product design and rethinking things from scratch.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
      }, "Work experience")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Designer\u2013Developer, Cloudera Fast Forward Labs"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, formatTime(new Date(2014, 7, 7), new Date())), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Designed and coded the front-end for nine product prototypes demonstrating the possibilities of emerging technologies."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Designed the Fast Forward Labs and brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Managed two projects by FFL interns, where they scoped, created and released their own prototypes."))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Designer\u2013Developer, Betaworks"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Designed and coded the interfaces for early-stage (under four-person) start-ups.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginBottom: grem * 1
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Designer\u2013Developer, Banters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Designed and coded interfaces for a start-up focused on capturing memorable conversations.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Code and software experience"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Code: Javascript, React, D3, three.js."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
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
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Links"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, links.map(function (l) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
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
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Email: grantcuster@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: grem,
          padding: p(grem / 2, 0)
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["531029063", [font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "Generated from ", this.link("https://resume.grantcuster.com"), " on", " ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name, " ").concat(render_info.os.version) : null, ".")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "531029063",
        css: "*{box-sizing:border-box;}html{font-size:".concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Helvetica,Arial,sans-serif,\"Apple Color Emoji\", \"Segoe UI Emoji\",\"Segoe UI Symbol\";}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY292ZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVIyQixBQUdtQyxBQUdtQixBQUloQyxBQU9BLEFBSUcsQUFLUSxTQWZELEFBT3dCLEdBSXRCLFFBS0gsRUF2QnBCLE1BVXVDLEtBU2YsS0FLRixHQXJCcUIsV0FZM0MsR0FLQSxHQUtjLFlBQ0YsVUFDRCxFQXZCWCxPQXdCNEIsNERBQ0gsdUJBQ1IsR0FuQmpCLFlBb0JBIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY292ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDMtdGltZVwiO1xuaW1wb3J0ICogYXMgZDNmIGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0ICogYXMgUGx1cmFsaXplIGZyb20gXCJwbHVyYWxpemVcIjtcbmltcG9ydCAqIGFzIEJvd3NlciBmcm9tIFwiYm93c2VyXCI7XG5cbmZ1bmN0aW9uIHAoeCwgeSkge1xuICByZXR1cm4gYCR7eH1weCAke3l9cHhgO1xufVxuXG5sZXQgZm9ybWF0ID0gZDNmLnRpbWVGb3JtYXQoXCIlQiAlWVwiKTtcblxuLy8gd2l0aCBkYXlzXG5mdW5jdGlvbiB0aW1lU3BlbnQoc3RhcnQsIGVuZCkge1xuICBsZXQgcmF3X21vbnRocyA9IGQzLnRpbWVNb250aC5jb3VudChzdGFydCwgZW5kKTtcbiAgbGV0IHllYXJzID0gTWF0aC5mbG9vcihyYXdfbW9udGhzIC8gMTIpO1xuICBsZXQgbW9udGhzID0geWVhcnMgPiAwID8gcmF3X21vbnRocyAlIHllYXJzIDogcmF3X21vbnRocztcbiAgbGV0IG1vbnRoc19lbmQgPSBkMy50aW1lTW9udGgub2Zmc2V0KHN0YXJ0LCByYXdfbW9udGhzKTtcbiAgbGV0IGRheXMgPSBkMy50aW1lRGF5LmNvdW50KG1vbnRoc19lbmQsIGVuZCk7XG4gIC8vIHJvdW5kIG1vbnRoc1xuICBpZiAoZGF5cyA+IDE1KSBtb250aHMrKztcbiAgbGV0IHZhbHVlcyA9IFtdO1xuICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2goeWVhcnMgKyBcIiBcIiArIFBsdXJhbGl6ZShcInllYXJcIiwgeWVhcnMpKTtcbiAgfVxuICBpZiAobW9udGhzID4gMCkge1xuICAgIHZhbHVlcy5wdXNoKG1vbnRocyArIFwiIFwiICsgUGx1cmFsaXplKFwibW9udGhcIiwgbW9udGhzKSk7XG4gIH1cbiAgaWYgKGRheXMgPiAwKSB7XG4gICAgLy8gdmFsdWVzLnB1c2goZGF5cyArIFwiIFwiICsgUGx1cmFsaXplKFwiZGF5XCIsIGRheXMpKTtcbiAgfVxuICByZXR1cm4gdmFsdWVzLmpvaW4oXCIsIFwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoXG4gICAgZm9ybWF0KHN0YXJ0KSArXG4gICAgXCLigJNcIiArXG4gICAgKCtlbmQgPT09ICtuZXcgRGF0ZSgpID8gXCJub3dcIiA6IGZvcm1hdChlbmQpKSArXG4gICAgXCIswqBcIiArXG4gICAgdGltZVNwZW50KHN0YXJ0LCBlbmQpXG4gICk7XG59XG5cbmxldCBsaW5rcyA9IFtcbiAgW1wiaHR0cDovL2ZlZWQuZ3JhbnRjdXN0ZXIuY29tXCIsIFwiV29yayBhbmQgaW5zcGlyYXRpb24gaW4gcHJvZ3Jlc3MuXCJdLFxuICBbXG4gICAgXCJodHRwczovL3R1cmJvZmFuLmZhc3Rmb3J3YXJkbGFicy5jb21cIixcbiAgICBcIkEgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMgcHJvdG90eXBlIHRoYXQgcGxhY2VzIHlvdSBpbiB0aGUgcm9sZSBvZiB0dXJib2ZhbiBmYWN0b3J5IG93bmVyLlwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vZmFzdGZvcndhcmRsYWJzLmdpdGh1Yi5pby9wcm90b3R5cGUtdmlkZW9zXCIsXG4gICAgXCJBIHZpZGVvIG92ZXJ2aWV3IG9mIHRoZSBuaW5lIHByb3RvdHlwZXMgd2UndmUgYnVpbHQgYXQgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnMuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9iZXRhLm9ic2VydmFibGVocS5jb20vQGdyYW50Y3VzdGVyXCIsXG4gICAgXCJDb2RlIGFuZCBkZXNpZ24gZXhwZXJpbWVudHMgaW4gdGhlIGZvcm0gb2YgaW50ZXJhY3RpdmUgT2JzZXJ2YWJsZSBub3RlYm9va3MuXCJcbiAgXSxcbiAgW1xuICAgIFwiaHR0cHM6Ly9ncmFudGN1c3Rlci5naXRodWIuaW8vdW1hcC1leHBsb3JlclwiLFxuICAgIFwiQSBwcm9vZi1vZi1jb25jZXB0IHRoYXQgdXNlcyB0aHJlZS5qcyB0byByZW5kZXIgdGVucyBvZiB0aG91c2FuZHMgb2YgZGF0YSBwb2ludHMgaW4gYW4gaW50ZXJhY3RpdmUgdmlzdWFsaXphdGlvblwiXG4gIF0sXG4gIFtcbiAgICBcImh0dHBzOi8vc2NpZmkuZmFzdGZvcndhcmRsYWJzLmNvbVwiLFxuICAgIFwiQSBtaW5pLXNpdGUgc2hvd2Nhc2luZyB0aGUgc2NpZW5jZSBmaWN0aW9uIHN0b3JpZXMgaW5jbHVkZWQgaW4gZWFjaCBvZiB0aGUgRmFzdCBGb3J3YXJkIExhYnMgcmVwb3J0cy5cIlxuICBdXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiB7IHRlc3Q6IG51bGwgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBsYXlvdXQ6IFwid2ViXCIsXG4gICAgICByZW5kZXJfaW5mbzogbnVsbFxuICAgIH07XG4gICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRTaXplID0gXy5kZWJvdW5jZSh0aGlzLnNldFNpemUuYmluZCh0aGlzKSwgMTAwKTtcbiAgICB0aGlzLnNldExheW91dCA9IHRoaXMuc2V0TGF5b3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGVkOiB0cnVlXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5zZXRTaXplKTtcbiAgICBsZXQgcmVuZGVyX2luZm8gPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KS5wYXJzZSgpXG4gICAgICAucGFyc2VkUmVzdWx0O1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJfaW5mbyB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuc2V0U2l6ZSk7XG4gIH1cblxuICBzZXRMYXlvdXQobGF5b3V0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxheW91dDogbGF5b3V0IH0pO1xuICB9XG5cbiAgbGluayhocmVmKSB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9PntocmVmfTwvYT47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbG9hZGVkLCB3aWR0aCwgaGVpZ2h0LCBsYXlvdXQsIHJlbmRlcl9pbmZvIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBmb250X3NpemUgPSAxNjtcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjU7XG4gICAgbGV0IGdyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodDtcblxuICAgIGxldCBjb2x1bW5fdGFyZ2V0ID0gZ3JlbSAqIDE0O1xuICAgIGxldCBjb2x1bW5zID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAvIGNvbHVtbl90YXJnZXQpKTtcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gd2lkdGggLyBjb2x1bW5zO1xuICAgIGxldCBtYWluX3dpZHRoID0gTWF0aC5taW4oY29sdW1ucywgMikgKiBjb2x1bW5fd2lkdGg7XG4gICAgbGV0IG1haW5fbWFyZ2luID1cbiAgICAgIE1hdGguZmxvb3IoKGNvbHVtbnMgLSBNYXRoLm1pbihjb2x1bW5zLCAyKSkgLyAyKSAqIGNvbHVtbl93aWR0aDtcblxuICAgIGlmIChsYXlvdXQgPT09IFwicHJpbnRcIikge1xuICAgICAgd2lkdGggPSBudWxsO1xuICAgICAgaGVpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggPT09IG51bGwpIHtcbiAgICAgIG1haW5fd2lkdGggPSBcImF1dG9cIjtcbiAgICAgIG1haW5fbWFyZ2luID0gMDtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhyZW5kZXJfaW5mbyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkdyYW50IEN1c3RlciDihpIgUsOpc3Vtw6k8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICB0eXBlPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgdmFsdWU9XCJcbiAgICAgICAgICAgIERlc2lnbmVyIGFuZCBmcm9udC1lbmQgZGV2ZWxvcGVyIGludGVyZXN0ZWQgaW4gcHJvY2VkdXJhbFxuICAgICAgICAgICAgZ2VuZXJhdGlvbiwgZGF0YSB2aXN1YWxpemF0aW9uLCBwcm9kdWN0IGRlc2lnbiBhbmQgcmV0aGlua2luZyB0aGluZ3NcbiAgICAgICAgICAgIGZyb20gc2NyYXRjaC5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PlxuICAgICAgICAgICAgPGRpdj5HcmFudCBDdXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RGVzaWdu4oCTQ29kZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3dpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgID8gYCR7d2lkdGh9eCR7aGVpZ2h0fWBcbiAgICAgICAgICAgICAgICA6IGBBdXRvIGxheW91dGB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPlLDqXN1bcOpPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIExheW91dDp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtsYXlvdXQgPT09IFwid2ViXCIgPyAoXG4gICAgICAgICAgICAgICAgXCJ3ZWJcIlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMYXlvdXQoXCJ3ZWJcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHdlYlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAge2xheW91dCA9PT0gXCJwcmludFwiID8gKFxuICAgICAgICAgICAgICAgIFwicHJpbnRcIlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMYXlvdXQoXCJwcmludFwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgcHJpbnRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogbWFpbl93aWR0aCxcbiAgICAgICAgICAgICAgcGFkZGluZzogZ3JlbSAvIDIsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IG1haW5fbWFyZ2luXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtIH19PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXNpZ25lciBhbmQgZnJvbnQtZW5kIGRldmVsb3BlciBpbnRlcmVzdGVkIGluIHByb2NlZHVyYWxcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uLCBkYXRhIHZpc3VhbGl6YXRpb24sIHByb2R1Y3QgZGVzaWduIGFuZCByZXRoaW5raW5nXG4gICAgICAgICAgICAgICAgdGhpbmdzIGZyb20gc2NyYXRjaC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+V29yayBleHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBncmVtICogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5EZXNpZ25lcuKAk0RldmVsb3BlciwgQ2xvdWRlcmEgRmFzdCBGb3J3YXJkIExhYnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDE0LCA3LCA3KSwgbmV3IERhdGUoKSl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgdGhlIGZyb250LWVuZCBmb3IgbmluZSBwcm9kdWN0IHByb3RvdHlwZXNcbiAgICAgICAgICAgICAgICAgIGRlbW9uc3RyYXRpbmcgdGhlIHBvc3NpYmlsaXRpZXMgb2YgZW1lcmdpbmcgdGVjaG5vbG9naWVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIERlc2lnbmVkIHRoZSBGYXN0IEZvcndhcmQgTGFicyBhbmQgYnJhbmQgYW5kIHN1cnJvdW5kaW5nXG4gICAgICAgICAgICAgICAgICBtYXRlcmlhbCwgaW5jbHVkaW5nIG5pbmUgcHJpbnRlZCByZXNlYXJjaCByZXBvcnRzLCB0aGVcbiAgICAgICAgICAgICAgICAgIHdlYnNpdGUsIHRoZSBibG9nLCBhbmQgaW50ZXJuYWwgdG9vbHMuIFBvc3QtQ2xvdWRlcmFcbiAgICAgICAgICAgICAgICAgIGFjcXVpc2l0aW9uIChpbiAyMDE3KSBJJ3ZlIGJlZW4gd29ya2luZyB0byBpbnRlZ3JhdGUgdGhhdFxuICAgICAgICAgICAgICAgICAgYnJhbmQgaW50byB0aGUgbGFyZ2VyIENsb3VkZXJhIGJyYW5kIHN5c3RlbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2VkIHR3byBwcm9qZWN0cyBieSBGRkwgaW50ZXJucywgd2hlcmUgdGhleSBzY29wZWQsXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkIGFuZCByZWxlYXNlZCB0aGVpciBvd24gcHJvdG90eXBlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNEZXZlbG9wZXIsIEJldGF3b3JrczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKG5ldyBEYXRlKDIwMTIsIDYsIDE1KSwgbmV3IERhdGUoMjAxNCwgNywgMjgpKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBjb2RlZCB0aGUgaW50ZXJmYWNlcyBmb3IgZWFybHktc3RhZ2UgKHVuZGVyXG4gICAgICAgICAgICAgICAgZm91ci1wZXJzb24pIHN0YXJ0LXVwcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNEZXZlbG9wZXIsIEJhbnRlcnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDExLCAxMSwgMSksIG5ldyBEYXRlKDIwMTIsIDYsIDE1KSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgaW50ZXJmYWNlcyBmb3IgYSBzdGFydC11cCBmb2N1c2VkIG9uXG4gICAgICAgICAgICAgICAgY2FwdHVyaW5nIG1lbW9yYWJsZSBjb252ZXJzYXRpb25zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBncmVtIH19PlxuICAgICAgICAgICAgICA8ZGl2PkNvZGUgYW5kIHNvZnR3YXJlIGV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+Q29kZTogSmF2YXNjcmlwdCwgUmVhY3QsIEQzLCB0aHJlZS5qcy48L3A+XG4gICAgICAgICAgICAgIDxwPlNvZnR3YXJlOiBGaWdtYSwgUGhvdG9zaG9wLCBJbGx1c3RyYXRvciwgSW5EZXNpZ24uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSwgbWFyZ2luVG9wOiBncmVtIH19PlxuICAgICAgICAgICAgICA8ZGl2PkxpbmtzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rKGxbMF0pfSDigJPCoHtsWzFdfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gfX0+XG4gICAgICAgICAgICAgIDxkaXY+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICA8cD5FbWFpbDogZ3JhbnRjdXN0ZXJAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IGdyZW0sIHBhZGRpbmc6IHAoZ3JlbSAvIDIsIDApIH19PlxuICAgICAgICAgICAgR2VuZXJhdGVkIGZyb20ge3RoaXMubGluayhcImh0dHBzOi8vcmVzdW1lLmdyYW50Y3VzdGVyLmNvbVwiKX0gb257XCIgXCJ9XG4gICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAge3JlbmRlcl9pbmZvICE9PSBudWxsXG4gICAgICAgICAgICAgID8gYCB3aXRoICR7cmVuZGVyX2luZm8uYnJvd3Nlci5uYW1lfSAke1xuICAgICAgICAgICAgICAgICAgcmVuZGVyX2luZm8uYnJvd3Nlci52ZXJzaW9uXG4gICAgICAgICAgICAgICAgfSBvbiAke3JlbmRlcl9pbmZvLm9zLm5hbWV9ICR7cmVuZGVyX2luZm8ub3MudmVyc2lvbn1gXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtmb250X3NpemV9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtsaW5lX2hlaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsXG4gICAgICAgICAgICAgIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/cover/pages/index.js */"),
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
//# sourceMappingURL=index.js.a455660cd1fc2c411a52.hot-update.js.map