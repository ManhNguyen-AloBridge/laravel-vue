<td @class([
    'table__border',
    '--right',
    '--p-3',
    'name-project' => $attributes['lost-width'] == true,
])>
    <div @class([
        'form-table__input-wrapper',
    ])>
        <input class="form-table__input d-inline-block --focus {{ $attributes->get('class') }}"
            data-date-format="{{ $attributes->get('date-format') }}" {{ $attributes }}>
        {{ $slot }}
    </div>

    @if ($attributes['lost-width'] == true)
        <div class="options d-flex d-sm-none">
			<button type="button" class="options__btn">
				<i class='fas fa-ellipsis-h'></i>
			</button>
        </div>
    @endif
</td>
