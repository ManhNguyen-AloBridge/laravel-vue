<x-shared-new.modal id="download-cv-modal">
	<div class="modal-header">
		<h5 class="modal-title text text-xl" id="download-cv-modal-label">@trans_page('staff/index.btn_download')
		</h5>
	</div>
	<form id="form-download-cv" class="d-inline-block"
		action="{{ route('staffs.cv.download', ['staff' => $user->id]) }}">
		<div class="modal-body">
			<x-shared-new.form-group wrapper-class="col-md-12 mb-4" :title="@attrs('user.name_list')">
				<div id="list-name-staff-download"></div>
				<p class="m-0">{{ $user->name }}</p>
			</x-shared-new.form-group>
			<div class="" id="list-input-name-download"></div>
			<x-shared-new.check-box class="is-name-hidden-download u-ml-0" :title="@trans_page('setting/resume.hidden_name')"
				id="is-hidden-name-download" name="is_name_hidden_downloading" value="1">
			</x-shared-new.check-box>
		</div>
		<div class="modal-footer">
			<a class="link text-lg" data-bs-dismiss="modal">{{ attrs('shared.cancel') }}</a>
			<button type="submit" class="btn btn-primary p-1" data-bs-dismiss="modal">@trans_page('staff/index.btn_download-modal')</button>
		</div>
	</form>
</x-shared-new.modal>
