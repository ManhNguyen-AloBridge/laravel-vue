<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('checkRolesContainNullUser')) {
	function checkRolesContainNullUser(array $roles): bool
	{
		if (is_null(Auth::user())) {
			return false;
		}

		return in_array(Auth::user()->role()?->id, $roles);
	}
}
