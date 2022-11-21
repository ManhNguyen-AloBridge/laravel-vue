<div id="confirm-page" class="child-page --hide" data-step={{ $page }}>
    <div class="shadow-wrapper card-shadow">
        <div class="u-max-width-470 mx-auto inner-shadow">
            <div class="child-page__head">
                <h3 class="child-page__head-title  mb-3">@trans_page('register/index.process.step_two')</h3>
                <p class="text-danger">@trans_page('register/index.process_page.step_two.text_one')</p>
                <p class="mb-0">@trans_page('register/index.process_page.step_two.text_two')</p>
            </div>
            <div class="form confirm-group company">
                <h3 class="confirm-group__title">@trans_page('register/index.confirm_page_title.user')</h3>
                <div class="confirm-group__body">
                    <div class="row g-0 u-border --bottom">
                        <div class="col col-6">
                            <div class="confirm-group__data-item">
                                @attrs('user.name')
                            </div>
                        </div>
                        <div class="col col-6">
                            <div class="confirm-group__data-item u-over-flow-auto-scroll u-nowrap-space" data-user="name">

                            </div>
                        </div>
                    </div>
                    <div class="row g-0 u-border --bottom">
                        <div class="col col-6">
                            <div class="confirm-group__data-item">
                                @attrs('user.email')
                            </div>
                        </div>
                        <div class="col col-6">
                            <div class="confirm-group__data-item u-over-flow-auto-scroll u-nowrap-space" data-user="email">

                            </div>
                        </div>
                    </div>
                    <div class="row g-0 u-border --bottom">
                        <div class="col col-6">
                            <div class="confirm-group__data-item">
                                @attrs('user.password')
                            </div>
                        </div>
                        <div class="col col-6">
                            <div class="confirm-group__data-item u-over-flow-auto-scroll u-nowrap-space" data-user="password">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="register-buttons-wrap  text-center">
                <div class="row">
                    <div class="col col-6">
                        <button class="btn mt-0 --secondary --block w-100" data-step=0>
                            @trans_page('register/index.button.toFix')
                        </button>
                    </div>
                    <div class="col col-6">
                        <button type="submit" class="btn mt-0 --block w-100" data-step={{ $page }}>
                            @trans_page('register/index.button.register')
                        </button>
                    </div>
                    <div class="col col-12">
                        <a href="" class="cancel-link --link  btn mt-0" data-bs-target="#{{ $modalId }}"
                            data-bs-toggle="modal">
                            @trans_page('register/index.button.cancel')
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
