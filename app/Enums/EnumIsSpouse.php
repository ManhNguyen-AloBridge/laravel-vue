<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumIsSpouse: int
{
	use BackedEnumTrait;

	case NON_SPOUSE = 0;
	case SPOUSE = 1;

	public function text(): string
	{
		return match ($this) {
			EnumIsSpouse::NON_SPOUSE => __('attributes.is_spouse.non_spouse'),
			EnumIsSpouse::SPOUSE => __('attributes.is_spouse.spouse'),
		};
	}

	public static function getName(): string
	{
		return 'is_spouse';
	}
}
