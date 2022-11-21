<form class="{{ $form }}" action="{{ route($routeName) }}" method="POST">
    <div class="card-table">
        <div class="card --md">
            <div class="card-header">
                <h3 class="card-title">
                    {{ $title }}
                </h3>
            </div>
            <div class="card-body mt-4">
                @csrf
                <table class="table --hover card-table-data">
                    <thead>
                        <tr>
                            <th class="table__border table-id --right">{{ __('views/pages/' . $basePart . '.id') }}
                            </th>
                            <th class="table__border --right">{{ __('attributes.' . $form . '.name') }}</th>
                    </thead>
                    <tbody>
                        @foreach ($listData as $key => $item)
                            <tr>
                                <td class="text-center table__border --right">
                                    {{ $key + 1 }}
                                </td>
                                <td>
                                    <div class="col-name d-inline-block u-over-flow-auto-scroll u-lh-1 u-with-500 nowrap">
                                        {{ $item['name'] }}
                                    </div>
                                    <div class="col-action d-inline float-right">
                                        @if ($form != 'process')
                                            <button type="button" item-data="{{ $item }}"
                                                data-from="{{ $form }}"
                                                route-handle="{{ route("$form.delete", [$form => $item->id]) }}"
                                                class="bg-transparent border-0 btn-delete" data-item
                                                data-bs-toggle="modal" data-bs-target="{{ '#modal-' . $form }}">
                                                <i class="fas fa-times fa-grey fa-right"></i>
                                            </button>
                                        @endif
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        <tr @class([
                            'tr-input',
                            'd-none' => !$errors->has($form . '.name'),
                            '' => $errors->has($form . '.name'),
                        ])>
                            <td class="text-center table__border --right">
                                {{ ($key ?? -1) + 2 }}
                            </td>
                            <td class="background-color-input">
                                <div class="col-name d-inline-block input-field">
                                    <input type="text" class="input-text w-100" name="{{ $form . '[name]' }}" placeholder="{{$attributes->get('placeholder')}}">
                                </div>
                                <div class="col-action d-inline-block float-right" data-form="{{ $form }}">
                                    <button type="button" id="{{ 'btn-cancel-' . $form }}"
                                        class=" @if (!$errors->has($form . '.name')) d-none @endif btn-cancel bg-transparent border-0"><i
                                            class="fas fa-times fa-grey fa-right"></i></button>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <x-shared.validation-error name="{{ $form . '.name' }}" />
                <div class="add-new-item clearfix" data-form="{{ $form }}">
                    <button type="button" id="{{ 'btn-add-' . $form }}"
                        class="@if ($errors->has($form . '.name')) d-none @endif btn btn-add --outline-primary-text --sm">
                        <i class="fas fa-plus"></i>
                        <span>{{ $buttonAdd }}</span>
                    </button>
                    <button type="submit" id="{{ 'btn-save-' . $form }}"
                        class=" @if (!$errors->has($form . '.name')) d-none @endif btn btn-submit btn-width  --sm">
                        <span>{{ __('messages.shared.save') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>


<div class="card-table-modal modal fade" id="{{ 'modal-' . $form }}" tabindex="-1" role="dialog"
    aria-labelledby="{{ 'modal-' . $form . '-label' }}" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="{{ $form }}" method="POST">
                @csrf
                <input type="hidden" name="_method" value="DELETE" />
                <div class="modal-header">
                    <h5 class="modal-title text text-xl">
                        {{ $modalTitle }}

                    </h5>
                </div>
                <div class="modal-body" id="{{ "content-modal-$form" }}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-cancel-delete width-btn"
                        data-bs-dismiss="modal">{{ __('messages.shared.back') }}</button>
                    <button type="submit" class="btn btn-submit-delete ">{{ __('messages.shared.delete') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
