<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumSortUserType: int
{
	use BackedEnumTrait;

	case SKILL_LEVEL = 1;
	case QUALIFICATION_DATE = 2;
	case SENIORITY = 3;
	case ALPHA = 4;

	public function text(): string
	{
		return match ($this) {
			self::SKILL_LEVEL => __('attributes.sort_user_type.level'),
			self::QUALIFICATION_DATE => __('attributes.sort_user_type.qualification'),
			self::SENIORITY => __('attributes.sort_user_type.seniority'),
			self::ALPHA => __('attributes.sort_user_type.alpha')
		};
	}
}
