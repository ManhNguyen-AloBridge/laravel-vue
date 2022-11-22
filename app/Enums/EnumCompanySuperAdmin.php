<?php

namespace App\Enums;

use App\Traits\BackedEnumTrait;

enum EnumCompanySuperAdmin: int
{
	use BackedEnumTrait;

	case COMPANY_ID = 1;
}
