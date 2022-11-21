<div class="col-4 {{ $attributes['class'] }}">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas {{ $iconInput }}"></i></span>
        </div>
        @if ($slot->isEmpty())
            <input {{ $attributes->class(['form-control'])->merge(['type' => 'text']) }} title={{$attributes['placeholder']}} >
        @else
            {{ $slot }}
        @endif
    </div>
</div>
