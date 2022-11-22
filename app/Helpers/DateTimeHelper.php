<?php

use Carbon\Carbon;

if (!function_exists('convertYmDateToYmd')) {
	function convertYmDateToYmd(string $value)
	{
		if (explode('/', $value) != 2) {
			return $value;
		}

		return "{$value}/01";
	}
}

if (!function_exists('convertToYmDate')) {
	function convertToYmDate(string|Carbon $value)
	{
		$count = count(explode('/', $value));

		if ($count < 3) {
			return $value;
		}

		return date('Y/m', strtotime($value));
	}
}
