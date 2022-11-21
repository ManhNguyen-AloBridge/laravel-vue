<li class="select-checkbox__item {{ $attributes->get('label-class') }}">
	@if (!$slot->isEmpty())
		{{ $slot }}
	@else
	<label for="{{ $attributes->get('id') }}" class="select-checkbox__label-checkbox">
		<x-shared-new.check-box checkbox-class='select-checkbox__checkbox' {{ $attributes }}></x-shared-new.check-box>
	</label>
	@endif
</li>
