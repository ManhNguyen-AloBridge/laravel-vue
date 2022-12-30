/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./resources/assets/js/components/process.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProcessController)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ProcessController = /*#__PURE__*/function () {
  function ProcessController(self) {
    _classCallCheck(this, ProcessController);
    _defineProperty(this, "self", void 0);
    _defineProperty(this, "currentStep", 0);
    this.self = self;
    this.steps = self.children('.process-step');
  }
  _createClass(ProcessController, [{
    key: "checkAbleStep",
    value: function checkAbleStep(stepNumber) {
      return this.currentStep > stepNumber && this.currentStep != this.steps.length - 1;
    }
  }, {
    key: "backToStep",
    value: function backToStep(stepNumber) {
      if (this.currentStep == stepNumber) return;
      var previousStep = this.currentStep;
      this.currentStep = stepNumber;
      var inprocessSteps = this.steps.filter(function (index, step) {
        if (previousStep >= index && index != 0) {
          $(step).attr('data-step-count', previousStep - index + 1);
        }
        return index <= stepNumber;
      });
      this.steps.removeClass('in-process');
      inprocessSteps.addClass('in-process');
    }
  }, {
    key: "moveToNextStep",
    value: function moveToNextStep() {
      if (this.currentStep >= this.steps.length) {
        return;
      }
      this.currentStep += 1;
      var currentStep = this.steps[this.currentStep];
      $(currentStep).addClass('in-process');
      if (this.currentStep == this.steps.length - 1) {
        this.disablePreviousStep();
      }
    }
  }, {
    key: "disablePreviousStep",
    value: function disablePreviousStep() {
      this.self.addClass('--done');
    }
  }, {
    key: "setStepsEvent",
    value: function setStepsEvent() {
      var process = this;
      this.steps.each(function () {
        process.setStepEvent($(this));
      });
    }
  }, {
    key: "setStepEvent",
    value: function setStepEvent(step) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var process = this;
      var processNumber = step.children('.process-step__number');
      var stepIndex = parseInt(step.attr('data-page'));
      processNumber.click(function () {
        if (process.checkAbleStep(stepIndex) == false) {
          return false;
        }
        if (callback instanceof Function) {
          callback();
        }
        process.backToStep(stepIndex);
      });
    }
  }]);
  return ProcessController;
}();

/******/ })()
;