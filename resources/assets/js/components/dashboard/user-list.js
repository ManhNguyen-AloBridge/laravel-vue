const DATA_MODE = Object.freeze({
	SKILL: 'skill',
	QUALIFICATION: 'qualification',
});

const SORT_OPTIONS = Object.freeze({
	LEVEL: 1,
	QUALIFICATION_DATE: 2,
	SENIORITY: 3,
	ALPHA: 4,
});

export default class UserList {
	hostElement;
	sortOptionElement;
	listElement;
	data = [];
	sortType = SORT_OPTIONS.LEVEL;
	baseUrl = window.location.origin;
	linkPageElement;

	constructor() {
		this.hostElement = document.querySelector('.right-content');
		this.sortOptionElement = this.hostElement.querySelector(
			'.user-list__sort-options'
		);
		this.listElement = this.hostElement.querySelector('.user-list__list');
		this.linkPageElement = document.querySelector('#link-user');
		this.bindEvent();
	}

	bindEvent() {
		this.sortOptionElement.addEventListener(
			'change',
			function (e) {
				this.setSortType(e.target.value);
				this.update();
			}.bind(this)
		);
	}

	setData(key, data) {
		this.data = data;
		if (key === DATA_MODE.SKILL) {
			this.sortType = SORT_OPTIONS.LEVEL;
		} else if (key === DATA_MODE.QUALIFICATION) {
			this.sortType = SORT_OPTIONS.QUALIFICATION_DATE;
		}
	}

	setSortType(sortType) {
		if (sortType == this.sortType) {
			return;
		}

		this.sortType = Number.parseInt(sortType);
	}

	sortData() {
		switch (this.sortType) {
			case SORT_OPTIONS.LEVEL:
				this.data = this.data.sort((a, b) => {
					if (a.level > b.level) return -1;
					if (a.level < b.level) return 1;
					return 0;
				});
				break;
			case SORT_OPTIONS.QUALIFICATION_DATE:
				this.data = this.data.sort((a, b) => {
					if (!a.qualification_date) {
						if (!b.qualification_date) {
							return 0;
						} else {
							return 1;
						}
					} else {
						if (!b.qualification_date) {
							return -1;
						} else {
							if (a.qualification_date > b.qualification_date) return -1;
							if (a.qualification_date < b.qualification_date) return 1;
							return 0;
						}
					}
				});
				break;
			case SORT_OPTIONS.SENIORITY:
				this.data = this.data.sort((a, b) => {
					if (!a.joined_at) {
						if (!b.joined_at) {
							return 0;
						} else {
							return 1;
						}
					} else {
						if (!b.joined_at) {
							return -1;
						} else {
							if (a.joined_at > b.joined_at) return -1;
							if (a.joined_at < b.joined_at) return 1;
							return 0;
						}
					}
				});
				break;
			default:
				this.data = this.data.sort((a, b) => {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
					return 0;
				});
				break;
		}
	}

	update() {
		this.sortData();
		const listItem = this.data
			.map((item) => {
				return this.generateItemMarkup(item);
			})
			.join('');

		this.listElement.innerHTML = '';
		this.listElement.insertAdjacentHTML('afterbegin', listItem);
		this.show();
	}

	generateItemMarkup(item) {
		let itemContent = '';
		if (!!item.skill_name) {
			itemContent =
				`<p class="user-list__item-skill">
					<span>${_.escape(item.skill_name)}</span>
					<span>${_.escape(item.level_name)}</span>
				</p>`;
		} else if (!!item.qualification_name) {
			const qualificationGetMonth = this.formatDate(_.escape(item.qualification_date));
			itemContent =
				`<p class="user-list__item-qualification">
					<span>${_.escape(item.qualification_name)}</span>
					<span>${qualificationGetMonth}</span>
				</p>`;
		}

		return `<li class="user-list__item">
		<a class="user-list__item-link" href="${this.baseUrl}/staffs/${
			item.id
		}" target="_blank">
		<img class="user-list__item-avatar" src="${
			this.baseUrl
		}/assets/img/avatar-default.png"/>
		<div class="user-list__item-info">
			<p class="user-list__item-name">${_.escape(item.name)}</p>
			${itemContent}
		</div>
		</a>
	</li>`;
	}

	/**
	 * @param {String} yearMonthDay; ex.."2022-01-01"
	 * @returns yearMonth ex.."2022-01"
	 */
	formatDate(yearMonthDay) {
		if (!yearMonthDay) return '';
		return yearMonthDay.substring(0, yearMonthDay.length - 3);
	}

	hide() {
		this.hostElement.classList.remove('--show');
	}

	show() {
		this.hostElement.classList.add('--show');
	}

	setLinkPage(link) {
		this.linkPageElement.href = link;
	}
}
