@props(['breadscrumbs', 'isSupperAdmin'])
<div class="header">
    <div class="row m-0">
        <div class="breadscrumb col-2 col-lg-8 col-xl-7 d-flex align-items-center p-0">
            <ol class="breadcrumb float-sm-right p-0 m-0 d-flex">
                <li class="breadcrumb-item"><a class="link --dark" href="{{ $isSupperAdmin ? route('companies.index') : route('dashboard') }}">{{ __('views/layout/header.home') }}</a>
                </li>
                @foreach ($breadscrumbs as $breadscrumb)
                @if (isset($breadscrumb['route']))
                <li class="breadcrumb-item added-item">
                    <a class="link --dark" href="{{ $breadscrumb['route'] }}">{{ $breadscrumb['title'] }}</a>
                </li>
                @else
                <li class="breadcrumb-item active added-item">{{ $breadscrumb['title'] }}</li>
                @endif
                @endforeach
            </ol>
        </div>
    </div>
</div>