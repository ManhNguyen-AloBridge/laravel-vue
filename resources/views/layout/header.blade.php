<nav class="main-header navbar navbar-expand navbar-white navbar-light header">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a class="nav-link header__user-nav" data-toggle="dropdown" href="#">
                <span class="header__user-name">
                    {{ Str::limit(Auth::user()->name, 20, '...') }}
                </span>
                <i class="fas fa-caret-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                @if (Gate::allows('check-permission', 'profile'))
                    <a href="{{ route('profile.index') }}" class="dropdown-item">
                        <i class="fas fa-user"></i>
                        {{ __('views/layout/header.profile') }}
                    </a>
                    <div class="dropdown-divider"></div>
                @endif
                <!-- <a href="{{ '#' }}" class="dropdown-item">
                    <i class="fas fa-key"></i>
                    {{ __('views/layout/header.change_password') }}
                </a> -->
                <div class="dropdown-divider"></div>
                <a href="{{ route('logout') }}" class="dropdown-item">
                    <i class="fas fa-sign-out-alt"></i>
                    {{ __('views/layout/header.logout') }}
                </a>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                <i class="fas fa-expand-arrows-alt"></i>
            </a>
        </li>
    </ul>
</nav>
