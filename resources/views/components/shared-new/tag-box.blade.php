<div class="tag-box {{ $attributes['class'] }}" id="{{ $attributes['name'] }}">
    @php
        $collection = old($attributes['name']) ?  old($attributes['name'])  : $dataSetting[$attributes['name']] ?? [];
    @endphp

    @foreach ($collection as $item)
        <x-shared-new.tag :class="$attributes['tag-class']" name="{{ $attributes['name'] }}[]" content="{{ $item }}" />
    @endforeach
    <textarea id="input-{{ $attributes['name'] }}" class="tag-box__input input-tag {{ $attributes['textarea-class'] }}"
        rows="1" placeholder="{{ $attributes['placeholder'] }}"
        data-tag-class="{{ $attributes['tag-class'] }}"></textarea>
</div>
