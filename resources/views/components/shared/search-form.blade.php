<form action="#" class="search-form">
    <div class="row">
        {{ $slot }}
        <div class="col-12 d-flex">
            @if (!isset($actions) || $actions->isEmpty())
                <button id="btn-clear" class="btn btn-dark btn-clear-form ml-auto mr-3 width-btn" type="button"><i
                        class="fas fa-times mr-2"></i>{{ __('views/components/shared/search_form.clear') }}</button>
                <button class="btn btn-primary width-btn" type="submit"><i
                        class="fas fa-search mr-2"></i>{{ __('views/components/shared/search_form.search') }}</button>
            @else
                {{ $actions }}
            @endif
        </div>
    </div>
</form>
