@extends('app_new', ['breadscrumbs' =>
    [
        [
            'title' => @trans_page('user/index.page_title')
        ]
    ],
    'page' => 'invitation-code-list-page',
])

@section('inner-title')
    <i class="fas fa-building" style="margin-right: 1.5rem; font-size: 1.9rem; "></i>@trans_page('user/index.page_title')
@endsection

@section('title-content-vertical')
    @trans_page('user/index.title_content_vertical')
@endsection

@section('content-class', 'page-company-index')

@php
$headers = [
    'name' => ['title' => attrs('user.name')],
    'email' => ['title' => attrs('user.email'), 'class' => 'email'],
    'action' => ['title' => '', 'class' => 'action']
];
$user_id = auth()->user()->id;
@endphp


@section('content')
    <x-shared-new.card>
        <div class="row">
            <div class="col-12 col-sm-8">
                <form action="">
                    <div class="search-group">
                        <x-shared-new.search-box :placeholder="@trans_page('user/index.placeholder')" search-box-class="form__control d-block" name="keyword"
                            value="{{ request('keyword') }}">
                        </x-shared-new.search-box>
                    </div>
                </form>
            </div>
            <div class="col-12 col-sm-4 text-right">
				<div class="d-flex d-sm-none u-mb-5">
				 </div>
                <a class="btn --md --icon float-end " href="{{ route('user.create') }}"><i
                        class="fas fa-plus mr-4"></i>{{ trans_page('user/index.btn_add') }}</a>
            </div>
        </div>
        <div class=" d-none d-sm-inline-block u-mt-20 u-mb-5">
        </div>

        <x-shared-new.data-table :titles="$headers">
            @foreach ($users as $user)
                <tr>
                    <td><a class="u-display-inline-block u-lh-3" href="{{ route('user.show', ['user' => $user->id]) }}">{{ $user->name }}</a></td>
                    <td>{{ $user->email }}</td>
                    <td>
                        @if ($user_id != $user->id)
                            <button class="btn-confirm-delete" data-bs-toggle="modal" id-item="{{ $user->id }}"
                                data-bs-target="#confirm-delete-user">
                                <i class="fas fa-trash"></i>
                            </button>
                        @endif
                    </td>
                </tr>
            @endforeach
        </x-shared-new.data-table>
    </x-shared-new.card>

    <x-setting.confirm-modal :header-title="trans_page('user/index.confirm_delete_title')" modal-id="confirm-delete-user" :action="route('user.delete', ['user' => 'id'])" method="DELETE">
        <x-slot:body>
            <p id="msg-confirm-delete"></p>
        </x-slot:body>
        <x-slot:footer>
            <a class="link text-md btn-close" data-bs-dismiss="modal">{{ __('messages.shared.back') }}</a>
            <button type="submit" class="btn btn-primary">{{ __('messages.shared.delete') }}</button>
        </x-slot:footer>
    </x-setting.confirm-modal>
@endsection
@section('after-scripts')
    <script defer src="{{ mix('assets_new/js/pages/user/index.js') }}"></script>
@endsection