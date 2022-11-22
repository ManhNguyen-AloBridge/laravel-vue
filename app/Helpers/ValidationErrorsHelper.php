<?php

use Illuminate\Support\ViewErrorBag;

if (!function_exists('checkExistsKeyValidationErrors')) {
	function checkExistsKeyValidationErrors(ViewErrorBag $errors, string $key)
	{
		return str_contains(implode(array_keys($errors->default->messages())), $key);
	}
}
