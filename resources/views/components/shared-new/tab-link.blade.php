<li class="nav-item {{$attributes->get('class-li')}}">
	<a {{ $attributes->class(['nav-link', $target.'-tab']) }} data-bs-toggle="pill"
		id="{{ $target }}-tab"
		href="#{{ $target }}" role="tab"
		aria-selected="true">{{ $title }}</a>
</li>
