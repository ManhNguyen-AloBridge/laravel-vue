@props(['icon', 'content'])
<button {{$attributes->merge(['class' => $attributes->prepends('btn')])}}>
    <i class="fas {{ $icon }} mr-4"></i>
    {{ $content }}
</button>
