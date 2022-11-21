@if ($alert = session('alert'))
    <input id="toastr" type="hidden" data-type="{{ $alert['type'] }}" value="{{ $alert['message'] }}">
@endif
