<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumGender: int
{
	use BackedEnumTrait;

	case MALE = 0;
	case FEMALE = 1;
	case OTHERS = 9;

	public function text(): string
	{

		return match ($this) {
			EnumGender::MALE => __('attributes.gender.male'),
			EnumGender::FEMALE => __('attributes.gender.female'),
			EnumGender::OTHERS => __('attributes.gender.others')
		};
	}

	public static function getName(): string
	{
		return 'gender';
	}
}
