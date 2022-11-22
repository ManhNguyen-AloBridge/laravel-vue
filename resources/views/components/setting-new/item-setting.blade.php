@php
$settings = ['skill', 'level', 'qualification'];
$departments = ['department', 'position'];
@endphp

<x-shared-new.card class="--md" :title="$title" :content="$content" id-card="{{$attributes->get('id-card', '')}}">
    @foreach ($listData as $item)
        <div class="tag --list-card --sm">
            <span class="tag__content">
                {{ $item->name }}
            </span>
            <span item-data="{{ $item }}" data-bs-from="{{ $form }}"
                route-handle="{{ route("$form.delete", [$form => $item->id]) }}" class="tag__icon-remove btn-delete"
                data-item data-bs-toggle="modal" data-bs-target="{{ '#modal-' . $form }}">×</span>
        </div>
    @endforeach
    <form class="{{ $form }}" action="{{ route($route) }}#{{$attributes->get('id-card', '')}}" method="POST">
        @csrf
        <div class="d-flex flex-row-reverse">
            <div class="input-group">
                <input type="text" @class([
                    'd-none' => !$errors->has($form . '.name'),
                    'd-flex' => $errors->has($form . '.name'),
                    'form__input --sm',
                ]) name="{{ $form . '[name]' }}"
                    placeholder="{{ $placeholder }}">
                <button type="submit" id="{{ 'btn-save-' . $form }}"
                    class="ml-2 @if (!$errors->has($form . '.name')) d-none @endif btn --sm --primary-text width-btn">{{ __('messages.shared.save') }}</button>
                <button type="button" id="{{ 'btn-add-' . $form }}"
                    class="ml-2 @if ($errors->has($form . '.name')) d-none @endif btn --sm --outline-primary-text width-btn btn-add"><i
                        class="fas fa-plus mr-2"></i>{{ $btnAdd }}</button>
            </div>
        </div>
        <x-shared.validation-error name="{{ $form . '.name' }}" />
    </form>
</x-shared-new.card>

<div class="modal fade" id="{{ 'modal-' . $form }}" tabindex="-1" role="dialog"
    aria-labelledby="{{ 'modal-' . $form . 'Label' }}" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form id="{{ $form }}" method="POST">
                @csrf
                <input type="hidden" name="_method" value="DELETE" />
                <div class="modal-header">
                    <h5 class="modal-title text text-xl" id="exampleModalLabel">
                        @if (in_array($form, $settings))
                            {{ trans_page('setting/index.title_modal_' . $form . '_delete') }}
                        @endif

                        @if (in_array($form, $departments))
                            {{ trans_page('department/index.title_modal_' . $form . '_delete') }}
                        @endif
                    </h5>
                </div>
                <div class="modal-body" id="{{ "content-modal-$form" }}">
                </div>

                <div class="modal-footer">
                    <a href="" class="link text-md" data-bs-dismiss="modal">{{ __('messages.shared.back') }}</a>
                    <button type="submit"
                        class="btn btn-danger width-btn">{{ __('messages.shared.delete') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
