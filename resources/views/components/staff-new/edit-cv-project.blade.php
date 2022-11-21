@php
$project = $attributes->get('project');
@endphp
<tbody class="row-project">
    <input type="hidden" name="projects[{{ $index }}][id]" value="{{ $project['id'] ?? '' }}">
    <tr>
        <th class="--w-14 --white">@trans_page('staff/cv.project_title')</th>
        <x-staff-new.edit-cv-table-input value="{{ $project['name'] ?? '' }}" :lost-width="true" name="projects[{{ $index }}][name]"
            placeholder="{{ @trans_page('staff/cv.placeholder.projects.name') }}">
            <button type="button"
                class="btn btn-delete form-control btn-delete-project py-1 pe-0"><span>×</span></button>
        </x-staff-new.edit-cv-table-input>
    </tr>
    <tr>
        <th>@trans_page('staff/cv.project_stages')</th>
        <td class="p-0">
            <table class="no-border" width="100%">
                <tr>
                    <th class="nowrap --w-12"> {{ __('attributes.job_history.start_date') }}</th>
                    <x-staff-new.edit-cv-table-input class="date-picker"
                        name="projects[{{ $index }}][start_date]"
                        value="{{ convertToYmDate($project['start_date'] ?? '') }}" date-format="Y/MM"
                        placeholder="{{ @trans_page('staff/cv.placeholder.projects.start_date') }}">
                        <label class="label-date-picker">{{ convertToYmDate($project['start_date'] ?? '') }}</label>
                    </x-staff-new.edit-cv-table-input>

                    <th class="nowrap --w-12"> {{ __('attributes.job_history.end_date') }}</th>
                    <x-staff-new.edit-cv-table-input class="date-picker" name="projects[{{ $index }}][end_date]"
                        value="{{ convertToYmDate($project['end_date'] ?? '') }}" date-format="Y/MM"
                        placeholder="{{ @trans_page('staff/cv.placeholder.projects.end_date') }}">
                        <label class="label-date-picker">{{ convertToYmDate($project['end_date'] ?? '') }}</label>
                    </x-staff-new.edit-cv-table-input>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <th>@trans_page('staff/cv.project_description')</th>
        <td class="table__border --right --p-3">
            <div class="form-table__input-wrapper">
                <textarea class="area-input" name="projects[{{ $index }}][description]" id="" rows="5"
                    class="form-control" placeholder="@trans_page('staff/cv.placeholder.projects.description')">{{ $project['description'] ?? '' }}</textarea>
            </div>
        </td>
    </tr>
    <tr>
        <th class="--white">@trans_page('staff/cv.environment_language')</th>
        <x-staff-new.edit-cv-table-input name="projects[{{ $index }}][env_languages]"
            value="{{ $project['env_languages'] ?? '' }}"
            placeholder="{{ @trans_page('staff/cv.placeholder.projects.env_languages') }}">
        </x-staff-new.edit-cv-table-input>
    </tr>
    <tr>
        <th class="--white">@trans_page('staff/cv.role')</th>
        <x-staff-new.edit-cv-table-input name="projects[{{ $index }}][role]"
            value="{{ $project['role'] ?? '' }}"
            placeholder="{{ @trans_page('staff/cv.placeholder.projects.role') }}">
        </x-staff-new.edit-cv-table-input>
    </tr>
    <tr>
        <th class="--white">@trans_page('staff/cv.number_of_people')</th>
        <x-staff-new.edit-cv-table-input name="projects[{{ $index }}][number_of_people]"
            value="{{ $project['number_of_people'] ?? '' }}"
            placeholder="{{ @trans_page('staff/cv.placeholder.projects.number_of_people') }}">
        </x-staff-new.edit-cv-table-input>
    </tr>

    @php
        $jobProcessIds = is_array($project) ? $project['processes'] ?? [] : $project['processes']->pluck('id')->toArray();
    @endphp

    <tr class="process-end row-project">
        <th class="--white">@trans_page('staff/cv.process')</th>
        <td class="p-0">
            <table width="100%" class="no-border" style="table-layout: fixed">
                <tr class="--no-border-th d-none d-sm-table-row">
                    @foreach ($processes as $process)
                        <th class="th-subhead --white --no-border-th">
                            {{ $process->name }}&nbsp;
                        </th>
                    @endforeach
                </tr>
                <tr class="text-center d-none d-sm-table-row process-full-width">
                    @foreach ($processes as $process)
                        @php
                            $checked = in_array($process->id, $jobProcessIds);
                        @endphp
                        <td class="--no-border-th --p-3">
                            <label class="col-md-4 checkbox-round" for="ckb-{{ $index }}-{{ $process->id }}">
                                <input type="checkbox" value="{{ $process->id }}"
                                    id="ckb-{{ $index }}-{{ $process->id }}"
                                    name-input="projects[{{ $index }}][processes][]"
                                    name="projects[{{ $index }}][processes][]" autocomplete="off"
                                    @checked(in_array($process->id, $jobProcessIds))>
                                <span class="text-xs">●</span>
                            </label>
                        </td>
                    @endforeach
                </tr>
                @foreach ($processes as $process)
                    <tr class="d-table-row d-sm-none process-sm-width">
                        <th class="th-subhead --no-border-th">
                            {{ $process->name }}&nbsp;
                        </th>

                        @php
                            $checked = in_array($process->id, $jobProcessIds);
                        @endphp
                        <td class="--no-border-th --p-3  text-center">
                            <label class="col-md-4 checkbox-round"
                                for="ckb-{{ $index }}-{{ $process->id }}-sm">
                                <input type="checkbox" value="{{ $process->id }}"
                                    id="ckb-{{ $index }}-{{ $process->id }}-sm"
                                    name-input="projects[{{ $index }}][processes][]"
                                    name="projects[{{ $index }}][processes][]" autocomplete="off"
                                    @checked($checked)>
                                <span class="text-xs">●</span>
                            </label>
                        </td>
                    </tr>
                @endforeach
            </table>
        </td>
    </tr>
</tbody>
