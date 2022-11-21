<div class="checkbox {{ $attributes['checkbox-class'] }}">
    <input {{ $attributes->merge(['class' => 'checkbox__input --primary ']) }} type="checkbox"
        @checked($attributes['checked']) @if ($attributes['disabled']) disabled @endif
        id="{{ $attributes->get('id') }}">
    @if ($attributes['title'])
        <label for="{{ $attributes->get('id') }}" class="checkbox__title --primary {{ $attributes['class-label'] }}">{!! $attributes['title'] !!}</label>
    @endif
</div>
