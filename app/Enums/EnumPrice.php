<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumPrice: int
{
	use BackedEnumTrait;

	case IS_FREE = 1;
	case IS_PAY_FEES = 0;
	case NUMBER_USE_FREE = 5;

	public function text(): string
	{

		return match ($this) {
			EnumPrice::IS_FREE => trans_page('price/index.free'),
		};
	}
}
