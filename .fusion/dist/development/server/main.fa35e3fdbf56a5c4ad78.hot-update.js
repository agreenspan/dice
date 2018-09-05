if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/agreenspan/Apps/dice/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/pages/home.jsx":
/*!****************************!*\
  !*** ./src/pages/home.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "handleChange", event => {
      this.setState(prev => {
        prev[event.target.name] = event.target.value;
        return prev;
      });
    });

    _defineProperty(this, "computeOutcomes", () => {
      const outcomeKeys = [];

      const outcomes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce([0, 1, 2, 3, 4, 5], (outcomeMap, statRank) => {
        const rolls = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d1 => {
          return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d2 => {
            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d3 => {
              return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d4 => {
                return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d5 => {
                  let whitePool;
                  let blackPool;

                  switch (statRank) {
                    case 0:
                      blackPool = [d1, d2, d3, d4, d5];
                      whitePool = [];
                      break;

                    case 1:
                      blackPool = [d1, d2, d3, d4];
                      whitePool = [d5];
                      break;

                    case 2:
                      blackPool = [d1, d2, d3];
                      whitePool = [d4, d5];
                      break;

                    case 3:
                      blackPool = [d1, d2];
                      whitePool = [d3, d4, d5];
                      break;

                    case 4:
                      blackPool = [d1];
                      whitePool = [d2, d3, d4, d5];
                      break;

                    case 5:
                      blackPool = [];
                      whitePool = [d1, d2, d3, d4, d5];
                      break;
                  }

                  const whiteOutcome = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(whitePool, (sum, die) => {
                    if (die <= this.state.white.failRange) {
                      sum -= parseInt(this.state.white.failWeight);
                    } else if (die >= 7 - this.state.white.successRange) {
                      sum += parseInt(this.state.white.successWeight);
                    }

                    return sum;
                  }, 0);

                  const blackOutcome = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(blackPool, (sum, die) => {
                    if (die <= this.state.black.failRange) {
                      sum -= parseInt(this.state.black.failWeight);
                    } else if (die >= 7 - this.state.black.successRange) {
                      sum += parseInt(this.state.black.successWeight);
                    }

                    return sum;
                  }, 0);

                  const total = blackOutcome + whiteOutcome;

                  if (!outcomeKeys.includes(total)) {
                    outcomeKeys.push(total);
                  }

                  return total;
                });
              });
            });
          });
        });

        outcomeMap[statRank] = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.flattenDeep(rolls), (sorting, roll) => {
          if (sorting.hasOwnProperty(roll)) {
            sorting[roll] += 1;
          } else {
            sorting[roll] = 1;
          }

          return sorting;
        }, {});
        return outcomeMap;
      }, {}); // outcomeKeys = order 


      return {
        outcomeKeys,
        outcomes
      };
    });

    this.state = {
      black: {
        failWeight: 1,
        failRange: 1,
        successWeight: 1,
        successRange: 1
      },
      white: {
        failWeight: 1,
        failRange: 1,
        successWeight: 2,
        successRange: 1
      }
    };
  }

  render() {
    const {
      outcomeKeys,
      outcomes
    } = this.computeOutcomes();

    const totalSuccess = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(outcomes, (total, p) => {
      if (p.outcome > 0) {
        total += p.chance;
      }

      return total;
    }, 0);

    const totalFailure = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(outcomes, (total, p) => {
      if (p.outcome < 0) {
        total += p.chance;
      }

      return total;
    }, 0);

    const displayOutcomes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(outcomes, (o, i) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, o.outcome), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, o.chance.toFixed(2), "%"));
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
      integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
      crossOrigin: "anonymous"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        paddingTop: 20
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Black:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.failWeight",
      value: this.state.black.failWeight,
      onChange: this.handleChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.failRange",
      value: this.state.black.failRange,
      onChange: this.handleChange,
      min: 1,
      max: 3
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.successWeight",
      value: this.state.black.successWeight,
      onChange: this.handleChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.successRange",
      value: this.state.black.successRange,
      onChange: this.handleChange,
      min: 1,
      max: 3
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12",
      style: {
        marginBottom: 20
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "White: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.failWeight",
      value: this.state.white.failWeight,
      onChange: this.handleChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.failWeight",
      value: this.state.white.failRange,
      onChange: this.handleChange,
      min: 1,
      max: 3
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.successWeight",
      value: this.state.white.successWeight,
      onChange: this.handleChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.successRange",
      value: this.state.white.successRange,
      onChange: this.handleChange,
      min: 1,
      max: 3
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "9"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-striped"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      colSpan: 6
    }, "Stat Rank")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Outcome"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "5"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, displayOutcomes))))))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.fa35e3fdbf56a5c4ad78.hot-update.js.map