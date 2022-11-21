

<div class="form-group {{ $wrapperClass ?? 'col-lg-4 col-md-6' }}">
    <label for="{{ $attributes->get('id') ?? '' }}">{{ $attributes['title'] }}</label>
    @if ($slot->isEmpty())
        <input {{ $attributes->class(['form-control'])->merge(['type' => 'text']) }}>
    @else
        {{ $slot }}
    @endif
    @if ($showError)
        <x-shared.validation-error name="{{ $errorKey ?? $attributes->get('error_key', '') }}">
        </x-shared.validation-error>
    @endif
</div>
