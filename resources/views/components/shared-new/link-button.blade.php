@props(['icon', 'content'])
<a href="#" {{ $attributes }}>
    <i class="fas {{ $icon }}"></i> 
    {{ $content }}
</a>