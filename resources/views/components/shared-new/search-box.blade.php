<div class="search-box {{ $attributes->get('search-box-class', '') }}">
	@if($slot->isEmpty())
    <input {{ $attributes->merge(['class' => $attributes->prepends('search-box__input')])->whereDoesntStartWith('action') }}>
    <button class="search-box__btn {{ $attributes->get('btn-class', '') }}">{!! $icon ?? '<i class="fas fa-search search-box--icon"></i>' !!}</button>

	@else
	{{ $slot }}
	@endif

</div>