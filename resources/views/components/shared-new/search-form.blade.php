<div class="search-form">
    <div class="search-form__header">
        <label class="search-form__title">
            {{ $title }}

            <input type="checkbox" class="search-form__toggle-input">
            <i class="search-form__toggle-icon fas fa-angle-right @if((count(request()->all()) > 0)) --open @endif"></i>
        </label>
    </div>
    <div class="search-form__body @if((count(request()->all()) > 0)) --show @else --hide @endif">
        <form action="">
            {{ $slot }}
            @if (!isset($actions) || $actions->isEmpty())
                <div class="search-form__action">
                    <button class="btn --light --md search-form__btn-clear" type="button">
                        <i class="fa fa-times"></i>{{ __('views/components/shared/search_form.clear') }}
                    </button>
                    <button class="btn --primary --md btn-search" id="btn-search">
                        <i class="fa fa-search"></i>
                        {{ __('views/components/shared/search_form.search') }}
                    </button>
                </div>
            @else
                {{ $actions }}
            @endif
        </form>
    </div>
</div>
