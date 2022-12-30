@extends('app_new', [
'usingLayout' => false,
'page' => 'forgot-password'
])

@section('title')
    @trans_page('auth/forgot_password.page_title')
@endsection

@section('content')
    <x-auth.background>
        <x-slot name='mainContent'>
            <div>
                <span class="title u-display-block text text-xl">@trans_page('auth/forgot_password.page_title')</span>
                <span class="desc text text-sm">@trans_page('auth/forgot_password.page_desc')</span>
                <div class="card login-box u-mb-24">
                    <form action="{{ route('password.forgot') }}" method="POST" id="form-forgot-password">
                        @csrf
                        <x-shared-new.form-group id="email" title="{{ @trans_page('auth/forgot_password.email') }}"
                            type="email" placeholder="{{ @trans_page('auth/forgot_password.email') }}" name="email"
                            value="{{ old('email') }}" error_key="email" />
                        <p class="note u-text-align-left">
                            @trans_page('auth/forgot_password.note')
                        </p>
                        <x-shared-new.button class="--block u-with-100-percent"
                            title="{{ @trans_page('auth/forgot_password.button_submit') }}" />
                    </form>
                </div>
                <a class="link --dark text" href="{{ route('login') }}">@trans_page('auth/forgot_password.back_login')</a>
            </div>
        </x-slot>
        <div class="modal --not-layout fade" id="modal-success">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text text-lg">@trans_page('auth/forgot_password.page_title')</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text">@trans_page('auth/forgot_password.check_reset_link_in_email')</p>
                    </div>
                    <div class="modal-footer align-item-left">
                        <button type="button" class="btn btn-accept"
                            data-dismiss="modal">@trans_page('auth/forgot_password.ok')</button>
                    </div>
                </div>
            </div>
        </div>
    </x-auth.background>
@endsection

@section('after-scripts')
    <script defer src="{{ mix('assets/js/pages/auth/forgot-password.js') }}"></script>
@endsection
