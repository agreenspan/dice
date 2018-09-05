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

    _defineProperty(this, "changeStat", value => {
      this.setState({
        statRank: value
      });
    });

    _defineProperty(this, "changeSkill", value => {
      this.setState({
        skillRank: value
      });
    });

    _defineProperty(this, "handleBlackFailWeightChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.black.failWeight = value;
        return prev;
      });
    });

    _defineProperty(this, "handleBlackFailRangeChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.black.failRange = value;
        return prev;
      });
    });

    _defineProperty(this, "handleWhiteFailWeightChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.white.failWeight = value;
        return prev;
      });
    });

    _defineProperty(this, "handleWhiteFailRangeChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.white.failRange = value;
        return prev;
      });
    });

    _defineProperty(this, "handleBlackSuccessWeightChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.black.successWeight = value;
        return prev;
      });
    });

    _defineProperty(this, "handleBlackSuccessRangeChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.black.successRange = value;
        return prev;
      });
    });

    _defineProperty(this, "handleWhiteSuccessWeightChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.white.successWeight = value;
        return prev;
      });
    });

    _defineProperty(this, "handleWhiteSuccessRangeChange", event => {
      const value = event.target.value;
      this.setState(prev => {
        prev.white.successRange = value;
        return prev;
      });
    });

    _defineProperty(this, "computeOutcomes", () => {
      const rolls = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d1 => {
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d2 => {
          return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d3 => {
            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d4 => {
              return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d5 => {
                let whitePool;
                let blackPool;

                switch (this.state.statRank) {
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

                return blackOutcome + whiteOutcome;
              });
            });
          });
        });
      });

      const flattened = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.flattenDeep(rolls);

      const reduced = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(flattened, (outcomes, roll) => {
        if (outcomes.hasOwnProperty(roll)) {
          outcomes[roll] += 1;
        } else {
          outcomes[roll] = 1;
        }

        return outcomes;
      }, {});

      const mapped = [];

      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(reduced, (value, key) => {
        mapped.push({
          outcome: parseInt(key, 10),
          chance: value / 77.76
        });
      });

      const sorted = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(mapped, 'outcome', 'desc');

      return sorted;
    });

    this.state = {
      statRank: 0,
      skillRank: 0,
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
    const outcomes = this.computeOutcomes();

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

    const statButtons = [0, 1, 2, 3, 4, 5].map(i => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: this.state.statRank == i ? 'primary' : 'default',
      onClick: () => this.changeStat(i),
      key: i
    }, i));
    const skillButtons = [0, 1, 2, 3, 4, 5].map(i => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: this.state.skillRank == i ? 'primary' : 'default',
      onClick: () => this.changeSkill(i),
      key: i
    }, i));
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Stat Rank:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", this.state.statRank)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, statButtons), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12",
      style: {
        marginBottom: 20
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Black:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "failWeight",
      value: this.state.black.failWeight,
      onChange: this.handleBlackFailWeightChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "failRange",
      value: this.state.black.failRange,
      onChange: this.handleBlackFailRangeChange,
      min: 1,
      max: 3
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "successWeight",
      value: this.state.black.successWeight,
      onChange: this.handleBlackSuccessWeightChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "successRange",
      value: this.state.black.successRange,
      onChange: this.handleBlackSuccessRangeChange,
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
      name: "failWeight",
      value: this.state.white.failWeight,
      onChange: this.handleWhiteFailWeightChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Fail Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "failWeight",
      value: this.state.white.failRange,
      onChange: this.handleWhiteFailRangeChange,
      min: 1,
      max: 3
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Weight:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "successWeight",
      value: this.state.white.successWeight,
      onChange: this.handleWhiteSuccessWeightChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, "Success Range:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "successRange",
      value: this.state.white.successRange,
      onChange: this.handleWhiteSuccessRangeChange,
      min: 1,
      max: 3
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "9"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-striped"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "# of Success"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "% of rolls"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, displayOutcomes))))))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.b7729f04bb50955362dc.hot-update.js.map