@extends('app', [
    'breadscrumbs' => [
        [
            'title' => @trans_page('room/index.page_title'),
        ],
    ],
    'page' => 'list-room-page',
])

@section('inner-title')
    <i class="fas fa-building" style="margin-right: 1.5rem; font-size: 1.9rem; "></i>@trans_page('user/index.page_title')
@endsection


{{-- @section('content-class', 'page-company-index') --}}

@php
$headers = [
    'ID' => ['title' => attrs('shared.id')],
    'room_number' => ['title' => attrs('room.number')],
    'name_user' => ['title' => attrs('user.name')],
    'floor' => ['title' => attrs('room_price.floor')],
    'price' => ['title' => attrs('room_price.price')]
];
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
            @foreach ($listInfoRoom as $key => $info)
                <tr>
                    <td class="text-center">{{ ++$key }}</td>
                    <td class="text-center"><a class="u-display-inline-block u-lh-3" href="{{ route('receipt.show', ['id' => $info->number]) }}">{{ $info->number }}</a></td>
                    <td>{{ $info->name }}</td>
                    <td class="text-center">{{ $info->floor }}</td>
                    <td class="text-center">{{ $info?->price }}</td>
                    {{-- <td>
                        @if ($user_id != $user->id)
                            <button class="btn-confirm-delete" data-bs-toggle="modal" id-item="{{ $user->id }}"
                                data-bs-target="#confirm-delete-user">
                                <i class="fas fa-trash"></i>
                            </button>
                        @endif
                    </td> --}}
                </tr>
            @endforeach
        </x-shared-new.data-table>
    </x-shared-new.card>

    <x-setting.confirm-modal :header-title="trans_page('stafff/index.title')" modal-id="confirm-delete-user" :action="route('user.delete', ['user' => 'id'])" method="DELETE">
        <x-slot name="body">
            <p id="msg-confirm-delete"></p>
        </x-slot>
        <x-slot name="footer">
            <a class="link text-md btn-close" data-bs-dismiss="modal">{{ __('messages.shared.back') }}</a>
            <button type="submit" class="btn btn-primary">{{ __('messages.shared.delete') }}</button>
        </x-slot>
    </x-setting.confirm-modal>
@endsection
@section('after-scripts')
    <script defer src="{{ mix('assets/js/pages/user/index.js') }}"></script>
@endsection
