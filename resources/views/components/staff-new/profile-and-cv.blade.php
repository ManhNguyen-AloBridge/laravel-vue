@php

$classShow = 'active';
$classCv = null;
if (request()->is('*/cv')) {
    $classShow = null;
    $classCv = 'active';
}
$routeName = Route::currentRouteName();
$permissionEditCv = 'edit-cv-staff';

if ($routeName == 'profile.index') {
    $permissionEditCv = 'profile';
}
@endphp

<x-shared-new.tabs data-page="{{ $routeName }}" :data-prev-route="$routePrev" prev-url="{{$routePrev ? route($routePrev) : '' }}">
    <x-slot:links>
        <x-shared-new.tab-link class="{{ $classShow }}" target='profile-user' :title="@trans_page('profile/index.basic_info_title')" />
        <x-shared-new.tab-link class="{{ $classCv }}" target='cv-user' :title="@trans_page('staff/cv.page_title')" />
    </x-slot:links>
    <x-slot:panes>
        <x-shared-new.tab-pane id="profile-user" class="show {{ $classShow }} profile-page">
            <x-staff-new.profile :user="$user" :departments="$departments" :department-positions="$departmentPositions" :roles="$roles"
                :status="$status">
                <x-slot name="headerContentSlot">
                    {{ $headerContentSlot }}
                </x-slot>
            </x-staff-new.profile>
        </x-shared-new.tab-pane>
        <x-shared-new.tab-pane id="cv-user" class="show {{ $classCv }}">
            <x-staff-new.cv :user="$user" :title="@trans_page('staff/cv.page_title')" />
            @if (Gate::allows('check-permission', $permissionEditCv))
                <x-staff-new.edit-cv :staff="$user" :is-confirm="false" />
            @endif

        </x-shared-new.tab-pane>
    </x-slot:panes>
</x-shared-new.tabs>
