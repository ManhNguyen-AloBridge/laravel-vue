@use(App\Enums\EnumIsSpouse)
<div class="content-right">
	<div class="row">
		<div class="col-6 pb-2 pl-0 d-flex align-items-center profile-page__title">
			@trans_page('profile/index.basic_info_title')
		</div>


		@if (Gate::allows('check-permission', 'edit-staff'))
			<div class="col-6 pb-2 pr-0">
				<a href="{{ route('staffs.edit', ['staff' => $user->id]) }}"
					class="btn --md --icon --primary float-end mt-0">
					<span><i
							class="fas fa-pencil-alt mr-2"></i>@trans_page('staff/show.btn_edit')</a></span>
			</div>
		@endif

		<div class="col-12">
			<div class="row u-mb-38">
				<x-shared-new.separator-label title="{{ @trans_page('profile/index.personal_info') }}" class-icon="fas fa-user-alt"/>
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.last_name') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->last_name }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.first_name') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->first_name }}"/>
				</div>
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.last_name_kana') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->last_name_kana }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.first_name_kana') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->first_name_kana }}"/>
				</div>
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.birthdate') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->birthdate }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.phone') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->phone }}"/>
				</div>
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.email') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->email }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.gender') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->gender?->text() }}"/>
				</div>
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.is_spouse') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ EnumIsSpouse::from(intval($user->is_spouse))->text() }}"/>
				</div>
			</div>
			<div class="row u-mb-28">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-6 pl-0">
							<x-shared-new.form-group title="{{ @attrs('user.zipcode') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $zipcode }}"/>
						</div>
						<div class="col-md-6 pr-0">
							<x-shared-new.form-group title="{{ @attrs('user.prefecture') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->prefecture }}"/>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 pl-0">
							<x-shared-new.form-group title="{{ @attrs('user.municipality') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->municipality }}"/>
						</div>
						<div class="col-md-6 pr-0">
							<x-shared-new.form-group title="{{ @attrs('user.town_name') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->town_name }}"/>
						</div>
						<div class="col-md-6 pl-0">
							<x-shared-new.form-group title="{{ @attrs('user.building_name') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->building_name }}"/>
						</div>
					</div>
				</div>
			</div>
			<x-shared-new.separator-label title="{{ @trans_page('profile/index.affiliation_info') }}" class-icon="fas fa-briefcase"/>
			<div class="row">
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.department_id') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->department()?->name }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.department_position_id') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->departmentPosition()?->name }}"/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.role_id') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->userRole->name }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.status_id') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->status()?->name }}"/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 pl-0">
					<x-shared-new.form-group title="{{ @attrs('user.joined_at') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->companyUser()?->joined_at }}"/>
				</div>
				<div class="col-md-6 pr-0">
					<x-shared-new.form-group title="{{ @attrs('user.leaved_at') }}" wrapper-class="u-mb-14" readonly="readonly" value="{{ $user->companyUser()?->leaved_at }}"/>
				</div>
			</div>
		</div>
	</div>
</div>
