<div class="select-checkbox">
	<div class="select-checkbox__selection {{$attributes->get('title-class')}}">
		{{ $attributes->get('title') }}
	</div>
	<ul class="select-checkbox__list">
		{{ $slot }}
	</ul>
</div>
