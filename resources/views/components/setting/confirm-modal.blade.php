<div class="modal fade" id="{{ $attributes->get('modal-id') }}" tabindex="-1" role="dialog"
    aria-labelledby="example-modal-label" aria-hidden="true">
    <div class="modal-main">
        <form {{ $attributes->except(['method']) }} method="POST">
            @method($attributes->get('method', 'POST'))
            @csrf
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text text-xl u-lh-17" id="example-modal-label">
                            {{ $headerTitle }}
                        </h5>
                    </div>
                    <div class="modal-body">
                        {{ $body }}
                    </div>
                    <div class="modal-footer card-footer">
                        {{ $footer }}
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
