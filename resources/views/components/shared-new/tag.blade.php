<div {{ $attributes->class(['tag']) }}>
    <span class="tag__content">
        {{ $content }}
    </span>

    @if ($attributes['name'])
        <input type="hidden" name="{{ $attributes['name'] }}" value="{{ $inputValue ?? $content }}" />
    @endif

    <span class="tag__icon-remove">×</span>
</div>
