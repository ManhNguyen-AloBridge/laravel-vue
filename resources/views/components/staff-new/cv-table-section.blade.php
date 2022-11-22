<h3 class="card__title">
    {{ $attributes['title'] }}
</h3>
<table class="table --bordered table-bordered" style="table-layout: fixed">
    <thead>
        <tr>
            <th  {{ $attributes->merge(['class' => '' . $attributes['class']]) }}>
                {{ $attributes['dateTitle'] }}
            </th>
            <th>{{ $attributes['contentTitle'] }}
            </th>
        </tr>
    </thead>
    {{ $slot }}
</table>
