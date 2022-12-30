@extends('app_new', ['breadscrumbs' =>
    [
        [
            'title' => @trans_page('dashboard/index.page_title')
        ]
    ]
])
@use(App\Enums\EnumSortUserType)
@section('inner-title')
    <i class="fas fa-building" style="margin-right: 1.5rem; font-size: 1.9rem; "></i>@trans_page('dashboard/index.page_title')
@endsection

@section('title-content-vertical')
    @trans_page('dashboard/index.title_content_vertical')
@endsection

@php
$headers = [
    'id' => ['title' => 'Id'],
    'name' => ['title' => 'Name', 'class' => 'name'],
    'email' => ['title' => 'Email', 'class' => 'email']
];
$headers2 = [
    'select' => ['title' => 'checkbox', 'class' => 'no-sort'],
    'id' => ['title' => 'Id'],
    'name' => ['title' => 'Name', 'class' => 'u-text-align-left t-head-name'],
    'email' => ['title' => 'Email', 'class' => 'u-text-align-left t-head-email'],
    'action' => ['title' => 'Action', 'class' => 'u-text-align-left t-head-action'],
];
$dataSetting = [
    "cc" => ["tuld@gmail.cc","asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@asdasd.asd"],
    "bcc" => ["asds@asdas.asd"]
];
$user_id = auth()->user()->id;
$modalTitleLevel = trans_page('setting/index.skill_level');
$columnsLevel = [
    [
        'class' => '--sm text-center u-pl-15',
        'input_class' => 'text-center u-pl-15',
        'title' => attrs('level.by_level'),
        'key' => 'level',
        'edit' => true,
        'col-th' => '--sm',
        'type' => 'number',
        'placeholder' => trans_page('setting/index.placeholder_number')
    ],
    [
        'title' => attrs('level.level_criteria'),
        'key' => 'name',
        'edit' => true,
        'pr-5' => 'pr-5',
        'type' => 'text',
        'placeholder' => trans_page('setting/index.placeholder_name')
    ],
];
$modalTitleSkill = trans_page('setting/index.skill');
$columnsSkill = [
    [
        'class' => '--sm text-center u-pl-15',
        'input_class' => 'text-center u-pl-15',
        'title' => attrs('skill.category.label'),
        'key' => 'category_id',
        'edit' => true,
        'col-th' => '--sm',
        'type' => 'select',
        'pr-5' => 'pr-5'
    ],
    [
        'title' => attrs('skill.name'),
        'key' => 'name',
        'edit' => true,
        'pr-5' => 'pr-5',
        'type' => 'text'
    ],
];
$isConfirm = false;
@endphp

