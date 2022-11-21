<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('dashboard') }}" class="brand-link">
        <img src="{{ asset('assets/img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">{{ auth()->user()->company?->name }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column">
                <li class="  nav-item main-item">
                    <a href=" https://localhost/companies" class="nav-link active
                        py-4">
                        <i class="nav-icon fa-fw fas fa-building"></i>
                        <p class="nav-text">会社一覧</p>
                    </a>
                </li>
                <li class="  nav-item main-item">
                    <a href=" https://localhost/prices" class="nav-link 
                        py-4">
                        <i class="nav-icon fa-fw fas fa-list-alt"></i>
                        <p class="nav-text">価格一覧</p>
                    </a>
                </li>
                <li class="  nav-item main-item">
                    <a href=" https://localhost/maintenances" class="nav-link 
                        py-4">
                        <i class="nav-icon fa-fw fas fa-tools"></i>
                        <p class="nav-text">メンテナンススケジュール</p>
                    </a>
                </li>
                <li class="  nav-item main-item">
                    <a href=" https://localhost/notifications" class="nav-link 
                        py-4">
                        <i class="nav-icon fa-fw fas fa-bell"></i>
                        <p class="nav-text">お知らせ一覧</p>
                    </a>
                </li>
                <li class="  nav-item main-item">
                    <a href=" https://localhost/invitation-codes" class="nav-link 
                        py-4">
                        <i class="nav-icon fa-fw fas fa-percent"></i>
                        <p class="nav-text">招待コード一覧</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
