<div class="form__group {{ $attributes->get('wrapper-class', '') }}"
    data-info="{{ $attributes['data-info'] ?? '' }}">
    <label class="form__label u-text-align-left {{ $attributes['label-class'] }}"
        for="{{ $attributes->get('id', '') }}">{{ $attributes['title'] }}
        @if ($attributes['badge-text'])
            <x-shared-new.badge type="{{ $attributes['badge-type'] ?? '' }}"
                text="{{ $attributes['badge-text'] }}" />
        @endif
    </label>

    @if ($slot->isEmpty())
        @if ($attributes['readonly'])
            <p class="border-bottom u-over-flow-auto-scroll u-nowrap-space {{ $attributes->get('p-class', '') }}" id="{{ $attributes->get('id-text', '') }}">
                <?= $attributes['content'] ?? $attributes['value'] ?>
            </p>
        @else
            <input autocomplete="off"
                {{ $attributes->merge(['class' => $attributes->prepends('form__input'),'type' => 'text','placeholder' => $attributes['placeholder'],'value' => $attributes['value']])->whereDoesntStartWith('title', 'wrapper-class') }}>
        @endif

        @if ($attributes['have-input'] == true)
            <input autocomplete="off"
                {{ $attributes->merge(['class' => $attributes->prepends('form__input'),'type' => ($attributes['type'] ?? 'text'),'id' => $attributes['id-input'],'value' => $attributes['value']])->whereDoesntStartWith(['title', 'readonly', 'wrapper-class', 'id-text', 'have-input']) }}>
        @endif
    @else
        {{ $slot }}

    @endif
    <x-shared-new.validation-error name="{{ $attributes->get('error_key', $attributes->get('name')) }}">
    </x-shared-new.validation-error>
</div>
