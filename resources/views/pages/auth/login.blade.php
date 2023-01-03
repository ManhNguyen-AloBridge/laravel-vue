@extends('app', [
'usingLayout' => false,
'page' =>'login-page'
])

@section('title')
    @trans_page('auth/login.page_title')
@endsection
@section('content')
    <x-auth.background>
        <x-slot name='mainContent'>
            <div class="login-content">
                <span class="title u-display-block text text-4xl">@trans_page('auth/login.page_title')</span>
                {{-- <span class="desc u-display-block text">@trans_page('auth/login.page_desc')</span> --}}
                <div class="card login-box">
                    <form action="{{ route('login') }}" method="post">
                        @csrf
                        @if (session()->has('message'))
                            <p class="validation-error u-text-align-center error-auth">{{ session('message') }}</p>
                        @endif
                        <x-shared-new.form-group id="email" title="{{ @trans_page('auth/login.email') }}" type="email"
                            placeholder="{{ @trans_page('auth/login.email') }}" name="email" value="{{ old('email') }}"
                            error_key="email" data="error-email"
                            class="{{ $errors->has('email') || session()->has('message') ? '--error' : '' }}" />
                        <x-shared-new.form-group id="password" title="{{ @trans_page('auth/login.password') }}"
                            type="password" name="password" placeholder="{{ @trans_page('auth/login.password') }}"
                            name="password" value="{{ old('password') }}" error_key="password" data="error-password"
                            class="{{ $errors->has('password') || session()->has('message') ? '--error' : '' }}" />
                        <x-shared-new.button class="--block u-with-100-percent"
                            title="{{ @trans_page('auth/login.btn_submit') }}" />
                    </form>
                    <a class="link u-display-block text"
                        href="">@trans_page("auth/login.forgot_password")</a>
                    <a class="link u-display-block text"
                        href="">@trans_page("auth/login.link_to_register")</a>
                </div>
            </div>
        </x-slot>
    </x-auth.background>
@endsection
