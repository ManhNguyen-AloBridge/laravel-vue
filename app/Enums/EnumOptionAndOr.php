<?php

namespace App\Enums;

enum EnumOptionAndOr: int
{
	case AND = 0;
	case OR = 1;

	public function text(): string
	{
		return match ($this) {
			EnumOptionAndOr::AND => __('messages.shared.and'),
			EnumOptionAndOr::OR => __('messages.shared.or')
		};
	}
}
