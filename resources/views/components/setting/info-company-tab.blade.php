<div class="tab-pane fade show active tab info-company" role="tabpanel" aria-labelledby="info-company-tab"
    id="info-company-tab">
    <form  class="form-read-only" action="{{ route('setting.company') }}" method="PUT" id="info-company-tab">
        @csrf
        <input type="hidden" name="_method" value="{{ $attributes->get('method') ?? 'POST' }}" />
        <input type="hidden" name="back_status" value="0" />
        <div class="info-company__header">
            <span id="text-index"
                class="info-company__title text text-xl">@trans_page('setting/payment.text_index')</span>
            <span id="text-edit" class="info-company__title text text-xl d-none">@trans_page('setting/payment.text_edit')
                <i class="fas fa-pencil-alt mr-2"></i></span>
            <span id="text-confirm"
                class="info-company__title text text-xl d-none">@trans_page('setting/payment.text_confirm')</span>
            <button id="btn-change" type="button" class="btn --md"><i
                    class="fas fa-pencil-alt mr-2"></i>@trans_page('setting/payment.btn_change')</button>
        </div>
        <div class="info-company__body">
            <x-shared-new.form-group wrapper-class="info-company__only only-df-mb" readonly="readonly"
                title="{{ @attrs('company.name') }}" name="name" value="{{ old('name', $company->name) }}"
                have-input="true" id-text="name" placeholder="{{@trans_page('setting/payment.placeholder.name')}}">
            </x-shared-new.form-group>
            <div class="info-company__mutiple">
                <x-shared-new.form-group class="input-zipcode" readonly="readonly"
                    title="{{ @attrs('company.zipcode') }}" name="zipcode"
                    value="{{ old('zipcode', $company->zipcode) }}" have-input="true" id-text="zipcode" placeholder="{{@trans_page('setting/payment.placeholder.zipcode')}}">
                </x-shared-new.form-group>
                <x-shared-new.form-group title="{{ @attrs('company.prefecture') }}" name="prefecture"
                    readonly="readonly" value="{{ old('prefecture', $company->prefecture) }}" have-input="true"
                    id-text="prefecture" placeholder="{{@trans_page('setting/payment.placeholder.prefecture')}}">
                </x-shared-new.form-group>
            </div>
            <div class="info-company__mutiple">
                <x-shared-new.form-group title="{{ @attrs('company.municipality') }}" name="municipality"
                    readonly="readonly" value="{{ old('municipality', $company->municipality) }}" have-input="true"
                    id-text="municipality" placeholder="{{@trans_page('setting/payment.placeholder.municipality')}}">
                </x-shared-new.form-group>
                <x-shared-new.form-group title="{{ @attrs('company.town_name') }}" name="town_name"
                    readonly="readonly" value="{{ old('town_name', $company->town_name) }}" have-input="true"
                    id-text="town_name" placeholder="{{@trans_page('setting/payment.placeholder.town_name')}}">
                </x-shared-new.form-group>
            </div>
            <x-shared-new.form-group wrapper-class="info-company__only only-df-mb" readonly="readonly"
                title="{{ @attrs('company.building_name') }}" name="building_name"
                value="{{ old('building_name', $company->building_name) }}" have-input="true"
                id-text="building_name" placeholder="{{@trans_page('setting/payment.placeholder.building_name')}}">
            </x-shared-new.form-group>
            <div class="info-company__mutiple">
                <x-shared-new.form-group class="input-phone" readonly="readonly"
                    title="{{ @attrs('company.phone') }}" name="phone" value="{{ old('phone', $company->phone) }}"
                    have-input="true" id-text="phone" placeholder="{{@trans_page('setting/payment.placeholder.phone')}}">
                </x-shared-new.form-group>
                <x-shared-new.form-group title="{{ @attrs('company.email') }}" name="email" readonly="readonly"
                    value="{{ old('email', $company->email) }}" have-input="true" id-text="email" placeholder="{{@trans_page('setting/payment.placeholder.email')}}">
                </x-shared-new.form-group>
            </div>
            <x-shared-new.form-group wrapper-class="info-company__only only-end " readonly="readonly"
                title="{{ @attrs('company.url') }}" name="url" value="{{ old('url', $company->url) }}"
                have-input="true" id-text="url" placeholder="{{@trans_page('setting/payment.placeholder.url')}}">
            </x-shared-new.form-group>
        </div>
        <div class="info-company__footer">
            <button id="btn-save" type="submit"
                class="btn --md d-none u-mt-40">@trans_page('setting/payment.btn_save')</button>
            <button id="btn-confirm"
                class="btn --md d-none u-mt-40">@trans_page('setting/payment.btn_confirm')</button>
            <a id="btn-cancel-change" class="d-none link" data-bs-dismiss="modal"
                href="#">@trans_page('setting/payment.btn_cancel')</a>
            <a id="btn-cancel-confirm" class="d-none link" data-bs-dismiss="modal"
                href="#">@trans_page('setting/payment.btn_cancel')</a>
        </div>
    </form>
</div>
