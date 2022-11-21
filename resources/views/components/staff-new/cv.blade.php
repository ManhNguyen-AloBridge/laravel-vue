@use(App\Enums\EnumWorkingStatus)
@php
$routeName = Route::currentRouteName();
$permissionEditCv = 'edit-cv-staff';

if ($routeName == 'profile.index') {
    $permissionEditCv = 'profile';
}
@endphp
<div class="content-right cv tab-show-cv">
    <h3 class="cv-title card__title">
        {{ $title }}
    </h3>
    <div class="row">
        <div class="col-8 d-none d-md-block">
            <button type="button" id="download-cv-selected" @if ($isLimited) disabled @endif
                is-name-hidden="{{ $resumeSetting?->is_name_hidden_downloading }}"
                class="btn --sm --outline-primary-text btn-download width-btn @if ($isLimited) disabled @endif"
                data-bs-toggle="modal" data-bs-target="#download-cv-modal"><i
                    class="fas fa-file-pdf mr-2"></i>@trans_page('staff/cv.download_pdf')</button>

            @if (Gate::allows('check-permission', 'send-mail'))
                <form id="send-cv-selected" class="d-inline-block"
                    action="{{ route('send.cv.index') }}" method="GET">
                    <input type="hidden" name="staff_email" value="{{ $user->email }}">
                    <button type="submit"
                        class="btn --sm --outline-primary-text width-btn @if ($isLimited) disabled @endif"
                        @if ($isLimited) disabled @endif><i
                            class="fas fa-envelope mr-4"></i>@trans_page('staff/cv.btn_send_cv')</button>
                </form>
            @endif
        </div>
        @if (Gate::allows('check-permission', $permissionEditCv))
            <div class="col-4 d-none d-md-block">
                <a href="#"
                    class="btn --md --icon float-end
					@if ($isLimited) disabled @endif"
                    id="btn-go-to-edit-cv"><i class="fas fa-pencil-alt"></i> @trans_page('staff/cv.edit')</a>
            </div>
        @endif

        <div class="d-block d-md-none">
            <div class="btns-action">
                <button type="button" id="download-cv-selected" @if ($isLimited) disabled @endif
                    is-name-hidden="{{ $resumeSetting?->is_name_hidden_downloading }}"
                    class="btn --sm --outline-primary-text btn-download width-btn @if ($isLimited) disabled @endif"
                    data-bs-toggle="modal" data-bs-target="#download-cv-modal"><i
                        class="fas fa-file-pdf mr-2"></i>@trans_page('staff/cv.download_pdf')</button>

                @if (Gate::allows('check-permission', 'send-mail'))
                    <form id="send-cv-selected" class="d-inline-block" action="{{ route('send.cv.index') }}"
                        method="GET">
                        <input type="hidden" name="staff_email" value="{{ $user->email }}">
                        <button type="submit"
                            class="btn --sm --outline-primary-text width-btn @if ($isLimited) disabled @endif"
                            @if ($isLimited) disabled @endif><i
                                class="fas fa-envelope mr-4"></i>@trans_page('staff/cv.btn_send_cv')</button>
                    </form>
                @endif
                @if (Gate::allows('check-permission', $permissionEditCv))
                    <a href="#"
                        class="btn --sm --icon float-end
					@if ($isLimited) disabled @endif"
                        id="btn-go-to-edit-cv"><i class="fas fa-pencil-alt"></i> @trans_page('staff/cv.edit')</a>
                @endif
            </div>
        </div>


    </div>
    <div class="table-cv">
        <div class="float-end">@trans_page('staff/cv.create_date')：
            {{ $user->companyUser()->resume?->last_update_cv?->format('Y/m/d') }}</div>
        <div class="card__title title-table">@trans_page('staff/cv.skill_table')</div>

        <table class="table --bordered table-bordered th-12">
            <tr>
                <th>@trans_page('staff/cv.furigana_name')</th>
                <td>
                    {{ $user->nameKana }} &nbsp;
                </td>
            </tr>
            <tr>
                <th>@trans_page('staff/cv.full_name')</th>
                <td>
                    {{ $user->name }} &nbsp;
                </td>
            </tr>
            <tr>
                <th>@trans_page('staff/cv.label_age')</th>
                <td>
                    {{ $user->age }}
                </td>
            </tr>
        </table>
        @if ($educations->count() > 0)
            <x-staff-new.cv-table-section class="th-14" title="{{ trans_page('staff/cv.title_education') }}"
                dateTitle="{{ trans_page('staff/cv.date') }}"
                contentTitle="{{ trans_page('staff/cv.title_education') }}">
                @foreach ($educations as $education)
                    <tbody>
                        <td class="u-nowrap-space u-over-flow-auto-scroll">
                            {{ $education->end_date?->format('Y年m月') }}
                            @if (!$loop->last)
                                <br />
                            @endif
                        </td>
                        <td class="u-nowrap-space u-over-flow-auto-scroll">
                            {{ $education->name }}
                        </td>
                    </tbody>
                @endforeach
            </x-staff-new.cv-table-section>
        @endif

        @if ($qualifications->count() > 0)
            <x-staff-new.cv-table-section class="th-14" title="{{ trans_page('staff/cv.title_qualification') }}"
                dateTitle="{{ trans_page('staff/cv.date_qualification') }}"
                contentTitle="{{ trans_page('staff/cv.qualification') }}">
                @foreach ($qualifications as $qualification)
                    <tbody>
                        <td class="u-nowrap-space u-over-flow-auto-scroll">
                            {{ !$qualification->pivot->option_at ? null : date('Y年m月', strtotime($qualification->pivot->option_at)) }}
                            @if (!$loop->last)
                                <br />
                            @endif
                        </td>
                        <td class="u-nowrap-space u-over-flow-auto-scroll">
                            {{ $qualification->name }}
                        </td>
                    </tbody>
                @endforeach
            </x-staff-new.cv-table-section>
        @endif

        @if ($skills->count() > 0)
            <h3 class="card__title">
                {{ trans_page('staff/cv.owned_technology') }}
            </h3>
            <table class="table --bordered table-bordered" style="table-layout: fixed">
                <thead>
                    <tr>
                        <th>{{ trans_page('staff/cv.owned_technology_category') }}</th>
                        <th>{{ trans_page('staff/cv.owned_technology') }}</th>
                        <th>{{ trans_page('staff/cv.skill_level') }}</th>
                    </tr>
                </thead>
                @foreach ($skills as $skill)
                    <tbody>
                        <td class="u-nowrap-space u-over-flow-auto-scroll">
                            {{ $skill->category?->name ? attrs('skill.category.' . $skill->category?->name) : '' }}
                        </td>
                        <td class="u-nowrap-space u-over-flow-auto-scroll">
                            {{ $skill->name }}
                        </td>
                        <td class="text-center u-nowrap-space u-over-flow-auto-scroll">
                            {{ $skill->pivot->skillLevel->name }}
                        </td>
                    </tbody>
                @endforeach
            </table>
        @endif

        <h3 class="card__title">
            {{ trans_page('staff/edit-cv.add_knowledge') }}
        </h3>
        <table class="table --bordered table-bordered">
            <td class="text-area">{{ $resume?->knowledge ?? '' }}&nbsp;</td>
        </table>

        <h3 class="card__title">
            {{ trans_page('staff/cv.title_specialty') }}
        </h3>
        <table class="table --bordered table-bordered">
            <td class="text-area">{{ $resume?->specialty ?? '' }} &nbsp;</td>
        </table>

        <h3 class="card__title">
            {{ trans_page('staff/cv.job_summary') }}
        </h3>
        <table class="table --bordered table-bordered">
            <td class="text-area">{{ $resume?->job_summary ?? '' }}&nbsp;
            </td>
        </table>

        <h3 class="card__title">
            {{ trans_page('staff/cv.title_company') }}
        </h3>

        <table class="table --bordered th-12 border-left-table">
            @if (!count($jobOfferProjects))
                <x-staff-new.cv-job-section />
            @endif
            @foreach ($jobOfferProjects as $project)
                <x-staff-new.cv-job-section :project="$project" />
            @endforeach
        </table>
        <div>
            &nbsp;<br />
        </div>
        <h3 class="card__title mt-0">
            {{ trans_page('staff/cv.self_pr') }}
        </h3>
        <table class="table --bordered table-bordered">
            <td class="text-area">{{ $resume?->self_pr }}&nbsp;</td>
        </table>

        <h3 class="card__title">
            {{ trans_page('staff/cv.other') }}
        </h3>
        <table class="table --bordered table-bordered">
            <td class="text-area">{{ $resume?->other ?? '' }}&nbsp;</td>
        </table>
    </div>
</div>
