<div class="header border-bottom ">
    <div class="row m-0">
        <div class="breadscrumb col-2 col-lg-8 col-xl-7 d-flex align-items-center p-0">
            <button class="d-flex" id="btn-open-sidebar"><i class="fas fa-bars"></i></button>
            <ol class="breadcrumb float-sm-right p-0 m-0 d-flex">
                <li class="breadcrumb-item"><a class="link --dark"
                        href="#">{{ __('views/layout/header.home') }}</a>
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
        <div class="navbar col-10 col-lg-4 col-xl-5 d-flex align-items-center p-0">
            <ul class="navbar m-0 ms-auto">
                <li class="dropdown navbar__dropdown">
                    <p class="dropdown-toggle navbar__user-info m-0 ps-sm-4" id="child-menu" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <span class="m-0 navbar__name company-name  text-info-header">{{ Str::limit('User Name', 13, '...') }}</span>
						<i class="fas fa-user"></i>
                    </p>
                    <div class="dropdown-menu navbar__dropdown-menu p-0" aria-labelledby="child-menu">
                        <div class="row m-0 h-100 navbar__dropdown-content card-shadow">
                            <div class="col-12 d-flex align-items-center justify-content-end p-0">
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-sign-out-alt"></i>
                                    {{ __('views/layout/header.logout') }}
                                </a>
                            </div>
                            <div class="col-5 p-0">
                                <img class="navbar__avatar" src="{{ asset('assets/img/avatar-default.png') }}"
                                    alt="">
                            </div>
                            <div class="col-7 p-0">
                                <ul class="navbar__link p-0" aria-labelledby="child-menu">
                                    <li>
                                        <a href="#" class="dropdown-item w-100">
                                            {{ __('views/layout/header.change_password') }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
