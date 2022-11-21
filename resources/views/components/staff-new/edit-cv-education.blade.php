<div class="form-table">
	<div class="nowrap">
		<div  class="card__title child">{{ trans_page('staff/cv.title_education') }}</div>
		<div class="child text-md content-education">{{ trans_page('staff/cv.content_title_education') }}</div>
	</div>
    <table class="table --hover">
        <thead>
            <tr>
                <th class="table__border --right --w-14">
                    {{ trans_page('staff/cv.date') }}</th>
                <th class="table__border --right ">
                    {{ trans_page('staff/cv.title_education') }}</th>
            </tr>
        </thead>
        <tbody class="form-table-education">
            @foreach ($collection as $key => $item)
                <tr class="form-table__row row-education">
                    <input type="hidden" name="educations[{{ $key }}][id]" value="{{ $item['id'] ?? '' }}">
                    <x-staff-new.edit-cv-table-input class="date-picker"
                        value="{{ isset($item['end_date']) ? date('Y年m月', strtotime($item['end_date'])) : '' }}"
                        name="educations[{{ $key }}][end_date]" id="" type="text" date-format="Y年MM月"
                        autocomplete="off" placeholder="{{ trans_page('staff/cv.placeholder.education.end_date') }}">
						<label class="label-date-picker">{{ isset($item['end_date']) ? date('Y年m月', strtotime($item['end_date'])) : '' }}</label>
					</x-staff-new.edit-cv-table-input>
                    <x-staff-new.edit-cv-table-input value="{{ $item['name'] ?? '' }}"
                        name="educations[{{ $key }}][name]" placeholder="{{ trans_page('staff/cv.placeholder.education.name') }}">
                        <button type="button"
                            class="btn btn-delete form-control btn-delete-education py-1 pe-0"><span>×</span></button>
                    </x-staff-new.edit-cv-table-input>
                </tr>
            @endforeach
            <tr class="after-row-education" type="hidden">
            </tr>
        </tbody>
    </table>

    <div class="form-table__button-group mt-3">
        <button type="button" class="btn btn-add-education --outline-primary-text --sm"
            data-index="{{ $key ?? 0 }}">
            <i class="fas fa-plus"></i>
            <span>{{ trans_page('staff/edit-cv.add_education') }}</span>
        </button>
    </div>
</div>
