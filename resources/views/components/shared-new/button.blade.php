<button {{$attributes->merge(['class' => $attributes->prepends('btn'), 'type' => 'submit'])->whereDoesntStartWith('title')}}>
{{$attributes->get('title', '')}}
</button>
