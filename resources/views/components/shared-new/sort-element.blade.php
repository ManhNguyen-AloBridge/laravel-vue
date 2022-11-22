<div class="d-none d-sm-block sort-element">
	<span class="sort-element__close sort-element__item d-flex d-sm-none"><i class="fas fa-times"></i></span>
	<span class="sort-element__arrow sort-element__item" data="up">
		<i class="fas fa-chevron-up"></i>
	</span>
	<input class="sort-element__number
	 d-none d-sm-block
	 " name="{{$attributes->get('name', '')}}" type="text" readonly value="{{$attributes->get('location-sort', '')}}">
	<span class="sort-element__arrow sort-element__item" data="down">
		<i class="fas fa-chevron-down"></i>
	</span>
</div>
