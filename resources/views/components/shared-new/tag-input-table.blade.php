<td {{ $attributes->merge(['class' => 'table__border --right --p-3 ']) }}>
    <div {{ $attributes->merge(['class' => 'tag  --input-table ' . $attributes['input-class']]) }}>
        <input
            {{ $attributes->merge(['class' => 'form-table__input d-inline-block --focus ' . $attributes['class']]) }}
            id="{{ $attributes['id'] }}" type="text" name="{{ $attributes['name'] }} "
            value="{{ $attributes['value'] }}" data-date-format="{{ $attributes['date-format'] }}"/>
        @if ($slot)
            {{ $slot }}
        @endif
    </div>
</td>
