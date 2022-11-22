<div class="tabs-block card-shadow w-100" data-page="{{ $attributes->get('data-page') }}"
    data-prev-route="{{ $attributes->get('data-prev-route') }}"
   prev-url="{{ $attributes->get('prev-url') }}">
    <ul class="nav nav-tabs {{ $attributes['class-wrapper'] }}" id="custom-tabs-four-tab" role="tablist">
        {{ $links }}
    </ul>
    <div class="tab-content" id="custom-tabs-four-tab-content">
        {{ $panes }}
    </div>
</div>