@section('content')
    <x-shared-new.card title="Header">
        <div class="row">
            <div class="col-12">
                <x-shared-new.separator-label title="{{ @trans_page('profile/index.personal_info') }}"
                    class-icon="fas fa-user-alt" />
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Select box">
        <!-- <div class="row">
            <div class="col-12">
                <div class="form__row">
                    <label for="" class="form__label short-label">Select checkbox</label>
                    <x-shared-new.select-checkbox title="Show all" title-class="title-skills">
                        <x-shared-new.select-checkbox-item label-class="--selected" id="slc-all-skills"
                            title="All" data-select="all" checked />
                        <x-shared-new.select-checkbox-item
                            id="slc-skill-1" value="1" title="One" label-class="--selected"
                            name="skill[]" checked />
                        <x-shared-new.select-checkbox-item
                            id="slc-skill-2" value="2" title="Two"
                            name="skill[]" />
                        <x-shared-new.select-checkbox-item
                            id="slc-skill-3" value="3" title="'hree"
                            name="skill[]" />
                    </x-shared-new.select-checkbox>
                </div>
            </div>
        </div> -->

        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Select and or</label>
                <div class="select-checkbox">
                    <x-shared-new.select-and-or class="form__control" :collection="$listSkill" name="skills[]"
                        :option-name="'option_skills'">
                    </x-shared-new.select-and-or>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Select box</label>
                <div class="select-checkbox">
                    <x-shared-new.select-box class="user-list__sort-options">
                        @foreach (EnumSortUserType::cases() as $item)
                            <option value="{{ $item->value }}">{{ $item->text() }}</option>
                        @endforeach
                    </x-shared-new.select-box>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Select check box</label>
                <x-shared-new.select-checkbox :title="trans_page('dashboard/index.show_all')" title-class="title-skills">
                    <x-shared-new.select-checkbox-item label-class="--selected" id="slc-all-skills"
                        :title="trans_page('dashboard/index.show_all')" data-select="all" checked />
                    @foreach ($skills as $skill)
                        <x-shared-new.select-checkbox-item label-class="--selected"
                            id="slc-skill-{{ $skill->id }}" :value="$skill->id" :title="$skill->name"
                            name="skill[]" checked />
                    @endforeach
                </x-shared-new.select-checkbox>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Form search">
        <div class="row">
            <div class="col-12">
                <x-shared-new.search-form title="Title form search">
                    <x-shared-new.search-box placeholder="placeholder" search-box-class="form__control d-block" name="keyword"
                        value="" />
                    <x-shared-new.divider></x-shared-new.divider>
                </x-shared-new.search-form>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Table">
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Table no checkbox</label>
                <x-shared-new.data-table noti-list="true" :titles="$headers">
                    <tr>
                        <td>1</td>
                        <td>Name</td>
                        <td>e@mail.com</td>
                    </tr>
                </x-shared-new.data-table>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Table with checkbox</label>
                <x-shared-new.data-table :titles="$headers2">
                    <tr>
                        <td>
                            <x-shared-new.check-box class="checkbox-item" id="1" name="users[]" value="1" />
                        </td>
                        <td>1</td>
                        <td>One</td>
                        <td>one@mail.com</td>
                        <td>
                            <a class="link-detail" href="#">
                                <i class="nav-icon fas fa-file-alt icon-file"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <x-shared-new.check-box class="checkbox-item" id="2" name="users[]" disabled value="2" />
                        </td>
                        <td>2</td>
                        <td>Two</td>
                        <td>two@mail.com</td>
                        <td>
                            <a class="link-detail" href="#">
                                <i class="nav-icon fas fa-file-alt icon-file"></i>
                            </a>
                        </td>
                    </tr>
                </x-shared-new.data-table>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Form input table</label>
                <x-shared-new.form-table-input
                    :card-title="trans_page('setting/index.skill_level')"
                    :card-content="trans_page('setting/index.skill_level_content')"
                    :btn-add="trans_page('setting/index.add_skill_level_btn')"
                    :columns="$columnsLevel"
                    :collection="$skillLevels"
                    :modalTitle="$modalTitleLevel"
                    :model="'level'" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Form table select</label>
                <x-shared-new.form-table-select
                    :card-title="trans_page('setting/index.skill')"
                    :card-content="trans_page('setting/index.skill_content')"
                    :btn-add="trans_page('setting/index.add_skill_btn')"
                    :columns="$columnsSkill"
                    :collection="$skills"
                    :choices="$skillCategories"
                    :modalTitle="$modalTitleSkill"
                    :model="'skill'" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Item setting</label>
                <x-setting-new.item-setting
                    :title="@trans_page('setting/index.qualification')"
                    :content="@trans_page('setting/index.qualification_content')"
                    route="qualification.store"
                    base-part="setting/index"
                    form="qualification"
                    :list-data="$qualifications"
                    :placeholder="@trans_page('setting/index.placeholder_qualification')"
                    :btnAdd="@trans_page('setting/index.add_qualification_btn')"
                    id-card="qualification-content" />
            </div>
        </div>
        <div class="row">
            <label for="" class="form__label">Card Table</label>
            <div class="col-md-12">
                <x-shared-new.card-table form="department" route-name="department.store" base-part="department/index" :list-data="$listDepartment"
                    :title="trans_page('department/index.department_list')" :modal-title="trans_page('department/index.title_modal_department_delete')" :button-add="trans_page('department/index.new_department')"
                    placeholder="{{ trans_page('department/index.department_placeholder') }}"></x-shared-new.card-table>
            </div>
            <div class="col-md-12">
                <x-shared-new.card-table form="position" route-name="position.store" base-part="department/index" :list-data="$listPosition"
                    :title="trans_page('department/index.position_list')" :modal-title="trans_page('department/index.title_modal_position_delete')" :button-add="trans_page('department/index.new_position')"
                    placeholder="{{ trans_page('department/index.position_placeholder') }}">
                </x-shared-new.card-table>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Form input">
        <div class="row">
            <div class="col-12">
                <div class="mail-send-cv">
                    <form action="#" method="POST">
                        <x-shared-new.form-group wrapper-class="d-flex align-items-center justify-content-sm-between u-mb-77 item-form mail-body"
                            title="Cc">
                            <div class="field-input">
                                <x-shared-new.tag-box class="w-1000 --sm float-end input-field" :data-setting="$dataSetting"
                                    tag-class="--primary --sm" name="cc">
                                </x-shared-new.tag-box>
                            </div>
                        </x-shared-new.form-group>
                        <x-shared-new.form-group wrapper-class="d-flex align-items-center justify-content-sm-between item-form field-bcc mail-body"
                            title="Bcc">
                            <div class="field-input">
                                <x-shared-new.tag-box class="w-1000 --sm float-end input-field" :data-setting="$dataSetting"
                                    tag-class="--primary --sm" name="bcc">
                                </x-shared-new.tag-box>
                            </div>
                        </x-shared-new.form-group>
                        <x-shared-new.form-group wrapper-class="col-md-12" title="Checkbox" error_key="template_id">
                            <p class="content-title">Demo checkbox element</p>
                            <x-shared-new.check-box title="'Checked'" checked name="'checkbox1'" value="1">
                            </x-shared-new.check-box>
                            <x-shared-new.check-box title="'No checked'" name="'checkbox1'" value="2">
                            </x-shared-new.check-box>
                        </x-shared-new.form-group>
                    </form>
                </div>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Tab">
        <div class="row">
            <div class="col-12 payment-page">
                <x-shared-new.tabs>
                    <x-slot:links>
                        <x-shared-new.tab-link class="active" target="info-company-tab" class-li="d-none-res-425"
                            title="{{ @trans_page('setting/payment.about_us') }}">
                        </x-shared-new.tab-link>
                        <x-shared-new.tab-link target="tab-invoices" title="{{ @trans_page('setting/payment.payment_history') }}" class-li="d-none-res-425">
                        </x-shared-new.tab-link>
                    </x-slot:links>
                    <x-slot:panes>
                        <x-setting.info-company-tab :company="$company" />
                        <x-setting.invoices-tab :invoices="$invoices" />
                    </x-slot:panes>
                </x-shared-new.tabs>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Button">
        <div class="row">
            <div class="col-12">
                <x-shared-new.button class="--block u-with-100-percent" title="{{ @trans_page('auth/login.btn_submit') }}" />
            </div>
        </div>
        <x-shared-new.divider></x-shared-new.divider>
        <div class="row">
            <div class="col-12">
            <x-shared-new.button class="btn --primary --md form__btn" title="{{ @trans_page('mail-setting/edit.button_save') }}" />
            </div>
        </div>
        <x-shared-new.divider></x-shared-new.divider>
        <div class="row list-staff-page">
            <div class="col-12 card__body__header">
                <x-shared-new.icon-button type="button" class="btn --outline-primary-text btn-download width-btn" data-bs-toggle="modal" data-bs-target="#download-cv-modal" title="Pdf button" :icon="'fa-file-pdf'" :content="trans_page('staff/index.btn_download')" />
                <x-shared-new.icon-button type="submit" class="btn --outline-primary-text btn-disable width-btn disabled" disabled title="Mail button" :icon="'fa-envelope'" :content="trans_page('staff/index.btn_send_mail')" />
            </div>
        </div>
        <x-shared-new.divider></x-shared-new.divider>
        <div class="row">
            <div class="col-12">
                <x-shared-new.link-button class="btn --md --icon float-end" title="Link button" id="btn-go-to-edit-cv" :icon="'fa-pencil-alt'" :content="@trans_page('staff/cv.edit')" />
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Badge">
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">
                    @attrs('user.name')
                    <x-shared-new.badge class="ms-0" type="alert" :text="@attrs('shared.required')" />
                </label>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Input">
        <div class="row">
            <div class="col-12">
                <label for="" class="form__label">Search input</label>
                <form action="">
                    <div class="search-group">
                        <x-shared-new.search-box :placeholder="@trans_page('company/index.placeholder')" search-box-class="form__control d-block" name="keyword"
                            value="{{ request('keyword') }}">
                        </x-shared-new.search-box>
                    </div>
                </form>
            </div>
        </div>
    </x-shared-new.card>

    <x-shared-new.card title="Breadcrumb">
        <div class="row">
            <div class="col-12">
                <x-shared-new.breadcrumb :breadscrumbs="$breadscrumbs" :isSupperAdmin="$isSupperAdmin"></x-shared-new.breadcrumb>
            </div>
        </div>
    </x-shared-new.card>

    <!-- Modal -->
    <x-shared-new.modal id="download-cv-modal">
        <div class="modal-header">
            <h5 class="modal-title text text-xl" id="download-cv-modal-label">@trans_page('staff/index.btn_download')</h5>

        </div>
        <form id="form-download" class="d-inline-block" action="{{ route('staffs.cv.zip-download') }}" method="POST">
			@csrf
            <div class="modal-body">
                <x-shared-new.form-group wrapper-class="col-md-12 mb-4" :title="@attrs('user.name_list')">
                    <div id="list-name-staff-download"></div>
                </x-shared-new.form-group>
                <div class="" id="list-input-mail-download"></div>
                <x-shared-new.check-box :title="@trans_page('setting/resume.hidden_name')" id="is-hidden" name="is_name_hidden_downloading"
                    value="1">
                </x-shared-new.check-box>
            </div>
            <div class="modal-footer">
                <a class="link text-lg" data-bs-dismiss="modal">{{ attrs('shared.cancel') }}</a>
                <button target="_blank" type="submit" class="btn btn-primary p-1 u-mb-0"
                    data-bs-dismiss="modal">@trans_page('staff/index.btn_download-modal')</button>
            </div>
        </form>
    </x-shared-new.modal>
@endsection

@section('after-scripts')
    <script src="{{ mix('assets/js/pages/dashboard/index.js') }}" defer></script>
    <script defer src="{{ mix('assets/js/components/show-input-in-list.js') }}"></script>
    <script defer src="{{ mix('assets/js/pages/setting/index.js') }}"></script>
    <script defer src="{{ mix('assets/js/components/form-table-input.js') }}"></script>
    <script defer src="{{ mix('assets/js/components/form-table-select.js') }}"></script>
    <script defer src="{{ mix('assets/js/components/modal-delete.js') }}"></script>
@endsection
