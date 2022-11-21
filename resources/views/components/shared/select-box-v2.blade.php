@use(App\Enums\EnumOptionAndOr)
<div class="col-12 pb-3 pt-2 select-box-v2">
    <div class="input-search">
        <label for="" class="input-search__label m-0"> <span><i class="{{ 'fas ' . $iconSelect }}"></i></span>
            {{ $title }}</label>
        <div class="row">
            <div class="{{ $optionAndOr ? 'col-11' : 'col-12'}}">
                <div class="pt-2 pl-1 pr-1">
                    @php
                        if (request($attributes['name'])) {
                            $ownQualificationId = request($attributes['name']);
                        } else {
                            $ownQualificationId = [];
                        }
                    @endphp
                    <select class="select2 select-search form-control border-0" name="{{ $attributes['name'] . '[]' }}"
                        multiple="multiple"
                        data-placeholder="{{ $attributes['placeholder'] }}"
                        data-dropdown-css-class="select2-blue" style="width:100%;">
                        @foreach ($listData as $item)
                            <option value="{{ $item->id }}" @selected(in_array($item->id, $ownQualificationId))>
                                {{ $item->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div>
			@if ($optionAndOr)
            <div class="col-1 border-left d-flex align-items-center">
                <select name="{{ 'option_' . $attributes['name'] }}" class="form-control border-0">
                    @foreach (EnumOptionAndOr::cases() as $item)
                        <option value="{{ $item->value }}" @selected($item->value == request('option_' . $attributes['name']))>
                            {{ $item->text() }}</option>
                    @endforeach
                </select>
            </div>
			@endif
        </div>

    </div>
</div>
