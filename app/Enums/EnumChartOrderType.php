<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumChartOrderType: int
{
	use BackedEnumTrait;

	case PERCENT_ASC = 1;
	case PERCENT_DESC = 2;
	case ALPHA = 3;

	public function text(): string
	{
		return match ($this) {
			self::PERCENT_ASC => __('attributes.chart_order_type.percent_asc'),
			self::PERCENT_DESC => __('attributes.chart_order_type.percent_desc'),
			self::ALPHA => __('attributes.chart_order_type.alpha')
		};
	}
}
