export default class ProcessController {
	self;
	currentStep = 0;
	constructor(self) {
		this.self = self;
		this.steps = self.children('.process-step');
	}
	checkAbleStep(stepNumber) {
		return (
			this.currentStep > stepNumber &&
			this.currentStep != this.steps.length - 1
		);
	}
	backToStep(stepNumber) {
		if (this.currentStep == stepNumber) return;
		const previousStep = this.currentStep;
		this.currentStep = stepNumber;

		const inprocessSteps = this.steps.filter(function (index, step) {
			if (previousStep >= index && index != 0) {
				$(step).attr('data-step-count', previousStep - index + 1);
			}
			return index <= stepNumber;
		});
		this.steps.removeClass('in-process');
		inprocessSteps.addClass('in-process');
	}
	moveToNextStep() {
		if (this.currentStep >= this.steps.length) {
			return;
		}

		this.currentStep += 1;
		let currentStep = this.steps[this.currentStep];
		$(currentStep).addClass('in-process');

		if (this.currentStep == this.steps.length - 1) {
			this.disablePreviousStep();
		}
	}

	disablePreviousStep() {
		this.self.addClass('--done');
	}
	setStepsEvent() {
		const process = this;
		this.steps.each(function () {
			process.setStepEvent($(this));
		});
	}
	setStepEvent(step, callback = null) {
		const process = this;
		let processNumber = step.children('.process-step__number');
		let stepIndex = parseInt(step.attr('data-page'));
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
}
