<div id="user-page" class="child-page" data-step={{ $page }}>
    <div class="shadow-wrapper card-shadow ">
        <div class="u-max-width-470 mx-auto inner-shadow">
            <div class="child-page__head">
                <h3 class="child-page__head-title  mb-3">@trans_page('register/index.process.step_one')</h3>
                <p class="mb-0">@trans_page('register/index.process_page.step_one.text_one')</p>
            </div>
            <div class="form">
                <div class="form__group">
                    <label for="" class="form__label">@attrs('user.name')<x-shared-new.badge class="ms-0" type="alert" :text="@attrs('shared.required')" />
                    </label>
                    <input type="text" name="name" class="form__input"
                        placeholder="@attrs('shared.example')@attrs('user.example.name')">
                </div>
                <div class=" form__group">
                    <label for="" class="form__label">
                        @attrs('user.email')<x-shared-new.badge type='alert' :text="@attrs('shared.required')" />
                    </label>
                    <input type="email" name="email" class="form__input"
                        placeholder="@attrs('shared.example')@attrs('user.example.email')">
                </div>
                <div class=" form__group">
                    <label for="" class="form__label">
                        @attrs('user.password')<x-shared-new.badge type='alert' :text="@attrs('shared.required')" />
                    </label>
                    <input type="password" name="password" class="form__input">
                </div>
                <div class=" form__group">
                    <label for="" class="form__label">
                        @attrs('user.password_confirmation')<x-shared-new.badge type='alert' :text="@attrs('shared.required')" />
                    </label>
                    <input type="password" name="password_confirmation" class="form__input">
                </div>
            </div>
            <div class="register-buttons-wrap text-center">
                <button type="submit" class="btn mt-0 --block w-100" data-step={{ $page }}>
                    @trans_page('register/index.button.next')
                </button>
                <a href="" class="cancel-link --link  btn mt-0" data-bs-target="#{{ $modalId }}"
                    data-bs-toggle="modal">
                    @trans_page('register/index.button.cancel')
                </a>
            </div>
        </div>
    </div>
</div>
