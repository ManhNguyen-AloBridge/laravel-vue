<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <title>@yield('title', 'Document')</title>
    {{-- <link rel="apple-touch-icon" type="image/x-icon" href="{{ mix('assets_new/img/favicon.png') }}"> --}}
    {{-- <link rel="icon" href="{{ mix('assets_new/img/favicon.png') }}"> --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @yield('before-styles')
    <link href="{{ mix('assets_new/css/app.css') }}" rel="stylesheet">
    @yield('after-styles')
    <!--Script -->
    @yield('before-scripts')

    <script defer src="{{ mix('assets_new/js/app.js') }}"></script>
    @yield('after-scripts')
</head>

<body class="{{ $page ?? '' }}">
    <x-shared.toastr></x-shared.toastr>
    @if ($usingLayout ?? true)
        {{-- @include('layout_new.sidebar') --}}

        <section class="main-content">
            {{-- @include('layout_new.header', ['breadscrumbs' => $breadscrumbs ?? []]) --}}

            <div class="container">
                <section class="@yield('content-class')">
                    <div class="main-content-heading">
                        <div class="main-content-heading-main">
                            <div class="main-content-heading-main__content">
                                <h1 class="m-0 text-2xl page-title">@yield('inner-title')</h1>
                            </div>
                            <div class="main-content-heading-main__note">
                                @yield('note-title')
                            </div>
                        </div>
                        <div class="main-content-heading__sub">@yield('inner-description')</div>
                        <div class="m-0 title-content-vertical">@yield('title-content-vertical')</div>
                    </div>
                    @yield('content')
                </section>
                @yield('right-content')
            </div>
            @include('layout_new.footer')
        </section>
    @else
        @yield('content')
    @endif
    @include('layout_new.loading')
</body>

</html>
