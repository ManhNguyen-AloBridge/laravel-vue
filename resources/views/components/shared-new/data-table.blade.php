<div class="card-table datatable-responsive">
    <table class="table table-bordered table-hover datatable"
	@isset($attributes['noti-list'])
		noti-list="{{ $attributes['noti-list'] }}"
	@endisset

	page-length="{{ $attributes['page-length'] }}" searching="{{ $attributes['searching'] }}">
        <thead>
            <tr>
                @foreach ($titles as $header)
                    @if ($header['title'] == 'checkbox')
                        <th class="th-check-all {{ $header['class'] ?? '' }} col-checkbox">
                            <x-shared-new.check-box checkbox-class="float-start" :class="'check-all'" :disabled="$attributes['is-limited']"></x-shared-new.check-box>
                        </th>
                    @else
                        <th class="{{ $header['class'] ?? '' }}">{{ $header['title'] }}</th>
                    @endif
                @endforeach
            </tr>
        </thead>
        <tbody>
            {{ $slot ?? '' }}
        </tbody>
    </table>
</div>
