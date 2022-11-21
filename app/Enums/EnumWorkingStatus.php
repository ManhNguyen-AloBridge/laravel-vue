<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumWorkingStatus: int
{
	use BackedEnumTrait;

	case NORMAL = 1;
	case PAUSE = 2;
	case RETIREMENT = 3;

	public function text(): string
	{
		return match ($this) {
			EnumWorkingStatus::NORMAL => __('attributes.status.normal'),
			EnumWorkingStatus::PAUSE => __('attributes.status.pause'),
			EnumWorkingStatus::RETIREMENT => __('attributes.status.retirement'),
		};
	}

	public static function getName(): string
	{
		return 'status';
	}
}
