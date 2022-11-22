<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumNotificationCompany: int
{
	use BackedEnumTrait;

	case MULTIPLE = 0;
	case ALL = 1;

	public function text(): string
	{
		return match ($this) {
			self::MULTIPLE => trans_page('notification/index.noti_to_multiple_companies'),
			self::ALL => trans_page('notification/index.noti_to_all_companies'),
		};
	}
}
