@php
$headers = [
    'payment_date' => ['title' => trans_page('setting/payment.payment_date')],
    'trading_code' => ['title' => trans_page('setting/payment.trading_code')],
    'payment_details' => ['title' => @trans_page('setting/payment.payment_details'), 'class' => 'u-nowrap-space'],
    'payment_method' => ['title' => @trans_page('setting/payment.payment_method')],
    'total_money' => ['title' => @trans_page('setting/payment.total_money')],
];
@endphp

<div class="tab-pane fade tab invoices" id="tab-invoices" role="tabpanel" aria-labelledby="payment-history-tab">
	<span class="invoices__title text text-xl">@trans_page('setting/payment.payment_history')</span>
	<x-shared-new.data-table :titles="$headers">
		@foreach ($invoices as $invoice)
			@php
				$card = $invoice->payment_intent?->payment_method?->card;
			@endphp
			<tr>
				<td class="u-nowrap-space">{{ $invoice->date()->format('Y/m/d') }}</td>
				<td class="u-nowrap-space"> <a href="{{ $invoice->hosted_invoice_url }}"
						target="_blank">#{{ $invoice->number }}</a></td>
				<td class="u-nowrap-space">{{ $invoice->description }}</td>
				<td class="u-nowrap-space">{{ Str::headline($card?->brand) }} ••••{{ $card?->last4 }}</td>
				<td class="u-nowrap-space">{{ $invoice->total() }}</td>
			</tr>
		@endforeach
	</x-shared-new.data-table>
</div>
