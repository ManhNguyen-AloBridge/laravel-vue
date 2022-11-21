<td class="table__border --right --p-3">
	<div class="form-table__input-wrapper">
		<select {{ $attributes->merge(['class' => 'select-box --input-table ' . $attributes['class']]) }} name="{{ $attributes['name'] }}" required>
			<option value="" disabled @selected($attributes['selected'] === '')>{{$attributes['selectMessage']}}</option>
			@php $selectedItem = null; @endphp
			@foreach ($collection as $item)
				@php if ($item->id == $attributes['selected'])  $selectedItem = $item; @endphp
				<option value="{{ $item->id }}" @selected($item->id == $attributes['selected'] ?? '')>
					{{ $item->name ?? '' }}
				</option>
			@endforeach
		</select>

		<span class="select-box-label u-nowrap-space u-over-flow-auto-scroll">{{ $selectedItem?->name }}</span>
	</div>
</td>
