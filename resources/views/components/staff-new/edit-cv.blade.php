@php $isConfirm = $isConfirm ?? false;
$explode = explode('/', URL::previous());
$route = array_pop($explode);
$routeProfile = false;
if ($route != 'profile') {
    $route = null;
}

if ($prevRoute == 'profile' || $route) {
    $routeProfile = true;
}
@endphp
<div class="page-edit-cv d-none tab-edit-cv">
    <div class="content-right" data-section="education">
        <div class="card-form-table --edit">
			<div class="now-date float-end d-none">@trans_page('staff/cv.create_date') : {{ now()->format('Y-m-d') }}</div>
            <div class="card__title title-table">@trans_page('staff/cv.skill_table')</div>
            <form action="#" data-staff-id="{{ $staff->id }}" method="post" class="form-edit-cv">
                @csrf
                <input type="hidden" name="_method" value="PUT">
                <input type="hidden" name="back_status" value="0" />
                <input type="hidden" name="is_confirm" value="1" />
                <input type="hidden" name="prev_route"
                    value="{{ old('prev_route', $isConfirm ? $prevRoute : $route) }}">

                <table class="table --bordered table-bordered">
                    <tr>
                        <th class="table__border --right --w-12">@trans_page('staff/cv.furigana_name')</th>
                        <td for="">{{ $staff->nameKana }}</td>

                    </tr>
                    <tr>
                        <th>@trans_page('staff/cv.full_name')</th>
                        <td>
                            {{ $staff->name }}
                        </td>
                    </tr>
                    <tr>
                        <th>@trans_page('staff/cv.label_age')</th>
                        <td>
                            {{ $staff->age }}
                        </td>
                    </tr>
                </table>

                <div class="row">
                    <div class="col-md-12">
                        @php
                            $educations = old('educations', $educations) ?? [];
                        @endphp
                        <x-staff-new.edit-cv-education :collection="$educations" :is-confirm="$isConfirm" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        @php
                            if (old('resume')) {
                                $ownQualificationIds = old('resume.qualification_ids', []);
                            } else {
                                $ownQualificationIds = $qualificationIds ?? ($qualifications?->pluck('id')->toArray() ?? []);
                            }
                        @endphp
                        <x-staff-new.edit-cv-qualification :companyQualifications="$companyQualifications" :collection="$qualifications" :is-confirm="$isConfirm" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        @php
                            $skills = old('resume.skills', $skills ?? []);
                            if (!count($skills)) {
                                $skills[] = ['id' => '', 'level_id' => '', 'category_id' => ''];
                            }
                        @endphp
                        <x-staff-new.edit-cv-skill :companySkillLevels="$companySkillLevels" :companySkills="$companySkills" class="skill-levels"
                            :skills="$skills" :skillCategories="$skillCategories" :is-confirm="$isConfirm" />
                    </div>
                </div>

                <div>
                    <h3 class="card__title">
                        {{ trans_page('staff/edit-cv.add_knowledge') }}
                    </h3>
                    <table class="table --bordered table-bordered">
                        <td class="table__border --right --p-3">
                            <div class="form-table__input-wrapper">
                                <textarea class="area-input u-over-flow-auto-scroll" name="resume[knowledge]" id="" class="form-control" rows="4"
                                    placeholder="@trans_page('staff/cv.placeholder.knowledge')">{{ old('resume.knowledge', $resume['knowledge'] ?? '') }}</textarea>
                                <span class="clear-area-input">×</span>
                            </div>
                        </td>
                    </table>
                    <div class="form-table__button-group" type="hidden"></div>
                </div>

                <div>
                    <h3 class="card__title">
                        {{ trans_page('staff/cv.title_specialty') }}
                    </h3>
                    <table class="table --bordered table-bordered">
                        <td class="table__border --right --p-3">
                            <div class="form-table__input-wrapper">
                                <textarea class="area-input u-over-flow-auto-scroll" name="resume[specialty]" id="" class="form-control" rows="4"
                                    placeholder="@trans_page('staff/cv.placeholder.specialty')">{{ old('resume.specialty', $resume['specialty'] ?? '') }}</textarea>
                                <span class="clear-area-input">×</span>
                            </div>
                        </td>
                    </table>
                    <div class="form-table__button-group" type="hidden"></div>
                </div>

                <div>
                    <h3 class="card__title">
                        {{ trans_page('staff/cv.job_summary') }}
                    </h3>
                    <table class="table --bordered table-bordered">
                        <td class="table__border --right --p-3">
                            <div class="form-table__input-wrapper">
                                <textarea class="area-input u-over-flow-auto-scroll" name="resume[job_summary]" id="" class="form-control" rows="4"
                                    placeholder="@trans_page('staff/cv.placeholder.job_summary')">{{ old('resume.job_summary', $resume['job_summary'] ?? '') }}</textarea>
                                <span class="clear-area-input">×</span>
                            </div>
                        </td>
                    </table>
                    <div class="form-table__button-group" type="hidden"></div>
                </div>

                <div class="row form-table-job">
                    <div class="col-md-12 ">
                        <h3 class="card__title">
                            {{ trans_page('staff/edit-cv.job_histories') }}
                        </h3>
                        @php
                            $jobOfferProjects = old('job_offer_projects', $jobOfferProjects ?? []);
                        @endphp

                        @foreach ($jobOfferProjects as $key => $project)
                            <div class="project-sort">
                                <div class="sort-index d-block d-sm-none">
                                    <input class="sort-index__item"
                                        type="text" readonly value="{{ $project['location_sort'] }}">
                                </div>
                                <table class="table --bordered project-section">
                                    <x-staff-new.edit-cv-project :project="$project" :index="$key ?? $loop->index"
                                        :is-confirm="$isConfirm">
                                    </x-staff-new.edit-cv-project>
                                </table>
                                <x-shared-new.sort-element location-sort="{{ $project['location_sort'] ?? '' }}"
                                    name="projects[{{ $key }}][location_sort]">
                                </x-shared-new.sort-element>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="form-table__button-group mt-3 mb-3 group-btn-project">
                    <button type="button" class="btn btn-add-project --outline-primary-text --sm"
                        data-index="{{ $key ?? 0 }}">
                        <i class="fas fa-plus"></i>
                        <span>{{ trans_page('staff/edit-cv.add_project') }}</span>
                    </button>
                </div>

                <div>
                    <h3 class="card__title">
                        {{ trans_page('staff/cv.self_pr') }}
                    </h3>
                    <table class="table --bordered table-bordered">
                        <td class="table__border --right --p-3">
                            <div class="form-table__input-wrapper">
                                <textarea class="area-input" name="resume[self_pr]" id="" class="form-control" rows="5"
                                    placeholder="@trans_page('staff/cv.placeholder.self_pr')">{{ old('resume.self_pr', $resume['self_pr'] ?? '') }}</textarea>
                                <span class="clear-area-input">×</span>
                            </div>
                        </td>
                    </table>
                    <div class="form-table__button-group" type="hidden"></div>
                </div>

                <div>
                    <h3 class="card__title">
                        {{ trans_page('staff/edit-cv.add_other') }}
                    </h3>
                    <table class="table --bordered table-bordered">
                        <td class="table__border --right --p-3">
                            <div class="form-table__input-wrapper">
                                <textarea class="area-input u-over-flow-auto-scroll" name="resume[other]" id="" class="form-control" rows="4">{{ old('resume.other', $resume['other'] ?? '') }}</textarea>
                                <span class="clear-area-input">×</span>
                            </div>
                        </td>
                    </table>
                    <div class="form-table__button-group" type="hidden"></div>
                </div>

                <div class="row pb-4">
                    <div class="col-md-12 min-height-30 text-center">
                        <x-shared-new.button class="btn-save" type="button" title="{{ __('messages.shared.save') }}" />
                        <a href="#" id="edit-cv-back-btn"
                            class="link u-display-block text width-btn">{{ __('messages.shared.back') }}</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script defer src="{{ mix('assets_new/js/pages/staff/edit-cv.js') }}"></script>
<script defer src="{{ mix('assets_new/js/pages/staff/edit-cv-confirm.js') }}"></script>
