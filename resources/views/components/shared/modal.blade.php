<div class="modal-default modal fade" id="{{ $attributes['id'] }}" tabindex="-1" role="dialog"
    aria-labelledby="{{ $attributes['id'] }}Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            {{ $slot }}
        </div>
    </div>
</div>
