import modalDelete from './modal-delete.js';

class FormTableSelect {
	self;
	model;
	modal;
	form;
	btnShowCreate;
	btnCreate;
	btnUpdate;
	btnCancel;
	addRow;
	btnCancelOfAddRow;
	editRows;
	prefixDeleteMessage = '';
	fieldDeleteMessage = 'name';
	constructor(self, modal) {
		this.self = self;
		this.modal = modal;
		this.model = this.self.attr('data-model');
		this.form = this.self.find('#form-' + this.model);
		this.btnShowCreate = self.find(
			'.form-table__button-group button[data-button-type="show-add-button"]'
		);
		this.btnCreate = this.self.find(
			'.form-table__button-group button[data-button-type="add"]'
		);
		this.btnUpdate = this.self.find(
			'.form-table__button-group button[data-button-type="update"]'
		);
		this.btnCancel = this.self.find(
			'.form-table__button-group button[data-button-type="cancel"]'
		);

		this.addRow = this.self.find('.form-table__row[data-form="add-new"]');
		this.btnCancelOfAddRow = this.addRow.find('button');
		this.editRows = this.self.find(
			'.form-table__row:not([data-form="add-new"])'
		);

		this.getDefaultDisplay();

		this.addButtonsEvent();
		this.addEditRowsEvent();
		this.addRowSelectEvent();
		this.modal.btnContinue.click(
			function () {
				this.submitFormDelete();
			}.bind(this)
		);
	}

	cancel() {
		return function () {
			let oldFocus = this.getOldFocus();
			this.addRow.find('input').val('');
			this.addRow.find('select').val('');

			if (oldFocus !== null) {
				this.resetSelectItemOption();
				this.removeFocus(oldFocus.inputs, oldFocus.select);
				this.backRowToOldValue(oldFocus.inputs, oldFocus.select);
			}

			this.removeValidateError();
			this.cancelAction();
		}.bind(this);
	}

	removeValidateError() {
		this.self.find('.validation-error')?.each(function () {
			$(this).remove();
		});
	}

