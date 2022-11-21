<form class="form" {{ $attributes->except(['method']) }} method="POST">
    @csrf
    <input type="hidden" name="_method" value="{{ $attributes->get('method') ?? 'POST' }}" />
    <input type="hidden" name="back_status" value="0" />

    <div class="row">
        {{ $slot }}
    </div>

</form>
