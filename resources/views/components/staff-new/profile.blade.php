@use(App\Enums\EnumIsSpouse)
@use(App\Enums\EnumGender)
@use(App\Enums\EnumUserRole)
@use(App\Enums\EnumWorkingStatus)
@php
	$userRole = Auth()->user()->role()->id;
@endphp
<div class="content-right">

    <input type="hidden" id="step" value="1">
    <input type="hidden" id="user-id" name="user_id" value="{{ $user->id }}">

    <div class="row justify-content-center">

        <form class="" action="" id="form-update-profile">
            {{ $headerContentSlot }}

            <div class="col-12 content-right__body">
                <x-shared-new.separator-label title="{{ @trans_page('profile/index.personal_info') }}"
                    class-icon="fas fa-user-alt" />
                <div class="row u-mb-38">
                    <div class="col-6  ">
                        <x-shared-new.form-group id-input="last_name" data-info="last_name"
                            wrapper-class="u-mb-14 item-info" title="{{ @attrs('user.last_name') }}"
                            class="form__input input-edit" name="last_name" readonly="readonly"
                            value="{{ old('user.last_name', $user?->last_name) }}" have-input="true" id-text="last_name"
                            badge-type="alert d-none" badge-text="{{ @attrs('shared.required') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.last_name') }}" />
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group id-input="first_name" data-info="first_name"
                            wrapper-class="u-mb-14 item-info" title="{{ @attrs('user.first_name') }}"
                            class="form__input input-edit" name="first_name" readonly="readonly"
                            value="{{ old('user.first_name', $user?->first_name) }}" have-input="true"
                            id-text="first_name" badge-type="alert d-none" badge-text="{{ @attrs('shared.required') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.first_name') }}" />
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group id-input="last_name_kana" data-info="last_name_kana"
                            wrapper-class="u-mb-14 item-info" title="{{ @attrs('user.last_name_kana') }}"
                            error_key="user.last_name_kana" class="form__input input-edit" name="last_name_kana"
                            readonly="readonly" value="{{ old('user.last_name_kana', $user?->last_name_kana) }}"
                            have-input="true" id-text="last_name_kana" badge-type="alert d-none"
                            badge-text="{{ @attrs('shared.required') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.last_name_kana') }}" />
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group id-input="first_name_kana" data-info="first_name_kana"
                            wrapper-class="u-mb-14 item-info" title="{{ @attrs('user.first_name_kana') }}"
                            error_key="user.first_name_kana" class="form__input input-edit" name="first_name_kana"
                            readonly="readonly" value="{{ old('user.first_name_kana', $user?->first_name_kana) }}"
                            have-input="true" id-text="first_name_kana" badge-type="alert d-none"
                            badge-text="{{ @attrs('shared.required') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.first_name_kana') }}" />
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group id-input="birthdate" data-info="birthdate"
                            class="date-picker input-edit" error_key="user.birthdate"
                            title="{{ @attrs('user.birthdate') }}" wrapper-class="u-mb-14 item-info date-picker"
                            name="birthdate" readonly="readonly" value="{{ old('user.birthdate', $user?->birthdate) }}"
                            have-input="true" id-text="birthdate" badge-type="alert d-none"
                            badge-text="{{ @attrs('shared.required') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.birthdate') }}" />
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group id-input="phone" data-info="phone" wrapper-class="u-mb-14 item-info"
                            title="{{ @attrs('user.phone') }}" name="phone" error_key="user.phone"
                            readonly="readonly" value="{{ old('user.phone', $user?->phone) }}"
                            class="input-phone input-edit" have-input="true" id-text="phone" badge-type=" d-none"
                            badge-text="{{ @attrs('shared.any') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.phone') }}" />
                    </div>
                    <div class="col-12 col-sm-6">
                        <x-shared-new.form-group id-input="email" data-info="email" disabled="disabled"
                            wrapper-class="u-mb-14 item-info" title="{{ @attrs('user.email') }}"
                            error_key="user.email" class="form__input input-edit" readonly="readonly"
                            value="{{ old('user.email', $user?->email) }}" have-input="true" id-text="email"
                            badge-type="alert d-none" badge-text="{{ @attrs('shared.required') }}"
                            placeholder="{{ @trans_page('profile/index.placeholder.email') }}" />
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group data-info="gender" title="{{ @attrs('user.gender') }}"
                            wrapper-class="u-mb-14 item-info" badge-type=" d-none"
                            badge-text="{{ @attrs('shared.any') }}">
                            <p class="border-bottom">
                            </p>
                            <select class="custom-select form__input  select-box" name="gender"
                                id="input-user-gender">
                                @foreach (EnumGender::cases() as $item)
                                    <option value="{{ $item->value }}" @selected(old('user.gender', $user->gender->value) == $item->value)>
                                        {{ EnumGender::from($item->value)->text() }}
                                    </option>
                                @endforeach
                            </select>
                            <input type="hidden" class="text-option-selected" name="name_gender" id="name_gender"
                                value="" />
                        </x-shared-new.form-group>
                    </div>
                    <div class="col-6 ">
                        <x-shared-new.form-group data-info="is_spouse" title="{{ @attrs('user.is_spouse') }}"
                            wrapper-class="u-mb-14 item-info" badge-type=" d-none"
                            badge-text="{{ @attrs('shared.any') }}">
                            <p class="border-bottom">
                            </p>
                            <select class="custom-select form__input  select-box" name="is_spouse"
                                id="input-user-is-spouse">
                                @foreach (EnumIsSpouse::cases() as $item)
                                    <option value="{{ $item->value }}" @selected(old('user.is_spouse', $user->is_spouse) == $item->value)>
                                        {{ EnumIsSpouse::from($item->value)->text() }}</option>
                                @endforeach
                            </select>
                            <input type="hidden" class="text-option-selected" name="name_is_spouse"
                                id="name_is_spouse" value="" />
                        </x-shared-new.form-group>
                    </div>
                </div>
                <div class="row u-mb-28">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-6">
                                <x-shared-new.form-group id-input="zipcode" data-info="zipcode"
                                    wrapper-class="u-mb-14 item-info" class="form__input input-zipcode input-edit"
                                    title="{{ @attrs('user.zipcode') }}" error_key="zipcode" name="zipcode"
                                    readonly="readonly" value="{{ old('user.zipcode', $user?->zipcode) }}"
                                    have-input="true" id-text="zipcode" badge-type=" d-none"
                                    badge-text="{{ @attrs('shared.any') }}"
                                    placeholder="{{ @trans_page('profile/index.placeholder.zipcode') }}" />
                            </div>
                            <div class="col-6">
                                <x-shared-new.form-group id-input="prefecture" data-info="prefecture"
                                    wrapper-class="u-mb-14 item-info" class="form__input input-edit"
                                    title="{{ @attrs('user.prefecture') }}" error_key="prefecture" name="prefecture"
                                    readonly="readonly" value="{{ old('user.prefecture', $user?->prefecture) }}"
                                    have-input="true" id-text="prefecture" badge-type=" d-none"
                                    badge-text="{{ @attrs('shared.any') }}"
                                    placeholder="{{ @trans_page('profile/index.placeholder.prefecture') }}" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <x-shared-new.form-group id-input="municipality" data-info="municipality"
                                    class="form__input input-edit" wrapper-class="u-mb-14 item-info"
                                    title="{{ @attrs('user.municipality') }}" error_key="municipality"
                                    name="municipality" readonly="readonly"
                                    value="{{ old('user.municipality', $user?->municipality) }}" have-input="true"
                                    id-text="municipality" badge-type=" d-none"
                                    badge-text="{{ @attrs('shared.any') }}"
                                    placeholder="{{ @trans_page('profile/index.placeholder.municipality') }}" />
                            </div>
                            <div class="col-6">
                                <x-shared-new.form-group id-input="town_name" title="{{ @attrs('user.town_name') }}"
                                    data-info="town_name" wrapper-class="u-mb-14 item-info" error_key="town_name"
                                    class="input-edit" name="town_name" readonly="readonly"
                                    value="{{ old('user.town_name', $user?->town_name) }}" have-input="true"
                                    id-text="town_name" badge-type=" d-none" badge-text="{{ @attrs('shared.any') }}"
                                    placeholder="{{ @trans_page('profile/index.placeholder.town_name') }}" />
                            </div>
                            <div class="col-6">
                                <x-shared-new.form-group id-input="building_name"
                                    title="{{ @attrs('user.building_name') }}" class="form__input input-edit"
                                    data-info="building_name" wrapper-class="u-mb-14 item-info"
                                    error_key="building_name" title="{{ @attrs('user.building_name') }}"
                                    name="building_name" readonly="readonly"
                                    value="{{ old('user.last_name_kana', $user?->building_name) }}" have-input="true"
                                    id-text="building_name" badge-type=" d-none"
                                    badge-text="{{ @attrs('shared.any') }}"
                                    placeholder="{{ @trans_page('profile/index.placeholder.building_name') }}" />
                            </div>
                        </div>
                    </div>
                </div>
                <x-shared-new.separator-label title="{{ @trans_page('profile/index.affiliation_info') }}"
                    class-icon="fas fa-briefcase" />
                <div class="row">
                    <div class="col-6 ">
                        @if ($userRole == EnumUserRole::ADMIN->value)
                            <x-shared-new.form-group data-info="department_id"
                                title="{{ @attrs('user.department_id') }}" wrapper-class="u-mb-14 item-info"
                                badge-type="alert d-none" badge-text="{{ @attrs('shared.required') }}"
                                error_key="user.department_id">
                                <p class="border-bottom u-over-flow-auto-scroll u-nowrap-space ">
                                </p>

                                <select class="form-control form__input  select-box" id="input-user-department"
                                    name="department_id">
                                    @foreach ($departments as $item)
                                        <option value="{{ $item->id }}" @selected(old('department_id', $user->department()?->id) == $item->id)>
                                            {{ $item->name }}</option>
                                    @endforeach
                                </select>
                                <input type="hidden" class="text-option-selected" name="name_department_id"
                                    id="name_department_id" value="" />
                            </x-shared-new.form-group>
                        @else
                            <x-shared-new.form-group title="{{ @attrs('user.department_id') }}"
                                data-info="department_id" wrapper-class="u-mb-14 item-info only-show">
                                <p class="border-bottom u-over-flow-auto-scroll u-nowrap-space "></p>
                            </x-shared-new.form-group>
                        @endif
                    </div>
                    <div class="col-6 ">
                        @if ($userRole == EnumUserRole::ADMIN->value)
                            <x-shared-new.form-group data-info="department_position_id"
                                title="{{ @attrs('user.department_position_id') }}" wrapper-class="u-mb-14 item-info"
                                badge-type="alert d-none" badge-text="{{ @attrs('shared.required') }}">
                                <p class="border-bottom u-over-flow-auto-scroll u-nowrap-space ">
                                </p>

                                <select class="form-control form__input  select-box"
                                    id="input-user-department-position" name="department_position_id">
                                    @foreach ($departmentPositions as $item)
                                        <option value="{{ $item->id }}" @selected(old('department_position_id', $user->departmentPosition()?->id) == $item->id)>
                                            {{ $item->name }}</option>
                                    @endforeach
                                </select>
                                <input type="hidden" class="text-option-selected" name="name_department_position_id"
                                    id="name_department_position_id" value="" />
                            </x-shared-new.form-group>
                        @else
                            <x-shared-new.form-group title="{{ @attrs('user.department_position_id') }}"
                                data-info="department_position_id" wrapper-class="u-mb-14 item-info only-show">
                                <p class="border-bottom u-over-flow-auto-scroll u-nowrap-space "></p>
                            </x-shared-new.form-group>
                        @endif
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ">
                        @if ($userRole == EnumUserRole::ADMIN->value)
                            <x-shared-new.form-group data-info="role_id" title="{{ @attrs('user.role_id') }}"
                                wrapper-class="u-mb-14 item-info" badge-type="alert d-none"
                                badge-text="{{ @attrs('shared.required') }}">
                                <p class="border-bottom">
                                </p>
                                <select class="form-control form__input  select-box" id="input-user-role-id"
                                    name="role_id">
                                    @foreach ($roles as $item)
                                        @if ($item->id != EnumUserRole::SUPER_ADMIN->value)
                                            <option value="{{ $item->id }}" @selected(old('user.role_id', $user->role()->id) == $item->id)>
                                                {{ $item->name }}</option>
                                        @endif
                                    @endforeach
                                </select>
                                <input type="hidden" class="text-option-selected" data-info="role_id"
                                    name="name_role_id" id="name_role_id" value="" />
                            </x-shared-new.form-group>
                        @else
                            <x-shared-new.form-group title="{{ @attrs('user.role_id') }}" data-info="role_id"
                                wrapper-class="u-mb-14 item-info only-show">
                                <p class="border-bottom"></p>
                            </x-shared-new.form-group>
                        @endif
                    </div>
                    <div class="col-6 ">
                        @if ($userRole == EnumUserRole::ADMIN->value)
                            <x-shared-new.form-group data-info="status_id" title="{{ @attrs('user.status_id') }}"
                                wrapper-class="u-mb-14 item-info" badge-type=" d-none"
                                badge-text="{{ @attrs('shared.any') }}">
                                <p class="border-bottom">
                                </p>
                                <select class="form-control form__input  select-box" id="input-user-status-id"
                                    name="status_id">
                                    @foreach ($status as $item)
                                        <option value="{{ $item->id }}" @selected(old('user.status_id', $user->status()?->id) == $item->id)>
                                            {{ $item->name }}</option>
                                    @endforeach
                                </select>
                                <input type="hidden" class="text-option-selected" name="name_status_id"
                                    id="name_status_id" />
                            </x-shared-new.form-group>
                        @else
                            <x-shared-new.form-group title="{{ @attrs('user.role_id') }}" data-info="status_id"
                                wrapper-class="u-mb-14 item-info only-show">
                                <p class="border-bottom"></p>
                            </x-shared-new.form-group>
                        @endif
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ">
                        @if ($userRole == EnumUserRole::ADMIN->value)
                            <x-shared-new.form-group id-input="joined_at" title="{{ @attrs('user.joined_at') }}"
                                data-info="joined_at" wrapper-class="item-info mb-0"
                                class="form__input  date-picker input-edit" error_key="joined_at" name="joined_at"
                                readonly="readonly" value="{{ old('user.joined_at', $user?->companyUser()?->joined_at) }}"
                                have-input="true" id-text="joined_at" badge-type=" d-none"
                                badge-text="{{ @attrs('shared.any') }}"
                                placeholder="{{ @trans_page('profile/index.placeholder.joined_at') }}" />
                        @else
                            <x-shared-new.form-group title="{{ @attrs('user.joined_at') }}" data-info="joined_at"
                                wrapper-class="u-mb-14 item-info only-show">
                                <p class="border-bottom d-block"></p>
                            </x-shared-new.form-group>
                        @endif
                    </div>
                    <div class="col-6 ">
                        @if ($userRole == EnumUserRole::ADMIN->value)
                            <x-shared-new.form-group id-input="leaved_at" title="{{ @attrs('user.leaved_at') }}"
                                data-info="leaved_at" wrapper-class="item-info mb-0"
                                class="form__input  date-picker input-edit" error_key="leaved_at" name="leaved_at"
                                readonly="readonly" value="{{ old('user.leaved_at', $user?->companyUser()?->leaved_at) }}"
                                have-input="true" id-text="leaved_at" badge-type=" d-none"
                                badge-text="{{ @attrs('shared.any') }}"
                                placeholder="{{ @trans_page('profile/index.placeholder.leaved_at') }}" />
                        @else
                            <x-shared-new.form-group title="{{ @attrs('user.leaved_at') }}" data-info="leaved_at"
                                wrapper-class="u-mb-14 item-info only-show">
                                <p class="border-bottom"></p>
                            </x-shared-new.form-group>
                        @endif
                    </div>
                </div>
            </div>

            <div class="content-right__footer d-none">
                <button type="submit" id="btn-submit"
                    class="btn --md --icon float-end mt-0">{{ __('messages.shared.confirm') }}</button>
                <a href="#" class="btn-back link --dark">{{ __('messages.shared.back') }}</a>
            </div>
        </form>
    </div>
</div>
