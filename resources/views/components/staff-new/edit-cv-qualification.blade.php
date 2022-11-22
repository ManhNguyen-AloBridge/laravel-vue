<div class="form-table">
    <h3 class="card__title">
        {{ trans_page('staff/edit-cv.title_qualification') }}
    </h3>
    <table class="table --hover fixed">
        <thead>
            <tr>
                <th class="table__border --right --w-14 --white">
                    {{ trans_page('staff/edit-cv.qualification_pick_date') }}</th>
                <th class="table__border --right --white"> {{ trans_page('staff/edit-cv.qualification_content') }}
                </th>
                <th class="table__border --right col-delete"></th>
            </tr>
        </thead>
        <tbody class="form-table-qualification">
            @foreach ($collection as $key => $item)
                <tr class="form-table__row row-qualification">
                    <x-staff-new.edit-cv-table-input class="date-picker"
                        value="{{ isset($item['pivot']['option_at']) ? date('Y年m月', strtotime($item['pivot']['option_at'])) : '' }}"
                        name="resume[qualifications][{{ $key }}][option_at]" date-format="Y年MM月"
                        autocomplete="off" placeholder="{{ trans_page('staff/cv.placeholder.qualifications.option_at') }}">
                        <label
                            class="label-date-picker">{{ isset($item['pivot']['option_at']) ? date('Y年m月', strtotime($item['pivot']['option_at'])) : '' }}</label>
                    </x-staff-new.edit-cv-table-input>

                    <x-shared-new.tag-select-table :class="'select-qualification'" name="resume[qualifications][{{ $key }}][id]"
                        :collection="$companyQualifications" selected="{{ $item['id'] }}" selectMessage="{{ attrs('qualification.select_qualification') }}"/>
                    <td class="text-center -delete --p-3 col-delete">
                        <button type="button"
                            class="btn btn-delete form-control btn-delete-qualification"><span>×</span></button>
                    </td>
                </tr>
            @endforeach
            <tr class="after-row-qualification" type="hidden">
            </tr>
        </tbody>
    </table>

    <div class="form-table__button-group mt-3">
        <button type="button" class=" btn btn-add-qualification --outline-primary-text --sm"
			data-button-type="show-add-button" data-index="{{ $key ?? 0 }}">
            <i class="fas fa-plus"></i>
            <span>{{ trans_page('setting/index.add_qualification') }}</span>
        </button>
    </div>
</div>
