@use(App\Enums\EnumOptionAndOr)
@php
$name = str_replace('[]', '', $attributes->get('name'));
$optionName = $attributes->get('option-name');
@endphp
<div class="select-and-or form__control">
    <select {{ $attributes->class(['select-and-or__condition', 'select-box --input', 'select2']) }} multiple>
        @foreach ($collection as $item)
            <option value="{{ $item[$map['value']] }}"
                @if (request($name)) @selected(in_array($item[$map['value']], request($name))) @endif>
                {{ $item[$map['title']] }}
            </option>
        @endforeach
    </select>
    <select name="{{ $optionName }}" class="select-box --input select-and-or__option">
        <option value="{{ EnumOptionAndOr::AND->value }}" @selected(request($optionName) == EnumOptionAndOr::AND->value)>{{ EnumOptionAndOr::AND->text() }}</option>
        <option value="{{ EnumOptionAndOr::OR->value }}" @selected(request($optionName) == EnumOptionAndOr::OR->value)>{{ EnumOptionAndOr::OR->text() }}</option>
    </select>
</div>
