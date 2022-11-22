<div class="form-table">
    <h3 class="card__title">
        {{ trans_page('staff/edit-cv.title_skill') }}
    </h3>
    <table class="table --hover fixed">
        <thead>
            <tr>
                <th class="table__border --right --white"> {{ trans_page('staff/edit-cv.skill_category') }}</th>
                <th class="table__border --right --white">
                    {{ trans_page('staff/edit-cv.title_skill') }}</th>
                <th class="table__border --right --white"> {{ trans_page('staff/edit-cv.skill_level') }}</th>
                <th class="table__border --right --white col-delete"></th>
            </tr>
        </thead>

        <tbody class="form-table-skill">
			@php
				$isExistNullCategory = $companySkills?->contains(function ($item) {
					return $item['category_id'] === null;
				});
				$skillIdMap = $skills[0]['id'] !== '' ? $skills->map(function ($item) { return $item['id']; }) : [];
			@endphp
            @foreach ($skills as $key => $skill)
                <tr class="form-table__row row-skill">
                    <td class="table__border --right --p-3">
                        <div class="form-table__input-wrapper">
                            <select class="select-box --input-table select-skill-category" name="resume[skills][{{ $key }}][category_id]" required>
                                <option value="" disabled @selected(count($skillIdMap) === 0)>{{ attrs('skill.select_skill_category') }}</option>
                                @php $selectedCategory = null; @endphp
                                @foreach ($skillCategories as $item)
                                    @php if ($item->id == $skill['category_id'])  $selectedCategory = $item; @endphp
                                    <option value="{{ $item->id }}" @selected($item->id == $skill['category_id'] ?? '')>
                                        {{ $item->name ? attrs('skill.category.' . $item->name) : '' }}
                                    </option>
                                @endforeach
								@if ($isExistNullCategory)
									<option value="-1" exist-null-category
										@selected($skill['category_id'] === null)>{{ trans_page('staff/edit-cv.no_skill_category') }}</option>
								@endif
                            </select>
                            <span class="select-box-label u-nowrap-space u-over-flow-auto-scroll">{{ $selectedCategory?->name ? attrs('skill.category.' . $selectedCategory?->name) : '' }}</span>
                        </div>
                    </td>
                    <td class="table__border --right --p-3">
                        <div class="form-table__input-wrapper">
                            <select class="select-box --input-table select-skill-name" name="resume[skills][{{ $key }}][id]" required>
                                <option value="" disabled @selected(count($skillIdMap) === 0)>{{ attrs('skill.select_skill_name') }}</option>
                                @php $selectedSkill = null; @endphp
                                @foreach ($companySkills as $item)
                                    @php
										if ($item->id == $skill['id'])  $selectedSkill = $item;
										$isIncludeSkills = count($skillIdMap)>0 ? $skillIdMap->contains($item->id) : false;
									@endphp
                                    <option value="{{ $item->id }}"
                                        @class(['d-none' => $item->category_id !== $skill['category_id'] || ($item->category_id == $skill['category_id'] && $isIncludeSkills && $item->id != $skill['id'])])
                                        @selected($item->id == $skill['id'] ?? '')>
                                        {{ $item->name ?? '' }}
                                    </option>
                                @endforeach
                            </select>
                            <span class="select-box-label u-nowrap-space u-over-flow-auto-scroll">{{ $selectedSkill?->name }} &nbsp;</span>
                        </div>
                    </td>
                    <x-shared-new.tag-select-table :class="'select-center select-skill-level'" name="resume[skills][{{ $key }}][level_id]"
                        :collection="$companySkillLevels" selectMessage="{{ attrs('skill.select_skill_level') }}"
                        selected="{{ $skill['level_id'] ?? ($skill['pivot']['skill_level_id'] ?? '') }}" />
                    <td class="text-center -delete --p-3 col-delete">
						{{-- Dummy Input in case all value in selectTag are disabled --}}
						@if (count($skillIdMap) === 0) <input class="d-none" name="resume[skills][{{$key}}][none]" value="" /> @endif
                        <button type="button" class="btn btn-delete form-control btn-delete-skill"><span>×</span></button>
                    </td>
                </tr>
            @endforeach
            <tr class="after-row-skill" type="hidden">
            </tr>
        </tbody>
    </table>

    <div class="form-table__button-group mt-3">
        <button type="button" class=" btn btn-add-skill --outline-primary-text --sm" data-button-type="show-add-button"
            data-index="{{ $key }}">
            <i class="fas fa-plus"></i>
            <span>{{ trans_page('setting/index.add_skill_level') }}</span>
        </button>
    </div>
</div>
