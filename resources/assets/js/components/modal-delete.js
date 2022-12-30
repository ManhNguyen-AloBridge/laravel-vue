const modalDelete = class {
	self;
	btnContinue;
	fillTextElements;
	constructor(self) {
		this.self = self;
		this.btnContinue = this.self.find('.modal-footer .btn.continue');
		this.fillTextElements = this.self.find(
			'.modal-body span.fill-text-position'
		);
	}
	fillTextInDeleteMessage(text) {
		this.fillTextElements.text(text);
	}
};
export default modalDelete;
