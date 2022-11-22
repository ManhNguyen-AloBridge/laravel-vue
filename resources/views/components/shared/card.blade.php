<div class="card {{ $cardClass }}">
	<div class="card-header {{ $headerClass }}">
		@if (empty($header))
			{{ $title }}
			&nbsp;
        @else
            {{ $header }}
        @endif
    </div>

    <div class="card-body {{$bodyClass}}">
        {{ $body }}
    </div>

    @if (!empty($footer))
        <div class="card-footer text-right">
            {{ $footer }}
        </div>
    @endif
</div>
