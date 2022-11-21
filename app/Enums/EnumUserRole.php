<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumUserRole: int
{
	use BackedEnumTrait;

	case SUPER_ADMIN = 1;
	case ADMIN = 2;
	case SALE = 3;
	case STAFF = 4;

	public function text(): string
	{
		return match ($this) {
			EnumUserRole::SUPER_ADMIN => __('attributes.role.super_admin'),
			EnumUserRole::ADMIN => __('attributes.role.admin'),
			EnumUserRole::SALE => __('attributes.role.sale'),
			EnumUserRole::STAFF => __('attributes.role.staff')
		};
	}

	public static function getName(): string
	{
		return 'role';
	}
}
