$(document).ready(function () {
	const templateId = $('.input-template').attr('value');

	$(`#checked-${templateId}`).attr('hidden', false);

	$('.img-template').on('click', function () {
		$('#modal-success').modal('show');
		$('.img-template-modal').attr('src', $(this).attr('src'));
		$('.carousel-item.active').attr('value', $(this).attr('value'));
	});

	$('.btn-save').on('click', function () {
		const id = $('.carousel-item.active').attr('value');
		$('.input-template').attr('value', id);
		$(`.img-template`).removeClass('--selected');
		$(`#img-template-${id}`).addClass('--selected');

		$(`.icon-check`).attr('hidden', true);
		$(`#checked-${id}`).attr('hidden', false);
	});

	$('.carousel').carousel({
		interval: false,
	});
});
