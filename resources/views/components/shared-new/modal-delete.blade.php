<div class="modal fade" id="{{ $id }}" tabindex="-1" aria-labelledby="{{ $id }}"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text text-xl"> {{ $title }} </h5>
            </div>
            <div class="modal-body">

                <p class="text-md">
                    <span class="fill-text-position u-word-break-all"></span>
                    <span>{{ __('views/components/shared/card_table_form.after_message') }}</span>
                </p>
            </div>
            <div class="modal-footer">
                <a class="link text-md" data-bs-dismiss="modal">{{ attrs('shared.cancel') }}</a>
                <button type="submit" class="btn --md --danger continue"
                    data-form-type="">{{ attrs('shared.delete') }}</button>
            </div>
        </div>
    </div>
</div>


