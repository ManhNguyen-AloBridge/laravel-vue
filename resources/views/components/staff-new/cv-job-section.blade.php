<table class="table --bordered th-12 border-left-table form-project-input">
    <tr>
        <th>@trans_page('staff/cv.project_title')</th>
        <td>{{ $project?->name }}&nbsp;</td>
    </tr>
    <tr>
        <th width="1.2rem">@trans_page('staff/cv.project_stages')</th>
        <td class="p-0">
            <table class="no-border" width="100%">
                <tr>
                    <th> {{ __('attributes.job_history.start_date') }}</th>
                    <td> {{ $project?->start_date?->format('Y/m')}}&nbsp; @if (!$project?->start_date)
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					@endif
                    </td>
                    <th> {{ __('attributes.job_history.end_date') }}</th>
                    <td>
                        {{ $project?->end_date?->format('Y/m') ?? trans_page('staff/cv.current') }}&nbsp;
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <th>@trans_page('staff/cv.project_description')</th>
        <td class="text-area">{{ $project?->description }}&nbsp;</td>
    </tr>
    <tr>
        <th>@trans_page('staff/cv.environment_language')</th>
        <td>
            {{ $project?->env_languages }}&nbsp;
        </td>
    </tr>
    <tr>
        <th>@trans_page('staff/cv.role')</th>
        <td>{{ $project?->role }}&nbsp;</td>
    </tr>
    <tr>
        <th>@trans_page('staff/cv.number_of_people')</th>
        <td>{{ $project?->number_of_people ?? '' }}&nbsp;</td>
    </tr>

    <tr class="process-end">
        <th width="1.2rem">@trans_page('staff/cv.process')</th>
        <td class="p-0">
            <table width="100%" class="no-border">
                <tr class=" d-none d-sm-table-row">
                    @foreach ($companyProcesses as $process)
                        <th class="th-subhead --no-border-th">
                            {{ $process->name }}&nbsp;
                        </th>
                    @endforeach
                </tr>
                <tr class="text-center d-none d-sm-table-row">
                    @foreach ($companyProcesses as $process)
                        <td class="--no-border-th text-xs">
                            @if (in_array($process->id, $processes))
                                ●
                            @else
                                &nbsp;
                            @endif
                        </td>
                    @endforeach
                </tr>

                @foreach ($companyProcesses as $process)
                    <tr class="d-table-row d-sm-none">
                        <th class="--no-border-th text-xs">
                            {{ $process->name }}&nbsp;
                        </th>

                        <td class="--no-border-th text-xs text-center">
                            @if (in_array($process->id, $processes))
                                ●
                            @else
                                &nbsp;
                            @endif
                        </td>

                    </tr>
                @endforeach
            </table>
        </td>
    </tr>
</table>
