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

var links = [['https://constraint.systems', 'An ongoing project where I design and code experimental web-based creative tools.'], ['https://activelearner.fastforwardlabs.com', 'A visualization of how you can use active learning to select training examples to label. I used three.js to render the points and animate the results of each training step.'], ['https://turbofan.fastforwardlabs.com/', 'Turbofan Tycoon illustrates the strengths of federated learning by letting you choose a maintenance strategy for your factory of turbofans. I had a lot of fun building a fast-moving turbofan dashboard.'], ['https://feed.grantcuster.com', 'Work and inspiration in progress.'], ['https://blog.fastforwardlabs.com', 'The Cloudera Fast Forward Labs blog. I built and maintain the blog (in Hugo!) and also do a lot of the design work you see on it.'], ['https://grantcuster.com', 'My index page, featuring even more links.']];
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
          lineNumber: 116,
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
          lineNumber: 143,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "theme-color",
        content: "#efefef",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }
      }, "Grant Custer \u2192 R\xE9sum\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        type: "description",
        value: description,
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:title",
        content: "Grant Custer \u2192 R\xE9sum\xE9",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:description",
        content: description,
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        property: "og:url",
        content: "http://resume.grantcuster.com",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }, ".js-no-flash { display: none }"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("noscript", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
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
          lineNumber: 161,
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
          lineNumber: 165,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }, "Grant Custer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
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
          lineNumber: 168,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]) + " " + "print-hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }
      }, width !== null && height !== null ? "".concat(width, "x").concat(height) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
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
          lineNumber: 177,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
          lineNumber: 186,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
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
          lineNumber: 189,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
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
          lineNumber: 192,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Cloudera Fast Forward Labs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 15
        }
      }, formatTime(new Date(2014, 7, 7), new Date())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 17
        }
      }, "Designed and coded the interfaces for nine product prototypes demonstrating the possibilities of emerging technologies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }
      }, "Designed the Fast Forward Labs brand and surrounding material, including nine printed research reports, the website, the blog, and internal tools. Post-Cloudera acquisition (in 2017) I've been working to integrate that brand into the larger Cloudera brand system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
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
          lineNumber: 213,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Betaworks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }
      }, formatTime(new Date(2012, 6, 15), new Date(2014, 7, 28))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
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
          lineNumber: 223,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      }, "Designer\u2013developer, Banters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 15
        }
      }, formatTime(new Date(2011, 11, 1), new Date(2012, 6, 15))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
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
          lineNumber: 233,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 15
        }
      }, "Code and software experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      }, "Code: Javascript, React, D3.js, three.js, HTML, CSS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
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
      }, "Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }
      }, links.map(function (l) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
          __self: _this2,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 19
          }
        }, _this2.link(l[0]), " \u2013\xA0", l[1]);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {},
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 15
        }
      }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 15
        }
      }, "Email: grantcuster@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 15
        }
      }, "Twitter:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: "https://twitter.com/GrantCuster",
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
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
          lineNumber: 257,
          columnNumber: 11
        }
      }, "Generated", origin !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        __self: this,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["365242223", [grem, font_size, line_height, grem]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 15
        }
      }, " from ", this.link(origin)) : null, " on ", new Date().toLocaleString(), render_info !== null ? " with ".concat(render_info.browser.name, " ").concat(render_info.browser.version, " on ").concat(render_info.os.name) : null, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "365242223",
        css: "@page{margin:calc(0.75in - ".concat(grem, "px);}*{box-sizing:border-box;}@media print{.content{width:auto !important;margin:auto !important;}.print-hide{display:none;}}html{font-size:").concat(font_size, "px;line-height:").concat(line_height, ";}body{margin:0;background:#efefef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Helvetica,Arial,sans-serif,'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol';}p{margin:0;text-indent:").concat(grem, "px;}a{color:black;word-break:break-all;word-break:break-word;}button{font-family:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L2Rldi9yZXN1bWUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMlEyQixBQUdtQyxBQUcrQixBQUk3QixBQUlULEFBSTBCLEFBSWhDLEFBT0EsQUFJRyxBQUtRLFNBZkQsQUFPd0IsR0FJdEIsQ0FuQnJCLE9Bd0JrQixFQW5DcEIsQUFPMkIsTUFlWSxLQVNmLEtBS0YsR0FyQnFCLElBUHpDLE9BbUJGLENBeEJBLEVBNkJBLEdBS2MsWUFDRixVQUNELEVBdkJYLE9Bd0I0Qiw0REFDSCx1QkFDUixHQW5CakIsWUFvQkEiLCJmaWxlIjoiL2hvbWUvZ3JhbnQvZGV2L3Jlc3VtZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzLXRpbWUnXG5pbXBvcnQgKiBhcyBkM2YgZnJvbSAnZDMtdGltZS1mb3JtYXQnXG5pbXBvcnQgKiBhcyBQbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuaW1wb3J0ICogYXMgQm93c2VyIGZyb20gJ2Jvd3NlcidcblxuZnVuY3Rpb24gcCh4LCB5KSB7XG4gIHJldHVybiBgJHt4fXB4ICR7eX1weGBcbn1cblxubGV0IGZvcm1hdCA9IGQzZi50aW1lRm9ybWF0KCclQiAlWScpXG5cbi8vIHdpdGggZGF5c1xuZnVuY3Rpb24gdGltZVNwZW50KHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJhd19tb250aHMgPSBkMy50aW1lTW9udGguY291bnQoc3RhcnQsIGVuZClcbiAgbGV0IHllYXJzID0gTWF0aC5mbG9vcihyYXdfbW9udGhzIC8gMTIpXG4gIGxldCBtb250aHMgPSB5ZWFycyA+IDAgPyByYXdfbW9udGhzICUgeWVhcnMgOiByYXdfbW9udGhzXG4gIGxldCBtb250aHNfZW5kID0gZDMudGltZU1vbnRoLm9mZnNldChzdGFydCwgcmF3X21vbnRocylcbiAgbGV0IGRheXMgPSBkMy50aW1lRGF5LmNvdW50KG1vbnRoc19lbmQsIGVuZClcbiAgLy8gcm91bmQgbW9udGhzXG4gIGlmIChkYXlzID4gMTUpIG1vbnRocysrXG4gIGxldCB2YWx1ZXMgPSBbXVxuICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgdmFsdWVzLnB1c2goeWVhcnMgKyAnICcgKyBQbHVyYWxpemUoJ3llYXInLCB5ZWFycykpXG4gIH1cbiAgaWYgKG1vbnRocyA+IDApIHtcbiAgICB2YWx1ZXMucHVzaChtb250aHMgKyAnICcgKyBQbHVyYWxpemUoJ21vbnRoJywgbW9udGhzKSlcbiAgfVxuICBpZiAoZGF5cyA+IDApIHtcbiAgICAvLyB2YWx1ZXMucHVzaChkYXlzICsgXCIgXCIgKyBQbHVyYWxpemUoXCJkYXlcIiwgZGF5cykpO1xuICB9XG4gIHJldHVybiB2YWx1ZXMuam9pbignLCAnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChcbiAgICBmb3JtYXQoc3RhcnQpICtcbiAgICAn4oCTJyArXG4gICAgKCtlbmQgPT09ICtuZXcgRGF0ZSgpID8gJ25vdycgOiBmb3JtYXQoZW5kKSkgK1xuICAgICcswqAnICtcbiAgICB0aW1lU3BlbnQoc3RhcnQsIGVuZClcbiAgKVxufVxuXG5sZXQgbGlua3MgPSBbXG4gIFtcbiAgICAnaHR0cHM6Ly9jb25zdHJhaW50LnN5c3RlbXMnLFxuICAgICdBbiBvbmdvaW5nIHByb2plY3Qgd2hlcmUgSSBkZXNpZ24gYW5kIGNvZGUgZXhwZXJpbWVudGFsIHdlYi1iYXNlZCBjcmVhdGl2ZSB0b29scy4nLFxuICBdLFxuICBbXG4gICAgJ2h0dHBzOi8vYWN0aXZlbGVhcm5lci5mYXN0Zm9yd2FyZGxhYnMuY29tJyxcbiAgICAnQSB2aXN1YWxpemF0aW9uIG9mIGhvdyB5b3UgY2FuIHVzZSBhY3RpdmUgbGVhcm5pbmcgdG8gc2VsZWN0IHRyYWluaW5nIGV4YW1wbGVzIHRvIGxhYmVsLiBJIHVzZWQgdGhyZWUuanMgdG8gcmVuZGVyIHRoZSBwb2ludHMgYW5kIGFuaW1hdGUgdGhlIHJlc3VsdHMgb2YgZWFjaCB0cmFpbmluZyBzdGVwLicsXG4gIF0sXG4gIFtcbiAgICAnaHR0cHM6Ly90dXJib2Zhbi5mYXN0Zm9yd2FyZGxhYnMuY29tLycsXG4gICAgJ1R1cmJvZmFuIFR5Y29vbiBpbGx1c3RyYXRlcyB0aGUgc3RyZW5ndGhzIG9mIGZlZGVyYXRlZCBsZWFybmluZyBieSBsZXR0aW5nIHlvdSBjaG9vc2UgYSBtYWludGVuYW5jZSBzdHJhdGVneSBmb3IgeW91ciBmYWN0b3J5IG9mIHR1cmJvZmFucy4gSSBoYWQgYSBsb3Qgb2YgZnVuIGJ1aWxkaW5nIGEgZmFzdC1tb3ZpbmcgdHVyYm9mYW4gZGFzaGJvYXJkLicsXG4gIF0sXG4gIFsnaHR0cHM6Ly9mZWVkLmdyYW50Y3VzdGVyLmNvbScsICdXb3JrIGFuZCBpbnNwaXJhdGlvbiBpbiBwcm9ncmVzcy4nXSxcbiAgW1xuICAgICdodHRwczovL2Jsb2cuZmFzdGZvcndhcmRsYWJzLmNvbScsXG4gICAgJ1RoZSBDbG91ZGVyYSBGYXN0IEZvcndhcmQgTGFicyBibG9nLiBJIGJ1aWx0IGFuZCBtYWludGFpbiB0aGUgYmxvZyAoaW4gSHVnbyEpIGFuZCBhbHNvIGRvIGEgbG90IG9mIHRoZSBkZXNpZ24gd29yayB5b3Ugc2VlIG9uIGl0LicsXG4gIF0sXG4gIFsnaHR0cHM6Ly9ncmFudGN1c3Rlci5jb20nLCAnTXkgaW5kZXggcGFnZSwgZmVhdHVyaW5nIGV2ZW4gbW9yZSBsaW5rcy4nXSxcbl1cblxubGV0IGRlc2NyaXB0aW9uID1cbiAgJ0Rlc2lnbmVyIGFuZCBmcm9udC1lbmQgZGV2ZWxvcGVyIGludGVyZXN0ZWQgaW4gcHJvY2VkdXJhbCBnZW5lcmF0aW9uLCBkYXRhIHZpc3VhbGl6YXRpb24sIHByb2R1Y3QgZGVzaWduIGFuZCByZXRoaW5raW5nIHRoaW5ncyBmcm9tIHNjcmF0Y2guJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIHJldHVybiB7IHRlc3Q6IG51bGwgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgbGF5b3V0OiAnd2ViJyxcbiAgICAgIHJlbmRlcl9pbmZvOiBudWxsLFxuICAgICAgb3JpZ2luOiBudWxsLFxuICAgIH1cbiAgICB0aGlzLmxpbmsgPSB0aGlzLmxpbmsuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0U2l6ZSA9IF8uZGVib3VuY2UodGhpcy5zZXRTaXplLmJpbmQodGhpcyksIDEwMClcbiAgICB0aGlzLnNldExheW91dCA9IHRoaXMuc2V0TGF5b3V0LmJpbmQodGhpcylcbiAgfVxuXG4gIHNldFNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRTaXplKVxuICAgIGxldCByZW5kZXJfaW5mbyA9IEJvd3Nlci5nZXRQYXJzZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLnBhcnNlKClcbiAgICAgIC5wYXJzZWRSZXN1bHRcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyX2luZm8sIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFNpemUpXG4gIH1cblxuICBzZXRMYXlvdXQobGF5b3V0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxheW91dDogbGF5b3V0IH0pXG4gIH1cblxuICBsaW5rKGhyZWYpIHtcbiAgICByZXR1cm4gPGEgaHJlZj17aHJlZn0+e2hyZWZ9PC9hPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGxvYWRlZCwgd2lkdGgsIGhlaWdodCwgbGF5b3V0LCByZW5kZXJfaW5mbywgb3JpZ2luIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGZvbnRfc2l6ZSA9IDE2XG4gICAgbGV0IGxpbmVfaGVpZ2h0ID0gMS41XG4gICAgbGV0IGdyZW0gPSBmb250X3NpemUgKiBsaW5lX2hlaWdodFxuXG4gICAgbGV0IGNvbHVtbl90YXJnZXQgPSBncmVtICogMTRcbiAgICBsZXQgY29sdW1ucyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggLyBjb2x1bW5fdGFyZ2V0KSlcbiAgICBsZXQgY29sdW1uX3dpZHRoID0gd2lkdGggLyBjb2x1bW5zXG4gICAgbGV0IG1haW5fd2lkdGggPSBNYXRoLm1pbihjb2x1bW5zLCAyKSAqIGNvbHVtbl93aWR0aFxuICAgIGxldCBtYWluX21hcmdpbiA9XG4gICAgICBNYXRoLmZsb29yKChjb2x1bW5zIC0gTWF0aC5taW4oY29sdW1ucywgMikpIC8gMikgKiBjb2x1bW5fd2lkdGhcblxuICAgIGlmIChsYXlvdXQgPT09ICdwcmludCcpIHtcbiAgICAgIHdpZHRoID0gbnVsbFxuICAgICAgaGVpZ2h0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh3aWR0aCA9PT0gbnVsbCkge1xuICAgICAgbWFpbl93aWR0aCA9ICdhdXRvJ1xuICAgICAgbWFpbl9tYXJnaW4gPSAwXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZWZlZmVmXCIgLz5cbiAgICAgICAgICA8dGl0bGU+R3JhbnQgQ3VzdGVyIOKGkiBSw6lzdW3DqTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgdHlwZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiR3JhbnQgQ3VzdGVyIOKGkiBSw6lzdW3DqVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly9yZXN1bWUuZ3JhbnRjdXN0ZXIuY29tXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICAgIDxzdHlsZT57YC5qcy1uby1mbGFzaCB7IGRpc3BsYXk6IG5vbmUgfWB9PC9zdHlsZT5cbiAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICA8c3R5bGU+e2AuanMtbm8tZmxhc2ggeyBkaXNwbGF5OiBibG9jayB9YH08L3N0eWxlPlxuICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImpzLW5vLWZsYXNoXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBsb2FkZWQgPyAnYmxvY2snIDogbnVsbCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBncmVtIC8gMiB9fT5cbiAgICAgICAgICAgIDxkaXY+R3JhbnQgQ3VzdGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkRlc2lnbuKAk0NvZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWluSGVpZ2h0OiBncmVtIH19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmludC1oaWRlXCI+XG4gICAgICAgICAgICAgICAge3dpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBgJHt3aWR0aH14JHtoZWlnaHR9YFxuICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+UsOpc3Vtw6k8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBtYWluX3dpZHRoLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogbWFpbl9tYXJnaW4sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+R3JhbnQgQ3VzdGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PldvcmsgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSAqIDEgfX0+XG4gICAgICAgICAgICAgIDxkaXY+RGVzaWduZXLigJNkZXZlbG9wZXIsIENsb3VkZXJhIEZhc3QgRm9yd2FyZCBMYWJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxNCwgNywgNyksIG5ldyBEYXRlKCkpfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIHRoZSBpbnRlcmZhY2VzIGZvciBuaW5lIHByb2R1Y3QgcHJvdG90eXBlc1xuICAgICAgICAgICAgICAgICAgZGVtb25zdHJhdGluZyB0aGUgcG9zc2liaWxpdGllcyBvZiBlbWVyZ2luZyB0ZWNobm9sb2dpZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRGVzaWduZWQgdGhlIEZhc3QgRm9yd2FyZCBMYWJzIGJyYW5kIGFuZCBzdXJyb3VuZGluZyBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyBuaW5lIHByaW50ZWQgcmVzZWFyY2ggcmVwb3J0cywgdGhlIHdlYnNpdGUsIHRoZVxuICAgICAgICAgICAgICAgICAgYmxvZywgYW5kIGludGVybmFsIHRvb2xzLiBQb3N0LUNsb3VkZXJhIGFjcXVpc2l0aW9uIChpbiAyMDE3KVxuICAgICAgICAgICAgICAgICAgSSd2ZSBiZWVuIHdvcmtpbmcgdG8gaW50ZWdyYXRlIHRoYXQgYnJhbmQgaW50byB0aGUgbGFyZ2VyXG4gICAgICAgICAgICAgICAgICBDbG91ZGVyYSBicmFuZCBzeXN0ZW0uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTWFuYWdlZCB0d28gcHJvamVjdHMgYnkgRkZMIGludGVybnMsIHdoZXJlIHRoZXkgc2NvcGVkLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlZCBhbmQgcmVsZWFzZWQgdGhlaXIgb3duIHByb3RvdHlwZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTZGV2ZWxvcGVyLCBCZXRhd29ya3M8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0VGltZShuZXcgRGF0ZSgyMDEyLCA2LCAxNSksIG5ldyBEYXRlKDIwMTQsIDcsIDI4KSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgY29kZWQgdGhlIGludGVyZmFjZXMgZm9yIGVhcmx5LXN0YWdlICh1bmRlclxuICAgICAgICAgICAgICAgIGZvdXItcGVyc29uKSBzdGFydC11cHMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGdyZW0gKiAxIH19PlxuICAgICAgICAgICAgICA8ZGl2PkRlc2lnbmVy4oCTZGV2ZWxvcGVyLCBCYW50ZXJzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUobmV3IERhdGUoMjAxMSwgMTEsIDEpLCBuZXcgRGF0ZSgyMDEyLCA2LCAxNSkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIGNvZGVkIGludGVyZmFjZXMgZm9yIGEgc3RhcnQtdXAgZm9jdXNlZCBvblxuICAgICAgICAgICAgICAgIGNhcHR1cmluZyBtZW1vcmFibGUgY29udmVyc2F0aW9ucy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogZ3JlbSB9fT5cbiAgICAgICAgICAgICAgPGRpdj5Db2RlIGFuZCBzb2Z0d2FyZSBleHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICAgIDxwPkNvZGU6IEphdmFzY3JpcHQsIFJlYWN0LCBEMy5qcywgdGhyZWUuanMsIEhUTUwsIENTUy48L3A+XG4gICAgICAgICAgICAgIDxwPlNvZnR3YXJlOiBGaWdtYSwgUGhvdG9zaG9wLCBJbGx1c3RyYXRvciwgSW5EZXNpZ24uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogZ3JlbSwgbWFyZ2luVG9wOiBncmVtIH19PlxuICAgICAgICAgICAgICA8ZGl2PkxpbmtzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmsobFswXSl9IOKAk8Kge2xbMV19XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgIDxkaXY+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICA8cD5FbWFpbDogZ3JhbnRjdXN0ZXJAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUd2l0dGVyOnsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vR3JhbnRDdXN0ZXJcIj5AR3JhbnRDdXN0ZXI8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+XG4gICAgICAgICAgICBHZW5lcmF0ZWRcbiAgICAgICAgICAgIHtvcmlnaW4gIT09IG51bGwgPyAoXG4gICAgICAgICAgICAgIDxzcGFuPiBmcm9tIHt0aGlzLmxpbmsob3JpZ2luKX08L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbH0gb24ge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgIHtyZW5kZXJfaW5mbyAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IGAgd2l0aCAke3JlbmRlcl9pbmZvLmJyb3dzZXIubmFtZX0gJHtyZW5kZXJfaW5mby5icm93c2VyLnZlcnNpb259IG9uICR7cmVuZGVyX2luZm8ub3MubmFtZX1gXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAcGFnZSB7XG4gICAgICAgICAgICBtYXJnaW46IGNhbGMoMC43NWluIC0gJHtncmVtfXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpbnQtaGlkZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAke2ZvbnRfc2l6ZX1weDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVfaGVpZ2h0fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxuICAgICAgICAgICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLFxuICAgICAgICAgICAgICAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogJHtncmVtfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/grant/dev/resume/pages/index.js */"),
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
//# sourceMappingURL=index.js.9667b69c64ffef3bf5b5.hot-update.js.map