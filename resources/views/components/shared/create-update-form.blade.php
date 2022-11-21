<form {{ $attributes->except(['method']) }} method="POST">
    @csrf
    <input type="hidden" name="_method" value="{{ $attributes->get('method') ?? 'POST' }}" />
    <input type="hidden" name="back_status" value="0" />
    <div class="row">
        <div class="col-md-12">
            <x-shared.card :card-class="$cardClass">
                @if (!empty($header))
                    <x-slot:header>
                        {{ $header }}
                    </x-slot:header>
                @endif

                <x-slot:body>
                    <div class="row">
                        {{ $slot }}
                    </div>
                </x-slot:body>

                <x-slot:footer>
                    @if (!empty($actions))
                        {{ $actions }}
                    @endif
                </x-slot:footer>
            </x-shared.card>
        </div>
    </div>
</form>
