@extends('app_new', [
    'page' => 'detail-company-page',
    'breadscrumbs' => [['title' => trans_page('user/detail.page_index'), 'route' => route('user.index')], ['title' => trans_page('user/detail.page_detail')]],
])

@section('inner-title')
    <i class="fas fa-building"></i>@trans_page('user/detail.page_detail')
@endsection


@section('content-class', 'page-company-create')

@section('content')
    <x-shared-new.card>
        <p class="about-us text-lg u-mb-35">@attrs('user.title')<i class="fas fa-building"></i></p>

        <div class="tab-pane fade show active tab info-company" role="tabpanel" aria-labelledby="info-user-tab"
            id="info-user-tab">
            <form class="form-read-only" action="{{ route('user.edit', ['user' => $user->id]) }}" method="PUT" id="info-user-tab">
                @csrf
                <input type="hidden" class="form__input" name="id" value="{{ $user->id }}">

                <div class="info-company__header">
                    <div class="info-company__header-info"></div>
                    <button id="btn-change" type="button" class="btn --md">
                        <i class="fas fa-pencil-alt mr-2"></i>
                        @trans_page('user/create.btn_change')
                    </button>
                </div>
                <div class="info-user__body">
                    <x-shared-new.form-group wrapper-class="info-user__only only-df-mb" readonly="readonly"
                        title="{{ @attrs('user.name') }}" name="name" value="{{ old('name', $user->name) }}"
                        have-input="true" id-text="name">
                    </x-shared-new.form-group>

                    <div class="info-user__mutiple">
                        <x-shared-new.form-group wrapper-class="info-user__only only-end" title="{{ @attrs('user.email') }}" name="email" readonly="readonly"
                            value="{{ old('email', $user->email) }}" have-input="true" id-text="email">
                        </x-shared-new.form-group>
                    </div>
                </div>
                <div class="info-company__footer">
                    <button id="btn-save" type="submit" class="btn --md d-none u-mt-40">@trans_page('user/create.btn_save')</button>
                    <button id="btn-confirm" class="btn --md d-none u-mt-40">@trans_page('user/create.btn_confirm')</button>
                    <a id="btn-cancel-change" class="d-none link" data-bs-dismiss="modal" href="#">@trans_page('user/create.btn_cancel')</a>
                    <a id="btn-cancel-confirm" class="d-none link" data-bs-dismiss="modal"
                        href="#">@trans_page('user/create.btn_cancel')</a>
                </div>
            </form>
        </div>
    </x-shared-new.card>
@endsection
@section('after-scripts')
    <script defer src="{{ mix('assets/js/pages/user/detail.js') }}"></script>
@endsection