	addButtonsEvent() {
		this.btnShowCreate.click(this.showAdd());
		this.btnCancel.click(this.cancel());
		this.btnCancelOfAddRow.click(this.cancel());
		this.btnCreate.click(
			function () {
				let createUrl = this.btnCreate.attr('data-route-handle');
				this.form.attr('action', createUrl);

				this.submitFormCreate();
			}.bind(this)
		);

		this.btnUpdate.click(this.submitFormUpdate.bind(this));
	}
	addEditRowsEvent() {
		const formTable = this;
		this.editRows.each(function () {
			const btnEdit = $(this).find('button[data-control-name="edit"]');
			const btnDelete = $(this).find(
				'button[data-control-name="delete"]'
			);
			const rowInputs = $(this).find('input');
			const rowSelect = $(this).find('select');
			const itemId = $(this).attr('data-item-id');

			rowSelect.change(function (){
				const id = $(this).val();
				formTable.updateSelected(rowSelect, id);
			});

			btnEdit.click(function () {
				let updateUrl = btnEdit.attr('data-route-handle');

				formTable.showUpdate();
				formTable.focusInput(rowInputs, rowSelect);
				formTable.resetSelectItemOption();
				formTable.showSelectItemOption(rowSelect);

				formTable.btnCancel.attr('data-edit-row-id', itemId);

				formTable.form.attr('data-item-id', itemId);
				formTable.form.attr('action', updateUrl);
			});
			btnDelete.click(function () {
				let deleteUrl = btnDelete.attr('data-route-handle');
				let deleteText = rowInputs
					.filter('[name="skill[' + formTable.fieldDeleteMessage + ']"]')
					.val();

				formTable.form.attr('action', deleteUrl);
				formTable.modal.fillTextInDeleteMessage(deleteText);
			});
		});
	}
	addRowSelectEvent() {
		const formTable = this;
		const arrRowSelect = this.addRow.find('select');
		arrRowSelect.change(function (){
			const id = $(this).val();
			formTable.updateSelected(arrRowSelect, id);
		});
	}
	showAdd() {
		return function () {
			this.btnShowCreate.hide();
			this.btnCreate.show();
			this.btnCancel.show();
			this.addRow.show();

			this.resetSelectItemOption();

			const input = this.addRow.find('input').first();
			const inputLength = input.val().length;
			input.first().focus();
			input.first()[0].setSelectionRange(inputLength, inputLength);
		}.bind(this);
	}
	showUpdate() {
		this.btnShowCreate.hide();
		this.btnCreate.hide();
		this.btnUpdate.show();
		this.btnCancel.show();
		this.addRow.hide();
	}
	cancelAction() {
		this.btnCancel.hide();
		this.btnCreate.hide();
		this.btnUpdate.hide();
		this.btnShowCreate.show();
		this.addRow.hide();
	}
	focusInput(inputs, select) {
		let oldFocus = this.getOldFocus() !== null ? this.getOldFocus() : null;
		if (oldFocus !== null) {
			this.resetSelectItemOption();
			this.removeFocus(oldFocus.inputs, oldFocus.select);
			this.backRowToOldValue(oldFocus.inputs, oldFocus.select);
		}

		inputs.closest('.form-table__row').addClass('--edit');
		inputs.prop('disabled', false);
		select.prop('disabled', false);

		let inputLength = inputs.first().val().length;
		inputs.first().focus();
		inputs.first()[0].setSelectionRange(inputLength, inputLength);
	}
	showSelectItemOption(select) {
		const selectItemOption = select.find('option').first();
		selectItemOption.text(i18next.t('select_option.default'));
	}
	resetSelectItemOption() {
		this.self.find('select.form-table__select').each(function () {
			$(this).find('option').first().text('');
		});
		this.addRow.find('select.form-table__select option').first().text(i18next.t('select_option.default'));
	}
	removeFocus(inputs, select) {
		this.addRow.hide();
		inputs.prop('disabled', true);
		select.prop('disabled', true);
		inputs.closest('.form-table__row').removeClass('--edit');
	}
	submitFormCreate() {
		this.updateFormMethod('POST');

		let inputs = this.addRow.find('input').clone();
		let select = this.addRow.find('select').clone();

		inputs.attr('type', 'hidden');
		select.addClass('d-none');

		this.form.append(inputs);
		this.form.append(select);
		this.form.submit();
	}
	submitFormUpdate() {
		this.updateFormMethod('PUT');

		const itemId = this.form.attr('data-item-id');
		const inputsOfFocusRow = this.getEditRow(itemId).find('input');
		const selectOfFocusRow = this.getEditRow(itemId).find('select');

		const inputs = inputsOfFocusRow.clone();
		const select = selectOfFocusRow.clone();

		inputs.attr('type', 'hidden');
		select.addClass('d-none');

		this.form.append(inputs);
		this.form.append(select);
		this.form.submit();
	}
	submitFormDelete() {
		this.updateFormMethod('Delete');
		this.form.submit();
	}
	getEditRow(id) {
		return this.editRows.filter(function () {
			return $(this).attr('data-item-id') == id;
		});
	}
	getDefaultDisplay() {
		const editRow = this.editRows.filter(function (index, row) {
			return $(row).hasClass('--edit');
		});

		this.btnShowCreate.show();
		this.btnCreate.hide();
		this.btnUpdate.hide();
		this.btnCancel.hide();
		this.addRow.hide();

		if (this.form.parent().find('p').hasClass('validation-error')) {
			this.showAdd()();
		}

		if (editRow.length) {
			this.showUpdate();
			this.btnCancel.attr(
				'data-edit-row-id',
				$(editRow[0]).data('item-id')
			);
			return;
		}
	}
	getOldFocus() {
		const id = this.btnCancel.attr('data-edit-row-id') ?? null;
		if (id == null) {
			return null;
		}
		const oldFocusRow = this.getEditRow(id);
		const inputOfRow = oldFocusRow.find('input');
		const selectOfRow = oldFocusRow.find('select');
		const btnEditOfRow = oldFocusRow.find(
			'.form-table__row__button-group button[data-control-name="edit"]'
		);
		return {
			row: oldFocusRow,
			inputs: inputOfRow,
			select: selectOfRow,
			btnEdit: btnEditOfRow,
		};
	}
	backRowToOldValue(inputs, select) {
		inputs.each(function () {
			const oldValue = $(this).attr('data-origin-value');
			$(this).val(oldValue);
		});

		const oldSelectValue = select.attr('data-origin-value');
		select.val(oldSelectValue);
	}
	updateFormMethod(method) {
		this.form.find('input[name="_method"]').val(method);
	}
	updateSelected(select, id) {
		select.find('option').each(function (){
			$(this).removeAttr('selected');
			if ($(this).attr('value') == id) {
				$(this).attr('selected', true);
			}
		});
	}
}

$('.card-form-table-select').each(function () {
	const formTableSelects = $(this).find('.form-table');
	const modalElement = $(this).find('.modal');
	const modal = new modalDelete(modalElement);
	new FormTableSelect(formTableSelects, modal);
});
