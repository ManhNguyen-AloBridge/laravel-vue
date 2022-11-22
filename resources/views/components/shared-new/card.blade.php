<div class="card {{ $attributes['class'] }}" id='{{ $attributes->get('id-card', '') }}'>
    @if (isset($header) && !$header->isEmpty())
        {{ $header }}
    @else
        @if ($title)
            <h3 class="card__title">
                {{ $title }}
            </h3>
        @endif
    @endif
    @if ($content)
        <h4 class="card__content">
            {{ $content }}
        </h4>
    @endif
    <div class="card__body">
        {{ $slot }}
    </div>
</div>
