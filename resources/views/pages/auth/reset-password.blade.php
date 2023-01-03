@extends('app', [
'usingLayout' => false,
'page' =>'reset-password'
])

@section('title')
    @trans_page('auth/reset_password.page_title')
@endsection

@section('content')
    <x-auth.background>
        <x-slot name='mainContent'>
            <div>
                <span class="title u-display-block text text-xl">@trans_page('auth/reset_password.page_title')</span>
                <span class="desc u-display-block text text-sm">@trans_page('auth/reset_password.page_desc')</span>
                <div class="card login-box">
                    <form id="form-reset" action="{{ route('password.update') }}" method="POST">
                        @csrf

                        <input type="hidden" name="token" value="{{ $token }}">
                        <input type="hidden" name="email" value="{{ $email }}" />
                        <x-shared-new.form-group id="password" wrapper-class="form-group-password"
                            title="{{ @trans_page('auth/reset_password.password') }}" type="password"
                            placeholder="{{ @trans_page('auth/reset_password.password') }}" name="password" />
                        <x-shared-new.form-group id="password_confirmation"
                            title="{{ @trans_page('auth/reset_password.confirm_password') }}" type="password"
                            placeholder="{{ @trans_page('auth/reset_password.confirm_password') }}"
                            name="password_confirmation" />
                        <x-shared-new.button id="submit-form" title="{{ @trans_page('auth/reset_password.submit') }}" />
                    </form>
                </div>
                <a class="link --dark text" href="{{ route('login') }}">@trans_page('auth/reset_password.back_login')</a>
            </div>
        </x-slot>
    </x-auth.background>
@endsection


@section('after-scripts')
    <script defer src="{{ mix('assets/js/pages/auth/reset-password.js') }}"></script>
@endsection
