@use(App\Enums\EnumUserRole)

<aside class="main-sidebar d-none d-lg-block">
    <div class="main-sidebar__header">
        <a href="#">
            <span class="text text-7xl u-nowrap-space">Skill-Repo</span>
            <span class="text text-3xs u-nowrap-space">{{ __('views/layout/sidemenu.header_description') }}</span>
        </a>
        <button class="d-flex d-lg-none" id="btn-close-sidebar"><i class="fas fa-arrow-left"></i></button>
    </div>
    <div class="sidemenu">
        <nav class="">
            <ul class="nav nav-pills nav-sidebar flex-column">
                <li class="nav-item main-item">
                    <a href="https://localhost/admin/" class="nav-link active py-4">
                        <i class="nav-icon fa-fw fas fa-building"></i>
                        <p class="nav-text">Dashboard</p>
                    </a>
                </li>
                <li class="nav-item main-item">
                    <a href="https://localhost/admin/users" class="nav-link active py-4">
                        <i class="nav-icon fa-fw fas fa-building"></i>
                        <p class="nav-text">会社一覧</p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
