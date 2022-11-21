<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumInvitationCodeStatus: int
{
	use BackedEnumTrait;

	case INACTIVE = 0;
	case ACTIVE = 1;

	public function text(): string
	{
		return match ($this) {
			self::INACTIVE => __('attributes.status_invitation_code.inactive'),
			self::ACTIVE => __('attributes.status_invitation_code.active'),
		};
	}
}
