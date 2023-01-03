@use(App\Enums\EnumUserRole)

<aside class="main-sidebar d-none d-lg-block">
    <div class="main-sidebar__header">
        <a href="#">
            <span class="text text-7xl u-nowrap-space">YYYY_YYYY</span>
            {{-- <span class="text text-3xs u-nowrap-space">{{ __('views/layout/sidemenu.header_description') }}</span> --}}
        </a>
        <button class="d-flex d-lg-none" id="btn-close-sidebar"><i class="fas fa-arrow-left"></i></button>
    </div>
    <div class="sidemenu">
        <nav class="">
            <ul class="nav nav-pills nav-sidebar flex-column">
                <li class="nav-item main-item">
                    <a href="#" class="nav-link active py-4">
                        <i class="nav-icon fa-fw fas fa-building"></i>
                        <p class="nav-text">{{ __('views/layout/sidemenu.dashboard') }}</p>
                    </a>
                </li>
                <li class="nav-item main-item">
                    <a href="{{ route('user.list') }}" class="nav-link active py-4">
                        <i class="nav-icon fa-fw fas fa-user"></i>
                        <p class="nav-text">{{ __('views/layout/sidemenu.list_user') }}</p>
                    </a>
                </li>
                <li class="nav-item main-item">
                    <a href="{{ route('room.list') }}" class="nav-link active py-4">
                        <i class="nav-icon fa-fw fas fa-house-user"></i>
                        <p class="nav-text">{{ __('views/layout/sidemenu.list_room') }}</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
