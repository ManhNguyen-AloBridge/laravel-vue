<div id="redirect-page" class="child-page --hide" data-step={{ $page }}>
    <div class="shadow-wrapper card-shadow">
        <div class="u-max-width-470 mx-auto inner-shadow">
            <div class="child-page__head">
                <h3 class="child-page__head-title text-center">@trans_page('register/index.process_page.step_end')</h3>
            </div>

            <div class="register-buttons-wrap  text-center">
                <a href="{{ route('login') }}" class="btn --primary --hover-primary w-100"
                    data-step={{ $page }}>
                    @trans_page('register/index.button.redirect_login')
                </a>
            </div>
        </div>
    </div>
</div>
