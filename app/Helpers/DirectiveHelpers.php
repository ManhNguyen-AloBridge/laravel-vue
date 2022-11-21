<?php

function processExpression($expression)
{
	return str_replace([
		"'",
		'"'
	], '', $expression);
}

if (!function_exists('attrs')) {
	function attrs(string $expression, array $replace = [])
	{
		return __('attributes.' . processExpression($expression), $replace);
	}
}

if (!function_exists('trans_page')) {
	function trans_page(string $expression, array $replace = [])
	{
		return __('views/pages/' . processExpression($expression), $replace);
	}
}
