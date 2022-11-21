@php
	$settings = ['skill','level','qualification'];
	$departments = ['department','position'];
@endphp

<div class="card disabled card-primary">
    <div class="card-header">
        <h3 class="card-title">{{ __('views/pages/' . $basePart . '.' . $form . '_list') }}</h3>
        &nbsp;
    </div>
    <div class="card-body pt-3">
        <form class="{{ $form }}" action="{{ route($route) }}" method="POST">
            @csrf
            <div class="row pb-2 justify-content-end">
                <input type="text" @class([
                    'form-control',
                    'd-none' => !$errors->has($form . '.name'),
                    'd-flex flex-grow-1 w-auto' => $errors->has($form . '.name'),
                ]) name="{{ $form . '[name]' }}">
                <div class="justify-content-end">
                    <button type="submit" id="{{ 'btn-save-' . $form }}"
                        class="ml-2 @if (!$errors->has($form . '.name')) d-none @endif btn width-btn btn-primary float-right"><i class="fas fa-check mr-2"></i>{{ __('messages.shared.save') }}</button>
                    <button type="button" id="{{ 'btn-add-' . $form }}"
                        class="ml-2 @if ($errors->has($form . '.name')) d-none @endif btn width-btn btn-success float-right btn-add"><i class="fas fa-plus mr-2"></i>{{ __('messages.shared.add') }}</button>
                    <button type="button" id="{{ 'btn-cancel-' . $form }}"
                        class="ml-2 @if (!$errors->has($form . '.name')) d-none @endif btn width-btn btn-secondary float-right btn-cancel"><i class="fas fa-times mr-2"></i>{{ __('messages.shared.back') }}</button>
                </div>
            </div>
            <x-shared.validation-error name="{{ $form . '.name' }}" />
        </form>
        <div class="table-responsive">
            <table data-page-length='5' class="table table-bordered table-hover datatable">
                <thead>
                    <tr>
                        <th>{{ __('views/pages/' . $basePart . '.id') }}</th>
                        <th>{{ __('attributes.' . $form . '.name') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($listData as $key => $item)
                        <tr>
                            <td>
                                <div class="col-index">
                                    {{ ++$key }}
                                </div>
                            </td>
                            <td>
                                <div class="col-name d-inline-block">
                                    {{ $item['name'] }}
                                </div>
                                <div class="col-action d-inline">
                                    @if ($form != 'process')
                                        <button item-data="{{ $item }}" data-from="{{ $form }}"
                                            route-handle="{{ route("$form.delete", [$form => $item->id]) }}"
                                            class="btn float-right btn-delete btn-width-default" data-item
                                            data-toggle="modal" data-target="{{ '#modal-' . $form }}"><i
                                                class="fas fa-trash"></i></button>
                                    @endif
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

<div class="modal fade" id="{{ 'modal-' . $form }}" tabindex="-1" role="dialog"
    aria-labelledby="{{ 'modal-' . $form . 'Label' }}" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="{{ $form }}" method="POST">
                @csrf
                <input type="hidden" name="_method" value="DELETE" />
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">

                        @if (in_array($form,$settings))
                            {{ trans_page('setting/index.title_modal_' . $form . '_delete') }}
                        @endif

                        @if (in_array($form,$departments))
                            {{ trans_page('department/index.title_modal_' . $form . '_delete') }}
                        @endif
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="{{ "content-modal-$form" }}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary width-btn"
                        data-dismiss="modal">{{ __('messages.shared.back') }}</button>
                    <button type="submit" class="btn btn-danger width-btn">{{ __('messages.shared.delete') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
