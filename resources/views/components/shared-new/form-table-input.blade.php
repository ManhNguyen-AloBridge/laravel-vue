<div class="card-form-table card-form-table-input">
    <x-shared-new.card class="--md " title="{{ $attributes->get('card-title') }}"
        content="{{ $attributes->get('card-content') }}">
        <div class="form-table" id="table-{{ $model }}"
            data-model="{{ $model }}">
            <table class="table --hover" data-model="{{ $model }}">
                <thead>
                    <tr>
                        @foreach ($columns as $column)
                            <th @class([
                                'table__border --right',
                                'form-table__col-th' => $column['col-th'] ?? '',
								$column['class'] ?? '',
                            ])> {{ $column['title'] }}</th>
                        @endforeach
                    </tr>
                </thead>
                <tbody>
                    @foreach ($collection as $key => $item)
                        <tr @class([
                            'form-table__row',
                            '--edit' => old('id-' . $model, '') == $item->id,
                        ]) data-item-id="{{ $item->id }}">
                            @foreach ($columns as $column)
                                <td @class([
                                    'table__border --right',
                                    'form-table__col' => $column['edit'],
                                    $column['class'] ?? '',
                                ])>
                                    @if (isset($column['key']))
                                        @if ($column['edit'])
                                            <input
                                                class="form-table__input col-name d-inline-block {{ $column['input_class'] ?? '' }} {{ $column['pr-5'] ?? '' }}"
                                                type="{{$column['type'] ?? 'text'}}" min="1"
                                                value="@if (old('id-' . $model) == $item->id){{ old($column['key']) }}@else{{ $item[$column['key']] }}@endif"
                                                name="{{ $column['key'] }}"
                                                data-origin-value="{{ $item[$column['key']] }}"
                                                data-item-id="{{ $item->id }}"
                                                @if (old('id-' . $model) != $item->id) disabled @endif />
                                        @else
                                            {{ $item[$column['key']] }}
                                        @endif
                                    @else
                                        {{ $loop->parent->index + 1 }}
                                    @endif

                                    @if ($loop->last)
                                        <input type="text" name={{ 'id-' . $model }} value="{{ $item->id }}" class="d-none">
                                        <div class="col-action d-inline float-right form-table__row__button-group"
                                            data-control-name="edit">
                                            <button type="button" data-control-name="edit"
                                                data-item-id="{{ $item->id }}"
                                                data-route-handle="{{ route($model . '.update', [$model => $item->id]) }}"
                                                class="form-table__btn-edit bg-transparent border-0">
                                                <i class="fas fa-pencil-alt color-link color-hover-black mr-2"></i>
                                            </button>
                                            <button type="button" data-item-id="{{ $item->id }}"
                                                data-from="department" data-bs-toggle="modal"
                                                data-bs-target="#modal-{{ $model }}" data-control-name="delete"
                                                data-route-handle="{{ route($model . '.delete', [$model => $item->id]) }}"
                                                class="form-table__btn-delete bg-transparent border-0 btn-delete">
                                                <i class="fas fa-times color-link color-hover-black mr-2"></i>
                                            </button>
                                        </div>
                                    @endif
                                </td>
                            @endforeach
                        </tr>
                    @endforeach

                    <tr @class(['tr-input form-table__row  --edit']) data-form="add-new">
                        @foreach ($columns as $column)
                            <td @class([
                                'table__border --right',
                                'form-table__col' => $column['edit'],
                                $column['class'] ?? '',
                            ])>
                                @if (isset($column['key']))
                                    @if ($column['edit'])
                                        <input
                                            class="form-table__input col-name d-inline-block --focus {{ $column['class'] ?? '' }} {{ $column['pr-5'] ?? '' }}"
                                            type="{{$column['type'] ?? 'text'}}" name="{{ $column['key'] }}" min="1"
											@if (!old('id-' . $model)) value="{{ old($column['key']) }}" @endif
                                            data-origin-value="" placeholder="{{$column['placeholder']}}" />
                                    @else
                                        {{ $collection->last()->id + 1 }}
                                    @endif
                                @else
                                    {{ $collection->count() + 1 }}
                                @endif

                                @if ($loop->last)
                                    <div class="col-action d-inline-block form-table__row__button-group">
                                        <button type="button" class="bg-transparent border-0"><i
                                                class="fas fa-times color-link color-hover-black mr-2"></i></button>
                                    </div>
                                @endif
                            </td>
                        @endforeach
                    </tr>

                </tbody>

            </table>
			<x-shared.validation-error name="{{ 'level' }}" />
			<x-shared.validation-error name="{{ 'name' }}" />
            @php
                $route = old('id-' . $model, '') ? route($model . '.update', [$model => old('id-' . $model, '')]) : 'input';
            @endphp

            <form class="form-{{ $model }} {{ $attributes['class'] }}" id="form-{{ $model }}"
                method="POST" action="{{ $route }}" data-form-type="" data-item-id="{{ old('id-' . $model) }}">
                <input type="hidden" name="_method" value="">
                @csrf
            </form>
            <div class="form-table__button-group mt-3">
                <button data-button-type="cancel" class=" btn  btn-width  --sm --secondary mr-2">
                    <span>{{ __('messages.shared.back') }}</span>
                </button>
                <button type="button" class=" btn show-add --outline-primary-text --sm"
                    data-button-type="show-add-button">
                    <i class="fas fa-plus"></i>
                    <span>{{ trans_page('setting/index.add_skill_level_btn') }}</span>
                </button>
                <button type="submit" data-button-type="add" data-form-type="create"
                    class=" btn btn-submit btn-width  --sm" data-route-handle="{{ route($model . '.store') }}">
                    <span>{{ __('messages.shared.save') }}</span>
                </button>
                <button type="submit" data-button-type="update" data-form-type="update"
                    class=" btn btn-submit btn-width  --sm">
                    <span>{{ __('messages.shared.save') }}</span>
                </button>
            </div>
        </div>
    </x-shared-new.card>
    @include('components.shared-new.modal-delete', [
        'id' => 'modal-' . $model,
        'title' => $modalTitle . __('views/components/shared/card_table_form.after_title'),
    ])
</div>
