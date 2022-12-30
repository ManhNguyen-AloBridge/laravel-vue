class Loading {
	hostElement;
	bounce;

	constructor() {
		this.hostElement = document.querySelector('#loading');
	}

	show() {
		this.hostElement.classList.add('--show');
	}

	hide(delay) {
		if (this.bounce) {
			clearTimeout(this.bounce);
		}

		this.bounce = setTimeout(
			() => {
				this.hostElement.classList.remove('--show');
			},
			delay === undefined ? delay : 500
		);
	}
}

export default new Loading();
