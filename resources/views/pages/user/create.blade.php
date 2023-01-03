@extends('app', ['breadscrumbs' => [['title' => trans_page('user/create.page_index'), 'route' => route('user.index')], ['title' => trans_page('user/create.page_create')]]])

@section('inner-title')
    <i class="fas fa-building"></i>@trans_page('user/create.page_title')
@endsection

@section('breadscrumb')
    <li class="breadcrumb-item"><a href="{{ route('user.index') }}">@trans_page('user/index.page_title')</a></li>
    <li class="breadcrumb-item active">@trans_page('user/create.page_title')</li>
@endsection

@section('content-class', 'page-company-create')

@section('content')
    <x-shared-new.card title="{{ @trans_page('user/create.create_user_info_title') }}">
        <p class="text color-desc card__desc">@trans_page('user/create.desc')</p>
        <p class="about-us text-lg u-mb-35">@attrs('user.title')<i class="fas fa-building"></i></p>
        <form action="{{ route('user.store') }}" method="POST">
            @csrf
            <div class="form__group col-12 col-sm-6 form__left">
                <label for="" class="form__label">
                    @attrs('user.name')
                    <x-shared-new.badge type="alert" :text="@attrs('shared.required')" />
                </label>
                <input name="name" value="{{ old('name') }}" type="text" class="form__input"
                    placeholder="@attrs('shared.example')@attrs('user.example.name')"/>
                <x-shared-new.validation-error name='name' />
            </div>
            <div class="form__group col-12 col-sm-6 form__left">
                <label for="" class="form__label">
                    @attrs('user.email')
                    <x-shared-new.badge type="alert" :text="@attrs('shared.required')" />
                </label>
                <input name="email" value="{{ old('email') }}" type="text" class="form__input"
                    placeholder="@attrs('shared.example')@attrs('user.example.email')"/>
                <x-shared-new.validation-error name='email' />
            </div>
            <div class="form__group col-12 col-sm-6 form__left">
                <label for="" class="form__label">
                    @attrs('user.email')
                    <x-shared-new.badge type="alert" :text="@attrs('shared.required')" />
                </label>
                <input type="password" name="password" value="{{ old('password') }}" type="text" class="form__input"/>
                <x-shared-new.validation-error name='password' />
            </div>
            <button type="submit" class="btn --md u-display-block u-mb-10">{{ __('messages.shared.confirm') }}</button>
            <a class="link u-display-block u-text-align-center"
                href="{{ route('user.index') }}">{{ __('messages.shared.back') }}</a>
        </form>
    </x-shared-new.card>
@endsection
