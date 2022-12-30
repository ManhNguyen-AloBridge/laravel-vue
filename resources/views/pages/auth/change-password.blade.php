@extends('app_new', [
    'page' => 'forgot-password',
    'breadscrumbs' => [
        [
            'title' => @trans_page('auth/change_password.page_title'),
        ],
    ],
])

@section('title')
    @trans_page('auth/change_password.page_title')
@endsection

@section('inner-title')
    @trans_page('auth/change_password.page_title')
@endsection

@section('title-content-vertical')
    @trans_page('auth/change_password.title-content-vertical')
@endsection

@section('content-class', 'change-password')

@section('content')
    <div>
        <div class="card --md card-change-password">
            <form action="{{ route('password.change.update') }} " method="POST" id="form-change-password">
                @csrf
                <x-shared-new.form-group wrapper-class="form-group-password" :title="@trans_page('auth/change_password.current_password')" type="password" :placeholder="@trans_page('auth/change_password.current_password')" :name="'current_password'" />
                <x-shared-new.form-group wrapper-class="form-group-password" :title="@trans_page('auth/change_password.new_password')" type="password" :placeholder="@trans_page('auth/change_password.new_password')" :name="'new_password'" />
                <x-shared-new.form-group :title="@trans_page('auth/change_password.new_password_confirm')" type="password" :placeholder="@trans_page('auth/change_password.new_password_confirm')" :name="'new_password_confirmation'" />
                <x-shared-new.button class="--block u-with-100-percent" :title="@trans_page('auth/change_password.submit')" />
            </form>
        </div>

        <div class="card --md card-success login-box" hidden="true">
            <div class="text-center">
                <p class="title-success">@trans_page('auth/change_password.sucsess_title')</p>
                <p class="content-success">@trans_page('auth/change_password.sucsess_content')</p>
                <a href="{{ route('user.index') }}"
                    class="btn --block u-with-100-percent btn-success" type="button">
                    @trans_page('auth/change_password.success_button') </a>
            </div>
        </div>
    </div>
@endsection

@section('after-scripts')
    <script defer src="{{ mix('assets/js/pages/auth/change-password.js') }}"></script>
@endsection
