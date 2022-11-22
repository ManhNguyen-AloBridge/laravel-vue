<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait BackedEnumTrait
{
	// Return array value for backed enums
	public static function values(): array
	{
		return array_map(fn ($enum) => $enum->value, self::cases());
	}

	public static function value(string $text): int
	{
		$texts = __('attributes.' . self::getName());
		$textEL = array_search($text, $texts);
		foreach (self::cases() as $key => $case) {
			if (Str::lower($case->name) == $textEL) {
				return $case->value;
			}
		}
	}

	public static function texts(): array
	{
		return array_map(fn ($enum) => __('attributes.' . self::getName() . '.' . Str::lower($enum->name)), self::cases());
	}
}
