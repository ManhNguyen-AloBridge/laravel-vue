<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumNotificationLevel: int
{
	use BackedEnumTrait;

	case GENERAL = 1;
	case IMPORTANT = 2;

	public function text(): string
	{
		return match ($this) {
			self::GENERAL => trans_page('notification/index.general'),
			self::IMPORTANT => trans_page('notification/index.important'),
		};
	}
}
