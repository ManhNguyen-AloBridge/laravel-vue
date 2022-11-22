<?php

namespace App\Enums;

enum EnumMaintenanceStatus: int
{
	case WAITING = 1;
	case ACTIVE = 2;
	case FINISHED = 3;

	public function text(): string
	{
		return match ($this) {
			self::WAITING => trans_page('maintenance/index.waiting'),
			self::ACTIVE => trans_page('maintenance/index.active'),
			self::FINISHED => trans_page('maintenance/index.finished'),
		};
	}
}
